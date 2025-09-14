import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { streamSSE } from "hono/streaming";
import { patchElements, patchSignals, send } from "@/libs/datastar";
import { Home } from "./components/home/Home";
import { PostDetails } from "./components/posts/PostDetails";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<Home />);
});

app.get("/posts/:id", (c) => {
  const id = c.req.param("id");
  return c.html(<PostDetails id={id} />);
});

app.get("/sse", async (c) => {
  return streamSSE(c, async (stream) => {
    const patchedElements1 = patchElements({
      elements: <div id="sneed">Formerly Chuck's</div>,
    });
    console.log("🚀 ~ patchedElements1:", patchedElements1);
    const patchedElements2 = patchElements({
      elements: <div id="sneed">Sneed's Feed and Seed</div>,
    });
    console.log("🚀 ~ patchedElements2:", patchedElements2);
    await send(stream, patchedElements1);
    await stream.sleep(1000);
    await send(stream, patchedElements2);
  });
});

app.get("/endpoint", async (c) => {
  return streamSSE(c, async (stream) => {
    const patchedSignal = patchSignals({ signals: { foo: "WOW!" } });
    await send(stream, patchedSignal);
  });
});

export default app;
