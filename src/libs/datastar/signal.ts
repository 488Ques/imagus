import type { Context, HonoRequest } from "hono";
import { joinDataByNewline, prefixData, splitDataByNewline } from "./helpers";
import { EventType } from "./types";

type PatchSignalsParameters = {
  signals: object;
  options?: {
    eventId?: string;
    onlyIfMissing?: boolean;
    retryDuration?: number;
  };
};

function patchSignals({ signals, options }: PatchSignalsParameters) {
  const signalsString = JSON.stringify(signals);

  const dataLines: string[] = [];
  if (options?.onlyIfMissing === true) {
    dataLines.push("onlyIfMissing true");
  }

  dataLines.push(...prefixData(splitDataByNewline(signalsString), "signals"));

  return {
    id: options?.eventId,
    retry: options?.retryDuration,
    event: EventType.EVENT_PATCH_SIGNALS,
    data: joinDataByNewline(dataLines),
  };
}

// ---

type ReadSignalsError = {
  success: false;
  error: string;
};

type ReadSignalsSuccess = {
  success: true;
  signals: object;
};

type ReadSignalsResponse = ReadSignalsError | ReadSignalsSuccess;

const QUERY_PARAMETER = "datastar";

const MAX_JSON_SIZE = 1024 * 1024;

const READ_SIGNALS_SIZE_ERROR: ReadSignalsError = {
  success: false,
  error: "Request payload too large",
};

const READ_SIGNALS_PARSE_ERROR: ReadSignalsError = {
  success: false,
  error: "Unknown error while parsing request",
};

const readSignals = (c: Context): Promise<ReadSignalsResponse> => {
  return c.req.method === "GET"
    ? Promise.resolve(readSignalsFromQuery(c.req))
    : readSignalsFromBody(c.req);
};

const readSignalsFromQuery = (req: HonoRequest): ReadSignalsResponse => {
  const queryString = req.query(QUERY_PARAMETER);
  if (!queryString) {
    return { success: false, error: "No datastar object in request" };
  }

  if (queryString.length > MAX_JSON_SIZE) {
    return READ_SIGNALS_SIZE_ERROR;
  }

  try {
    const signals = JSON.parse(queryString);
    return { success: true, signals };
  } catch {
    return READ_SIGNALS_PARSE_ERROR;
  }
};

const readSignalsFromBody = async (
  req: HonoRequest,
): Promise<ReadSignalsResponse> => {
  try {
    const signals = await req.json();
    return { success: true, signals };
  } catch {
    return READ_SIGNALS_PARSE_ERROR;
  }
};

export { patchSignals, readSignals };
