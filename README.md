# DealGuard

Let sales ask for aggressive discounts without breaking pricing rules.

Contract: [https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303](https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303)

## What this app is

DealGuard is a pricing exception gate for sales leaders, revenue operations, and finance teams. Paste the customer deal notes and the pricing policy. The contract decides if the discount can pass, needs exception review, or should be blocked.

## The problem it solves

Discount approvals are high-friction because the commercial upside is real, but so is the margin risk. DealGuard gives sales a fast answer without losing pricing discipline or auditability.

## How the product works

1. Connect a browser wallet on GenLayer Studionet.
2. Paste deal notes and requested discount.
3. Paste pricing guardrails.
4. Sign one write transaction to the intelligent contract.
5. Wait for the contract to return the structured result.
6. Read the verdict, score, reasons, and next action in the UI.

## What the contract decides

The contract performs this judgment onchain:

> Review the deal request against pricing guardrails and decide whether it should be approved, reviewed, or rejected.

Returned fields:

- headline
- verdict
- score
- reasons
- next_action
- proof_of_advantage

The verdict is always APPROVE, REVIEW, or REJECT. The score is an integer from 0 to 100, and the reasons array is always kept short enough to read instantly.

## Why GenLayer is necessary here

The contract is evaluating whether a deal request is justified under real pricing policy, not just checking a numeric threshold. GenLayer is useful because the approval logic includes context, upside, timing pressure, and policy interpretation.

Consensus mode: **Non-comparative equivalence**

Validators independently apply the same task and criteria to the case. This keeps the verdict stable when the app is enforcing a policy, gate, or approval rule with a tight output schema.

## Example input shape

Deal notes and requested discount:

~~~text
ACV: $180k
Requested discount: 32%
Reason: multi-year close by Friday
Expansion upside: regional rollout to 5 plants...
~~~

Pricing guardrails:

~~~text
Base policy: discounts above 20% require strategic upside and a named approval chain.
~~~

## Important files

- contracts/dealguard.py: intelligent contract
- deploy/001_deploy.mjs: deployment script for Studionet
- src/App.tsx: browser UI
- src/lib/genlayer.ts: wallet connection and contract calls
- src/appConfig.ts: app task, copy, placeholders, and mode

## Run locally

1. pnpm install
2. Ensure .env.local contains VITE_CONTRACT_ADDRESS=0x463a014DcA0a89C66C22678b41B63D4D3b024303
3. Ensure .env.local contains VITE_GENLAYER_RPC_URL=https://studio.genlayer.com/api
4. pnpm dev
5. Open the app in a browser with Rabby, MetaMask, or another injected wallet that can switch to GenLayer Studionet.

## Deployed contract

- Address: 0x463a014DcA0a89C66C22678b41B63D4D3b024303
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303](https://studio.genlayer.com/contracts?import-contract=0x463a014DcA0a89C66C22678b41B63D4D3b024303)
