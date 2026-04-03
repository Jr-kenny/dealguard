export const appConfig = {
  "slug": "dealguard",
  "name": "DealGuard",
  "oneLiner": "Let sales ask for aggressive discounts without breaking pricing rules.",
  "pitch": "Paste the customer deal notes and the pricing policy. The contract decides if the discount can pass, needs exception review, or should be blocked.",
  "mode": "nonComparative",
  "primaryLabel": "Deal notes and requested discount",
  "secondaryLabel": "Pricing guardrails",
  "primaryPlaceholder": "ACV: $180k\nRequested discount: 32%\nReason: multi-year close by Friday\nExpansion upside: regional rollout to 5 plants...",
  "secondaryPlaceholder": "Base policy: discounts above 20% require strategic upside and a named approval chain.",
  "task": "Review the deal request against pricing guardrails and decide whether it should be approved, reviewed, or rejected.",
  "criteria": "Output must be valid JSON with keys headline, verdict, score, reasons, next_action, proof_of_advantage. verdict must be APPROVE, REVIEW, or REJECT. score must be an integer 0-100. reasons must contain exactly 3 short strings tied to pricing policy, upside, or risk.",
  "judgingPoints": [
    "Business pain is obvious and valuable.",
    "Non-comparative validation keeps the contract simple.",
    "Browser wallet flow makes approvals feel native."
  ],
  "theme": {
    "accent": "#2563eb",
    "accentSoft": "#dbeafe",
    "surface": "#eff6ff",
    "ink": "#111827"
  },
  "modeLabel": "Non-comparative equivalence"
} as const;
