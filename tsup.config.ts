import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.tsx"],
	format: ["esm"],
	dts: true,
	outDir: "dist",
	external: ["react", "react-dom"],
	noExternal: ["motion", "lucide-react"],
});
