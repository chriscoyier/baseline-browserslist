import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { exec } from "child_process";
import { promisify } from "util";
import legacy from "@vitejs/plugin-legacy";

const execAsync = promisify(exec);

// Shared browserslist query
const BROWSERSLIST_QUERY = "baseline widely available";

function buildOnChange() {
  let building = false;

  return {
    name: "build-on-change",
    async handleHotUpdate({ file }) {
      if (building) return;

      building = true;
      console.log(`\nFile changed: ${file}`);
      console.log("Running npm run build...\n");

      try {
        const { stdout, stderr } = await execAsync("npm run build");
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
      } catch (error) {
        console.error("✗ Build failed:", error.message);
      } finally {
        building = false;
      }
    },
  };
}

export default {
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(BROWSERSLIST_QUERY)),
    },
  },
  build: {
    minify: false,
    cssMinify: false,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  plugins: [
    legacy({
      targets: BROWSERSLIST_QUERY,
      modernPolyfills: true,
      renderLegacyChunks: false,
    }),
    buildOnChange(),
  ],
};
