import { patchElements } from "./element";

type ExecuteScriptParameters = {
  script: string;
  options?: {
    eventId?: string;
    attributes?: string[];
    autoRemove?: boolean;
    retryDuration?: number;
  };
};

function executeScript({ script, options }: ExecuteScriptParameters) {
  const attributes: string[] = options?.attributes ?? [];

  const shouldAutoRemove = options?.autoRemove ?? true;
  if (shouldAutoRemove) {
    attributes.push('data-effect="el.remove()"');
  }

  const attributesString =
    attributes.length > 0 ? ` ${attributes.join(" ")}` : "";
  const scriptElement = `<script${attributesString}>${script}</script>`;

  return patchElements({
    elements: scriptElement,
    options: {
      mode: "append",
      selector: "body",
      eventId: options?.eventId,
      retryDuration: options?.retryDuration,
    },
  });
}

export { executeScript };
