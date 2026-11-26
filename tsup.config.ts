import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.tsx"],
	format: ["esm"],
	dts: true,
	outDir: "dist",
	// lucide-react and motion stay external (they are dependencies with sideEffects: false),
	// so the app bundler keeps only the icons it imports.
	external: ["react", "react-dom", "motion", "lucide-react"],
});
