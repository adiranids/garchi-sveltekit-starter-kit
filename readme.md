# GarchiCMS SvelteKit example

A minimal [Svelte](https://svelte.dev) app powered by the [SvelteKit](https://kit.svelte.dev) meta-framework, with content being served from [Garchi CMS](https://garchi.co.uk/).

## Overview

- 💡 For demonstration purposes, this template assumes that you have a Garchi Headless Web page with the slug `/home`, and a single Section called `Header` that takes two string properties; `title` and `subtitle`.
- `src/routes/+page.svelte` demonstrates displaying a page from Garchi CMS. Page details are passed into the HTML `<head>` element for SEO, and all page sections are rendered as Svelte components.
- `src/routes/+page.server.ts` demonstrates how to fetch a page from the Garchi CMS API.
- `src/components/garchi/...` should contain a Svelte component for each section type that you have in your Garchi CMS project. These will be imported dynamically by `src/components/GarchiComponent.svelte`, based on the section name that you chose inside Garchi CMS.
- `src/app.html` includes a special Garchi CMS script that enables the live page preview feature.

### Extra notes

- The Garchi API key is imported as a [private environment variable](https://kit.svelte.dev/docs/modules#$env-static-private), which prevents you from accidentally leaking your API keys.
- Likewise, the Garchi API client code is also implemented as a [server-only lib module](https://kit.svelte.dev/docs/modules#$lib-$lib-server), at `src/lib/server/garchi.ts`.

## Development

To build on top of this template, first clone or download this repository to your machine.

Next, copy the contents of the `.env.example` file into a new file called `.env`. Replace the `GARCHI_API_KEY` variable with your [Garchi CMS key](https://garchi.co.uk/documentation/1.0/headlessweb/getting-started#generating-an-api-key), and `GARCHI_SPACE_UID` with the [Space UID](https://garchi.co.uk/documentation/1.0/headlessweb/space#space-uid) of the space you want to fetch pages from.

From the command line, first install dependencies with `npm install`. Then to start a development server:

```bash
npm run dev

# or, start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
