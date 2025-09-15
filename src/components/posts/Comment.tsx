import { Icon } from "../ui/Icon";
import { Link } from "../ui/Link";

export function Comment() {
  return (
    <article class="flex items-start space-x-10 text-sm py-4">
      {/* User */}
      <div class="flex flex-col space-y-1">
        <Link href="/">SomeRandomName</Link>
        {/* TODO Make this relative date */}
        <div class="italic">almost 2 years ago</div>
      </div>

      {/* Content */}
      <div class="flex flex-col space-y-2.5">
        <p>Example comment</p>
        <div class="flex items-center space-x-1.5">
          <button
            type="button"
            aria-label="Upvote"
            class="btn btn-ghost btn-xs"
          >
            <Icon name="lucide:arrow-big-up" width="24" height="24" />
          </button>
          <span>0</span>
          <button
            type="button"
            aria-label="Downvote"
            class="btn btn-ghost btn-xs"
          >
            <Icon name="lucide:arrow-big-down" width="24" height="24" />
          </button>
        </div>
      </div>
    </article>
  );
}
