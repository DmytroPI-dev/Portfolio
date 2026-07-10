import { rm, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const indexPath = path.join(distDir, "index.html");
const serverEntryPath = path.join(distDir, "server", "entry-server.js");

const template = await readFile(indexPath, "utf8");
const { render } = await import(`file://${serverEntryPath}`);
const appHtml = render();

if (!template.includes("<!--app-html-->")) {
  throw new Error("Missing <!--app-html--> placeholder in dist/index.html");
}

await writeFile(indexPath, template.replace("<!--app-html-->", appHtml));
await rm(path.join(distDir, "server"), { force: true, recursive: true });
