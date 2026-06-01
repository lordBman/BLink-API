import { Glob } from "bun";
import JetLogger from "jet-logger";

const glob = new Glob("*.ts");
const path = "./src/scripts";
const files = Array.from(glob.scanSync(path));

if (files.length === 0) {
    JetLogger.warn("No entry points found in the ./scripts directory.");
    process.exit(0);
}

JetLogger.info(`Found ${files.length} entry points: ${files.join(", ")}`);
Bun.build({
    entrypoints: files.map(file => `${path}/${file}`),
    outdir: './assets/js',
    minify: true,
    sourcemap: 'linked',
    splitting: false,
    naming: {
        entry: '[name].[ext]',
        chunk: '[dir]/chunks/[name].[ext]',
        asset: '[dir]/assets/[name]-[hash].[ext]'
    }
}).then((init)=>{
    if (!init.success) {
        JetLogger.err(`Build failed: ${init.logs}`);
        process.exit(1);
    }
});