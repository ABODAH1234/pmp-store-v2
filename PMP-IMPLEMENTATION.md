# PMP red design review
The storefront layout uses the original Salla store logo, the existing hero asset, three image department cards, two special request cards, four native product cards, four service links, and the dark footer. It replaces the old light-background custom layout.

## Completed
- Corrected the repository identity in package.json and twilight.json to ABODAH1234/pmp-store-v2.
- Retained the existing official Raed settings, components and features. No speculative schema changes.
- Both source and ready-to-serve CSS and JS are included and wired into the master layout and Webpack.
- Product images/IDs were verified against the connected merchant catalog on 2026-09-14; hidden archive products excluded. Prices in production remain native Salla data.
- The 1FZ background photograph is the original photo from product 778375203, not a generated replacement.
- Department cards represent curated selections of existing products. These are not newly invented catalog categories; Salla previously returned zero active categories.
- Special requests prepare a message and explicitly require the customer to send it through email or WhatsApp; no automatic submission is claimed.
- Seven executable request-link checks passed: channel selection, phone normalization, Arabic/special-character preservation, email fallback, rejection of injected recipient parameters, and absent-contact behavior.

## Remaining checks
This is a review branch, not a claimed pixel-perfect release.
- No browser-rendered comparison or Salla Partner import test was possible from this connection. A successful static audit does not establish Salla acceptance.
- Confirm the store logo and existing hero asset against the approved reference in the real preview.
- Run pnpm install and pnpm production in Codespaces before release.
- Shipping/return policy URLs were not exposed in the footer-menu read. Service links currently lead to the native footer menu. Actual policy destinations require review; policy text is not invented.
- The current store has info@pmpperformance.online, but no WhatsApp or Snapchat settings. Those links display when configured. Email is the request fallback.

## Preview
Download preview/index.html and open it locally. It uses the same new markup/CSS and actual public catalog photos with a dated price snapshot. It is a design preview, not a Salla checkout simulation.
No live theme configuration, pricing or inventory was changed. The merchant's previous ZIP remains intact.
