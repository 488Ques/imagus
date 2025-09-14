import { generateRandomString } from "@/libs/string";
import { AppSidebar } from "../layout/AppSidebar";
import { AppTemplate } from "../layout/AppTemplate";
import { Post } from "./Post";

/* <Layout>
      <div class="flex flex-col gap-y-2 p-4">
        <div id="sneed">Sneed's Feed and Seed</div>

        <button type="button" data-on-click="@get('/sse')" class="btn w-fit">
          Open
        </button>
      </div>

      <div data-signals-foo="'bar'">
        <button type="button" class="btn" data-on-click="@get('/endpoint')">
          Activate
        </button>
        <div data-text="$foo"></div>
      </div>

      <div id="foo" data-text="el.id"></div>
    </Layout> */

export function Home() {
  return (
    <AppTemplate>
      <div class="flex gap-x-2">
        <AppSidebar />

        <div class="flex flex-col flex-1 gap-y-4">
          <div class="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] space-x-2 space-y-2">
            {Array.from({ length: 12 }, () => (
              <Post
                url={`/posts/${generateRandomString(5)}`}
                title={generateRandomString(8)}
              />
            ))}
          </div>
          <div class="join self-center">
            <button type="button" class="join-item btn btn-sm btn-active">
              1
            </button>
            <button type="button" class="join-item btn btn-sm">
              2
            </button>
            <button type="button" class="join-item btn btn-sm btn-disabled">
              ...
            </button>
            <button type="button" class="join-item btn btn-sm">
              99
            </button>
            <button type="button" class="join-item btn btn-sm">
              100
            </button>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
}
