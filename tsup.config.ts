import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { defineConfig } from "tsup";

const cssInline = {
	name: "css-inline",
	setup(build: { onResolve: Function; onLoad: Function }) {
		build.onResolve({ filter: /\.css\?inline$/ }, (args: { path: string; resolveDir: string }) => ({
			path: `${resolve(args.resolveDir, args.path.replace(/\?inline$/, ""))}.inline-text`,
			namespace: "css-inline",
		}));
		build.onLoad({ filter: /.*/, namespace: "css-inline" }, async (args: { path: string }) => {
			const file = args.path.replace(/\.inline-text$/, "");
			return {
				contents: `export default ${JSON.stringify(await readFile(file, "utf8"))};`,
				loader: "js",
				resolveDir: dirname(file),
			};
		});
	},
};

export default defineConfig({
	entry: ["src/index.tsx"],
	format: ["esm"],
	dts: true,
	outDir: "dist",
	external: ["react", "react-dom"],
	noExternal: ["motion", "lucide-react"],
	esbuildPlugins: [cssInline],
});
