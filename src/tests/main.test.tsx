import { expect, test } from "bun:test";
import { EventType, patchElements } from "@/libs/datastar";

test("datastar.patchElements", () => {
  const comp = (
    <div>
      <div>Nice</div>
      <div>Good</div>
    </div>
  );
  const patchedElements = patchElements({ elements: comp });
  const result = {
    event: EventType.EVENT_PATCH_ELEMENTS,
    data: "<div><div>Nice</div><div>Good</div></div>",
  };
  expect(patchedElements).toEqual(result);
});
