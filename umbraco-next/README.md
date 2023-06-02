# Umbraco & Next.js demo

**🔗 Live demo: [https://enterspeed-umbraco-nextjs.netlify.app/](https://enterspeed-umbraco-nextjs.netlify.app/)**

**✍ This demo was created for the tutorial: [Umbraco & Next.js](https://docs.enterspeed.com/tutorials/umbraco-nextjs/intro).**

## Cloning this demo

To clone a single folder use Git Bash.

```bash
git clone \
  --depth 1  \
  --filter=blob:none  \
  --sparse \
  https://github.com/enterspeedhq/enterspeed-demos \
;
cd enterspeed-demos
git sparse-checkout set umbraco-next
```

## Development

Once you've cloned this and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY`
`ENTERSPEED_PREVIEW_ENVIRONMENT_API_KEY` (If you're using [preview mode](https://nextjs.org/docs/advanced-features/preview-mode))
`ENTERSPEED_PREVIEW_SECRET` (If you're using [preview mode](https://nextjs.org/docs/advanced-features/preview-mode))

## What you'll need

You will need to set up a free Enterspeed account. You can sign up here: https://app.enterspeed.com/signup

Once you have created your account and created a tenant, you need to configure your tenant by setting up:

- Domains and hostnames
- Environment and environment clients
- Data sources

You can read more about it in our getting started guide: https://docs.enterspeed.com/getting-started

You will also need to run a Umbraco server (this can be done locally). Umbraco can be [downloaded here](https://our.umbraco.com/download).

### Ingesting dummy data

Once you have created a data source in Enterspeed, you can start ingesting data. This can be done using our API: https://docs.enterspeed.com/api#tag/Ingest

The demo data used for the Umbraco site can be found here:

- [Umbraco V9+ - NuGet](https://www.nuget.org/packages/Enterspeed.Demos.UmbracoCms.FairyTales)

**💡 TIP: If you don't want to set up a Umbraco site, you can use our demo data. When creating a new tenant in Enterspeed choose `Pre-populate with demo data`.**

### Setting up your schemas in Enterspeed

The schemas used to transform the data in Enterspeed can be found here: [DEMO DATA](./DEMO-DATA/).
