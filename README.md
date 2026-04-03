# DealGuard

Let sales ask for aggressive discounts without breaking pricing rules.

Contract: [https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303](https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303)

## What it does

Paste the customer deal notes and the pricing policy. The contract decides if the discount can pass, needs exception review, or should be blocked.

## Why GenLayer

Business pain is obvious and valuable.
Non-comparative validation keeps the contract simple.
Browser wallet flow makes approvals feel native.

## Contract mode

- Non-comparative equivalence

## Browser wallet flow

1. Open the app in a browser with the GenLayer Studio wallet available.
2. Paste the case input plus policy or rubric context.
3. Sign with the browser wallet and let the intelligent contract return the decision onchain.

## Local run

1. `pnpm install`
2. `pnpm dev`
3. Keep `.env.local` pointed at Studionet and the deployed contract address.

## Deployed contract

- Address: `0x463a014DcA0a89C66C22678b41B63D4D3b024303`
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303](https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303)
