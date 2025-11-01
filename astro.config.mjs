// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "Brush",
      customCss: ["./src/styles/custom.css", "@fontsource/varela-round"],
      logo: {
        light: "./src/assets/brush_logo.svg",
        dark: "./src/assets/brush_logo_dark.svg",
        replacesTitle: true,
      },
      sidebar: [
        {
          label: "Get started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Install Gadget app", slug: "get-started/gadget-app" },
            { label: "Install Shopify theme", slug: "get-started/shopify-theme" },
            { label: "Deploy to production", slug: "get-started/deploy-prod" },
          ],
        },
        {
          label: "Tutorial",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Market setup", slug: "tutorial/market-setup" },
            { label: "Page setup", slug: "tutorial/page-setup" },
            { label: "Component setup & login", slug: "tutorial/component-setup-login" },
            { label: "Products grid layout", slug: "tutorial/products-grid-layout" },
            { label: "Basic backend fetch", slug: "tutorial/basic-download" },
            { label: "Storefront product data", slug: "tutorial/storefront-product" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
