import { cp, mkdir, writeFile } from 'node:fs/promises';

const serverCode = `import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../client/", import.meta.url));
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};

function getRequest(input) {
  return input?.request instanceof Request ? input.request : input;
}

async function serve(pathname) {
  const safePath = normalize(decodeURIComponent(pathname)).replace(/^([\\\\/])+/, "");
  const filePath = join(root, safePath || "index.html");
  if (!filePath.startsWith(root)) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error("not a file");
    const body = await readFile(filePath);
    return new Response(body, {
      headers: {
        "content-type": mime[extname(filePath)] || "application/octet-stream",
      },
    });
  } catch {
    const body = await readFile(join(root, "index.html"));
    return new Response(body, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
}

export default async function handler(input) {
  const request = getRequest(input);
  if (!request || request.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  return serve(new URL(request.url).pathname);
}
`;

await mkdir('dist/server', { recursive: true });
await writeFile('dist/server/index.js', serverCode);
await mkdir('dist/.openai', { recursive: true });
await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
