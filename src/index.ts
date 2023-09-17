const server = Bun.serve({
  port: 3000,
  fetch(request) {
    console.log("🔥🔥🔥 ~ file: index.ts:4 ~ fetch ~ request:", request)
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on localhost:${server.port}`);