# Umbraco & Next.js & Krabs

**✍ This demo was created for the article: [Sprout endless sites from a single Next.js and Umbraco instance](https://www.enterspeed.com/blog/sprout-endless-sites-from-a-single-nextjs-and-umbraco-instance/).**

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
git sparse-checkout set umbraco-next-krabs
```

## Development

Once you've cloned this and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start an express server and afterward a development server.

```bash
node server.js # Starts the Express server
# Next, open a new terminal and run:
npm run dev # Starts a Next.js development server
```

You will need to edit your [hosts file](https://www.nublue.co.uk/guides/edit-hosts-file/) to actually see what you're doing.

Insert the following domain names in your hosts file:

```
127.0.0.1 dev.devbeer.com
127.0.0.1 dev.tobeer.com
127.0.0.1 dev.lorembeer.com
127.0.0.1 dev.icebeer.com
```

To view the result, open one of the following links with your browser:

- [dev.devbeer.com:3000](dev.devbeer.com:3000)
- [dev.tobeer.com:3000](dev.tobeer.com:3000)
- [dev.lorembeer.com:3000](dev.lorembeer.com:3000)
- [dev.icebeer.com:3000](dev.icebeer.com:3000)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.locale file

`ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY`

## What you'll need

You will need to set up a free Enterspeed account. You can sign up here: https://app.enterspeed.com/signup

Once you have created your account and created a tenant, you need to configure your tenant by setting up:

- Domains and hostnames
- Environment and environment clients
- Data sources

You can read more about it in our getting started guide: https://docs.enterspeed.com/getting-started

You will also need to run a Umbraco server (this can be done locally). Umbraco can be [downloaded here](https://our.umbraco.com/download).

### Ingesting dummy data

Once you have created a data source in Enterspeed, you can start ingesting data. This can be done using our Umbraco integration: [https://docs.enterspeed.com/integrations](https://docs.enterspeed.com/integrations)

The demo data used for the Umbraco site can be found here: 
- [Demo data for Umbraco V9](https://www.nuget.org/packages/Enterspeed.Demos.UmbracoCms.V9.MultisiteBeers)
- [Demo data for Umbraco V10](https://www.nuget.org/packages/Enterspeed.Demos.UmbracoCms.V10.MultisiteBeers)


You can find the data used in the demo here: [DEMO DATA](./DEMO-DATA/)

### Setting up your schemas in Enterspeed

The schemas used to transform the data in Enterspeed can be found here: [DEMO DATA](./DEMO-DATA/).
