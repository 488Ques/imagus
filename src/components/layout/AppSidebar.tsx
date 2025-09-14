import cn from "@/libs/cn";
import { generateRandomString } from "@/libs/string";

type AppSidebarProps = {
  className?: string;
};

export function AppSidebar({ className }: AppSidebarProps) {
  return (
    <aside class={cn("p-4 min-w-40 space-y-3", className)}>
      <div class="join">
        <input type="text" placeholder="Search" class="input h-6" />
        <button type="button" class="btn h-6">
          Search
        </button>
      </div>

      <div class="flex flex-col space-y-1">
        {Array.from({ length: 8 }, (_, i) => (
          <div class="space-x-1">
            <a
              href="/#"
              class="text-sky-400 transition-colors hover:text-sky-400/75"
            >
              touhou-{generateRandomString(i + 1)}
            </a>
            <span class="text-neutral-300">81k</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
