# BeCafe Arya FS — Sales Upgrade

This build adds the next growth layer to the existing site.

## Added
- Quick-order cart on every menu item and craving recommendation.
- Pickup timing, optional customer name/notes, quantity controls and estimated menu total.
- WhatsApp order handoff plus copy-order fallback.
- Mobile bottom bar: Directions / Menu / Order.
- Printable/table QR code that opens the live menu with analytics tags.
- Local SEO upgrades for Be Cafe Arya FS / Roorkee Bypass.
- Canonical URL, OpenGraph/Twitter metadata, CafeOrCoffeeShop structured data, sitemap and robots.
- QR-scan and order conversion analytics hooks.

## Important: direct WhatsApp number
The website is fully functional in WhatsApp **share mode** because no outlet WhatsApp number was supplied.

To make every order go directly to the cafe:
1. Open `script.js`.
2. Find `whatsappNumber: ''`.
3. Put the cafe WhatsApp number with country code and digits only.
   Example format: `919876543210`
4. Commit the file.

Do not use the example number above.

## QR menu
- Website QR file: `menu-qr.png`
- Print-ready counter/table card: `becafe-menu-qr-card.png`
- QR destination: `https://becafe-rke.vercel.app/?utm_source=table_qr&utm_medium=offline&utm_campaign=menu#menu`

This means QR traffic can be identified separately in analytics.

## Deploy update to your existing GitHub/Vercel site
The small patch contains:
- index.html
- style.css
- script.js
- menu-qr.png
- becafe-menu-qr-card.png
- sitemap.xml
- robots.txt
- site.webmanifest

Upload those files to the root of your existing GitHub `Becafe-rke` repository and replace matching files. Vercel will redeploy automatically.

## Vercel
Keep Web Analytics and Speed Insights enabled in the project dashboard for visitor and performance data.
