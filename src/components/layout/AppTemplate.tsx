import type { PropsWithChildren } from "hono/jsx";
import cn from "@/libs/cn";
import { AppNavBar } from "./AppNavBar";
import { Layout } from "./Layout";

type AppTemplateProps = PropsWithChildren<{
  classNames?: { main?: string };
}>;

export function AppTemplate({ children, classNames }: AppTemplateProps) {
  return (
    <Layout>
      <AppNavBar />
      <main class={cn("p-4 flex-1", classNames?.main)}>{children}</main>
    </Layout>
  );
}
