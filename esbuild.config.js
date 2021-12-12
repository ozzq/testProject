import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    // esbuild options
    entryPoints: ["./game.ts"],
    bundle: true,
    outdir: "dist",
    watch: true,
    target: "esnext",
    platform: "node",
  },
  {
    // serve options (optional)
    port: 3000,
    root: ".",
  }
);
