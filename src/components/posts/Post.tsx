import { AppTemplate } from "../layout/AppTemplate";
import { Link } from "../ui/Link";
import { Comment } from "./Comment";

type PostDetailsProps = {
  id: number;
};

export function PostDetails({ id }: PostDetailsProps) {
  return (
    <AppTemplate>
      <div class="space-y-2">
        {/* Image */}
        <div class="w-[300px] h-[500px] bg-sky-300" />

        {/* Commentary */}
        <div class="tabs tabs-lift">
          <input
            type="radio"
            name="commentary"
            class="tab"
            aria-label="Original commentary"
            checked
          />
          <div class="tab-content border-base-300 bg-base-100 p-10">
            Original commentary
          </div>

          <input
            type="radio"
            name="commentary"
            class="tab"
            aria-label="Translated commentary"
          />
          <div class="tab-content border-base-300 bg-base-100 p-10">
            Translated commentary
          </div>
        </div>

        {/* Prev/Next */}
        <div class="w-full p-3 bg-stone-100 rounded-sm flex justify-between">
          <Link href={`/posts/${id - 1}`}>&lt; prev</Link>
          <Link href={`/posts/${id + 1}`}>next &gt;</Link>
        </div>

        {/* Comments */}
        <div class="space-y-2">
          <Comment />
        </div>
      </div>
    </AppTemplate>
  );
}
