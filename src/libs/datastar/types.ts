import type { SSEMessage } from "hono/streaming";

enum EventType {
  EVENT_PATCH_SIGNALS = "datastar-patch-signals",
  EVENT_PATCH_ELEMENTS = "datastar-patch-elements",
}

type DatastarSSEMessage = SSEMessage & {
  event: EventType;
};

export { type DatastarSSEMessage, EventType };
