import type { JSX } from "hono/jsx";
import cn from "@/libs/cn";

export function Link({
  class: className,
  ...props
}: JSX.IntrinsicElements["a"]) {
  return (
    <a {...props} class={cn(className, "text-sky-500 hover:text-sky-500/75")} />
  );
}
