const esb = require('esbuild')

const buildJS = async (cfg = {}) => {
  await esb.build({
    entryPoints: ['src/index.mjs'],
    bundle: true,
    minify: cfg.minify,
    loader: {
      '.mjs': 'jsx'
    },
    outfile: cfg.outfile
  })

  console.log(`[*] esbuild: ${cfg.outfile} built`)
}

const main = async () => {
  await Promise.all([
    buildJS({ minify: false, outfile: 'dist/x-debug.js' }),
    buildJS({ minify: true, outfile: 'dist/x.js' })
  ])
}

main().catch((error) => {
  console.log('esbuild failed', error)
  process.exit(1)
})
