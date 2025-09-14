import type { JSX } from "hono/jsx/jsx-runtime";
import type { SSEStreamingApi } from "hono/streaming";
import { joinDataByNewline, prefixData, splitDataByNewline } from "./helpers";
import { type DatastarSSEMessage, EventType } from "./types";

//** Data **//
type ElementPatchMode =
  | "outer"
  | "inner"
  | "replace"
  | "prepend"
  | "append"
  | "before"
  | "after"
  | "remove";

type PatchElementsParameters = {
  elements: string | JSX.Element;
  options?: {
    mode?: ElementPatchMode;
    eventId?: string;
    selector?: string;
    retryDuration?: number;
    useViewTransition?: boolean;
  };
};

//** Calculations **//
function patchElements({
  elements,
  options,
}: PatchElementsParameters): DatastarSSEMessage {
  const elementsString =
    typeof elements === "string" ? elements : String(elements);
  const dataLines: string[] = [];

  if (options?.mode && options.mode !== "outer") {
    dataLines.push(`mode ${options.mode}`);
  }

  if (options?.selector) {
    dataLines.push(`selector ${options.selector}`);
  }

  if (options?.useViewTransition) {
    dataLines.push(`useViewTransition true`);
  }

  dataLines.push(...prefixData(splitDataByNewline(elementsString), "elements"));

  return {
    event: EventType.EVENT_PATCH_ELEMENTS,
    data: joinDataByNewline(dataLines),
  };
}

//** Actions **//
async function send(stream: SSEStreamingApi, message: DatastarSSEMessage) {
  await stream.writeSSE(message);
}

export { patchElements, send };
