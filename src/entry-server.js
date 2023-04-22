import { createApp } from './App'

export async function render(url, manifest) {
  const { app, router } = createApp()

  router.push(url)

  await router.isReady()

  const matchedComponents = router.currentRoute.value.matched

  if (!matchedComponents.length) {
    throw new Error('No components matched')
  }

  const html = await renderToString(app)

  const preloadLinks = renderPreloadLinks(manifest, url)

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${preloadLinks}
        <title>My App</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="module" src="/src/main.js"></script>
      </body>
    </html>
  `
}