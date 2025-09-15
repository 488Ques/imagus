import type { PropsWithChildren } from "hono/jsx";

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/gh/starfederation/datastar@main/bundles/datastar.js"
        ></script>
        <link rel="stylesheet" href="/static/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
