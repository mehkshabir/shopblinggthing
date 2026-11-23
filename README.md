# The BlingThing

## Run locally
```
npm install
npm run dev
```
Open the link it prints (usually http://localhost:5173).

## Edit products, prices, team
Open `src/data.js`. Change a name or price, or add a line. New photos go in `src/assets/products/` (.jpg).

## Deploy on Vercel (free Hobby plan, free *.vercel.app link)
1. Create a free account at vercel.com and a free GitHub account.
2. Upload this folder to a new GitHub repository (github.com > New > upload files).
3. In Vercel click Add New > Project, pick the repository, and press Deploy. Settings are auto-detected (Vite).
4. In about a minute you get a link like `the-blingthing.vercel.app`. Every future GitHub change redeploys automatically.

## How ordering works
Order on Instagram opens the @shopblingthing DM and copies a message ("Hi! I'd like to order X (PKR price)"). Instagram doesn't support prefilled text, so the customer pastes it.
