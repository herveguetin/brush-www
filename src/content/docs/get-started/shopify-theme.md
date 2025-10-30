---
title: Setup your Shopify theme
description: Setup Brush into a Shopify theme
---

Once the backend app is intalled (see previous step, [Setup your Gadget app](/get-started/gadget-app/)), you can now add the frontend part of Brush into your Shopify theme.

This guide assumes you already know how to develop a theme for Shopify and that your local development environment is working.

## Install Brush

- From your Shopify theme folder, run `npm create brush@latest`
- Choose "Frontend" and continue
- Use `.` for the "In which relative directory to install?" question and let the Brush installer run.
- Add this line to your theme layout to load the automatically generated `brush.js` asset file

`<script src="{{ 'brush.js' | asset_url }}" type="module"></script>`

- Get ready for development by running `shopify theme dev --store [YOUR_STORE]` and, only then, `cd ./brush` followed by `npm run dev`.

> ⚠️ Always make sure to run `shopify theme dev` from your theme main directory before running `npm run dev` from the `./brush` directory to make sure that Shopify watches changes in your Brush frontend app and updates the `./assets/brush.js` file accoringly.
