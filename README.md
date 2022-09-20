# Enterspeed demos

This repo contains example projects built using Enterspeed as a speed layer (high-performance data store).

## Demos

- [astro](https://github.com/enterspeedhq/enterspeed-demos/tree/master/astro) - ([https://enterspeed-astro.netlify.app/](https://enterspeed-astro.netlify.app/))
- [gatsby](https://github.com/enterspeedhq/enterspeed-demos/tree/master/gatsby) - ([https://enterspeed-gatsby.netlify.app/](https://enterspeed-gatsby.netlify.app/))
- [next](https://github.com/enterspeedhq/enterspeed-demos/tree/master/next) - ([https://enterspeed-nextjs.netlify.app/](https://enterspeed-nextjs.netlify.app/))
- [nuxt](https://github.com/enterspeedhq/enterspeed-demos/tree/master/nuxt) - ([https://enterspeed-nuxt.netlify.app/](https://enterspeed-nuxt.netlify.app/))
- [remix](https://github.com/enterspeedhq/enterspeed-demos/tree/master/remix) - ([https://enterspeed-remix.netlify.app/](https://enterspeed-remix.netlify.app/))
- [sveltekit](https://github.com/enterspeedhq/enterspeed-demos/tree/master/sveltekit) - ([https://enterspeed-sveltekit.netlify.app/](https://enterspeed-sveltekit.netlify.app/))
- [umbraco-next](https://github.com/enterspeedhq/enterspeed-demos/tree/master/umbraco-next) - ([https://enterspeed-umbraco-nextjs.netlify.app/](https://enterspeed-umbraco-nextjs.netlify.app/))
- [umbraco-nuxt](https://github.com/enterspeedhq/enterspeed-demos/tree/master/umbraco-nuxt) - ([https://enterspeed-umbraco-nuxt.netlify.app/](https://enterspeed-umbraco-nuxt.netlify.app/))
- [umbraco-next-krabs](https://github.com/enterspeedhq/enterspeed-demos/tree/master/umbraco-next-krabs) - No demo available
- [umbraco-storybook](https://github.com/enterspeedhq/enterspeed-demos/tree/master/umbraco-storybook) - ([https://enterspeed-umbraco-storybook.netlify.app/](https://enterspeed-umbraco-storybook.netlify.app/))
- [vanilla-js-google-sheets](https://github.com/enterspeedhq/enterspeed-demos/tree/master/vanilla-js-google-sheets) - ([https://enterspeed-vanilla-js-google-sheets.netlify.app/](https://enterspeed-vanilla-js-google-sheets.netlify.app/))

## What you'll need

You will need to set up a free Enterspeed account. You can sign up here: https://app.enterspeed.com/signup

Once you have created your account and created a tenant, you need to configure your tenant by setting up:

- Domains and hostnames
- Environment and environment clients
- Data sources

You can read more about it in our getting started guide: https://docs.enterspeed.com/getting-started

## Ingesting dummy data

Once you have created a data source in Enterspeed, you can start ingesting data. This can be done using our API: https://docs.enterspeed.com/api#tag/Ingest

You can find the data used in the demos here in each project's folder.

### Example ingest

```curl
curl --location --request POST 'https://api.enterspeed.com/ingest/v2/UNIQUE-ID' \
--header 'X-Api-Key: [INSERT-YOUR-OWN-API-KEY]' \
--header 'Content-Type: application/json' \
--data-raw '{
  "type": "blog",
  "url": "/blog"
}'
```

## How to clone a single folder

If you don't want to download the entire repo of demos, it's possible to clone a single folder using Git Bash.

```bash
git clone \
  --depth 1  \
  --filter=blob:none  \
  --sparse \
  https://github.com/enterspeedhq/enterspeed-demos \
;
cd enterspeed-demos
git sparse-checkout set [REPLACE-WITH-FOLDER-NAME]
```

## Caveats

All demos are hosted on [Netlify](https://www.netlify.com/). This means many of the demos contain Netlify-specific files and dependencies.
