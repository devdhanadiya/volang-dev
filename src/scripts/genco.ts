import fs from "fs";
import path from "path";
import fg from "fast-glob";

const COMPONENTS_DIR = path.resolve(__dirname, "../components");
const INDEX_FILE = path.join(COMPONENTS_DIR, "index.ts");

const files = fg.sync(["**/*.tsx", "**/*.ts"], {
    cwd: COMPONENTS_DIR,
    ignore: ["**/index.ts"],
});

const exports = files
    .map((filePath) => {
        const extless = filePath.replace(/\.(tsx|ts)$/, "");
        const name = path.basename(extless);
        return `export * from "./${extless}";`;
    })
    .join("\n") + "\n";

fs.writeFileSync(INDEX_FILE, exports);
console.log("✅ components/index.ts generated with", files.length, "exports.");
