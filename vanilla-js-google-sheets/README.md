# Vanilla JavaScript & Google Sheets demo

**👉 This demo was created for the article [Using Google Sheets as your CMS](https://www.enterspeed.com/blog/using-google-sheets-as-your-cms/).**

## Demo data

Demo data can be found in the folder [DEMO DATA](./DEMO-DATA).

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
git sparse-checkout set vanilla-js-google-sheets
```

## Development

Once you've cloned this and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server.

To keep our API keys safe, we use a [Netlify function](https://www.netlify.com/products/functions/) to fetch the data securely.

To use Netlify functions locally you will need to install the [Netlify CLI-package](https://www.npmjs.com/package/netlify-cli) and start a local dev server.

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you should be ready to go!

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY`

## What you'll need

You will need to set up a free Enterspeed account. You can sign up here: https://app.enterspeed.com/signup

Once you have created your account and created a tenant, you need to configure your tenant by setting up:
Domains and hostnames
Environment and environment clients
Data sources
You can read more about it in our getting started guide: https://docs.enterspeed.com/getting-started

### Ingesting dummy data

Once you have created a data source in Enterspeed, you can start ingesting data from your Google Sheet.

You will find the Google Apps Script in the DEMO-DATA folder: [`apps-script.gs`](./DEMO-DATA/apps-script.gs).

In the folder you will also find the dummy data used in the Google Sheet - the file is called [`movies.csv`](./DEMO-DATA/movies.csv).

### Setting up your schema in Enterspeed

The schema used to transform the data in Enterspeed can be found in the DEMO-DATA folder: [`enterspeed-schema.json`](./DEMO-DATA/enterspeed-schema.json).
