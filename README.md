# BeCafe RKE — Growth Upgrade

This build is ready for the existing flat-file GitHub/Vercel deployment.

## New customer-facing features
- Interactive **What are you craving?** recommender with Coffee / Hungry / Something Cold / Sweet modes.
- **Road-trip pit stop** section with a direct Google Maps CTA.
- Configurable **Today at BeCafe** live-offer block.
- Existing compact menu, real Google reviews, gallery, video, Instagram and Maps integration retained.
- Vercel Web Analytics + Speed Insights scripts included.

## Change the live offer
Open `script.js` and edit the `LIVE_OFFER` object near the bottom:

- `active: true` shows the offer; `false` hides it.
- Change `title`, `text`, `cta`, `href`, and `note`.
- Commit the edit to GitHub; Vercel redeploys automatically.

This lets you update the offer without touching the HTML or CSS.

## Analytics
The site includes Vercel Web Analytics and Speed Insights.

After deployment:
1. Open the BeCafe project in Vercel.
2. Open **Analytics** and enable Web Analytics if it is not already enabled.
3. Open **Speed Insights** and enable it.
4. Visit the live site in an incognito/private window, then check Analytics after data starts arriving.

Tracked conversion hooks include:
- menu opened
- craving selected
- recommended item opened
- directions click
- Google reviews click
- Instagram click
- menu PDF opened
- live-offer click

Page-view analytics work with Vercel Web Analytics. Availability of custom conversion events depends on the Vercel plan.

## Deploy this update
For the existing GitHub repository, replace only:
- `index.html`
- `style.css`
- `script.js`

Or upload the complete build from the full ZIP.
