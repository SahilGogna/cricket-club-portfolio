# 🏏 Cricket Club — Theme Guidelines

## Brand Colours (Jersey & Clothing)

These are the primary colours drawn directly from the club's jersey and clothing identity.

| Name       | Hex       | Usage                                      |
|------------|-----------|--------------------------------------------|
| Dark Red   | `#50071F` | Primary backgrounds, hero sections, footers |
| Light Red  | `#892139` | Hover states, accents, section dividers     |
| Navy Blue  | `#081127` | Secondary backgrounds, cards, overlays      |
| Golden     | `#B4894F` | Highlights, CTAs, headings, borders         |

---

## Extended Palette

Additional colours to support UI needs like text, backgrounds, and feedback states.

| Name           | Hex       | Usage                                              |
|----------------|-----------|----------------------------------------------------|
| Off-White      | `#F5F0E8` | Body text on dark backgrounds, light sections      |
| Pure White     | `#FFFFFF` | High-contrast text, icon fills, cards              |
| Muted Gold     | `#8A6535` | Subtle golden accents, secondary borders           |
| Deep Navy      | `#040B18` | Page background, deep sections                     |
| Light Grey     | `#CCBFB5` | Secondary text, placeholders, dividers             |
| Error Red      | `#D94040` | Form errors, warnings (avoid confusing with brand) |

---

## Colour Roles

### Backgrounds
- **Page background**: `#040B18` (Deep Navy)
- **Section background (alt)**: `#081127` (Navy Blue)
- **Hero/feature sections**: `#50071F` (Dark Red)

### Text
- **Primary text**: `#F5F0E8` (Off-White) on dark backgrounds
- **Secondary text**: `#CCBFB5` (Light Grey)
- **Headings / display text**: `#B4894F` (Golden) or `#FFFFFF`

### Accents & Interactive
- **CTA buttons**: `#B4894F` → hover `#8A6535`
- **Links**: `#B4894F`
- **Active/focus**: `#892139` (Light Red)
- **Borders / dividers**: `#892139` or `#B4894F` at low opacity

---

## Typography Pairing (Recommended)

| Role        | Font              | Weight     |
|-------------|-------------------|------------|
| Display     | Playfair Display  | 700 / 900  |
| Headings    | Outfit            | 600 / 700  |
| Body        | Outfit / Inter    | 400 / 500  |

---

## CSS Custom Properties (Ready to Use)

```css
:root {
  /* Brand */
  --color-dark-red:   #50071F;
  --color-light-red:  #892139;
  --color-navy:       #081127;
  --color-golden:     #B4894F;

  /* Extended */
  --color-deep-navy:  #040B18;
  --color-muted-gold: #8A6535;
  --color-off-white:  #F5F0E8;
  --color-white:      #FFFFFF;
  --color-grey:       #CCBFB5;

  /* Semantic */
  --bg-page:          var(--color-deep-navy);
  --bg-section-alt:   var(--color-navy);
  --bg-hero:          var(--color-dark-red);
  --text-primary:     var(--color-off-white);
  --text-secondary:   var(--color-grey);
  --text-heading:     var(--color-golden);
  --accent:           var(--color-golden);
  --accent-hover:     var(--color-muted-gold);
  --border:           var(--color-light-red);
}
```

---

## Colour Don'ts

- ❌ Don't use Light Red (`#892139`) as a text colour on dark backgrounds — low contrast
- ❌ Don't use Dark Red (`#50071F`) and Navy Blue (`#081127`) side by side without a separator — too similar in darkness
- ❌ Don't use plain black (`#000000`) — use Deep Navy instead to stay on-brand
- ❌ Don't use bright/saturated colours outside this palette without approval
