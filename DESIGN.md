# Design System Document

## 1. Creative North Star: "The Ethereal Vault"
This design system is built upon the concept of **"The Ethereal Vault."** We are not building a typical e-commerce grid; we are designing a premium, immersive gallery for digital artifacts. The aesthetic rejects the "flat web" in favor of depth, light refraction, and atmospheric mystery. 

To break the "template" look, we utilize **intentional asymmetry**. Hero elements should bleed off-canvas, and typography should utilize extreme scale shifts—pairing massive, technical headers with tiny, high-contrast labels. The goal is to make the user feel like they are interacting with a high-end physical console or a luxury obsidian display case.

---

## 2. Color & Atmospheric Depth
Our palette is rooted in the void of `#0e0e0e`, punctuated by high-energy violet light.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** 1px solid lines create visual clutter that breaks the "Vault" immersion. Instead, define boundaries through:
*   **Background Shifts:** Use `surface-container-low` sections against the `surface` background.
*   **Tonal Transitions:** Define areas using subtle radial gradients that emanate from the `primary` glow.

### Surface Hierarchy & Nesting
Treat the UI as layers of dark glass. Depth is achieved through the nesting of surface tiers:
*   **Base Layer:** `surface` (#0e0e0e) for the main canvas.
*   **Section Layer:** `surface-container-low` (#131313) for large content areas.
*   **Interaction Layer:** `surface-container-high` (#201f1f) for cards or interactive modules.

### The "Glass & Gradient" Rule
To achieve the "Crystal" signature, use **Glassmorphism** for floating elements (modals, dropdowns, navigation bars). 
*   **Recipe:** `surface_variant` at 40% opacity + 20px Backdrop Blur.
*   **Signature Textures:** Main CTAs must use a linear gradient from `primary` (#cc97ff) to `primary_dim` (#9c48ea) at a 135-degree angle to provide a "pulsing" energy.

---

## 3. Typography: The Editorial Edge
We pair the technical precision of **Space Grotesk** with the clean readability of **Manrope**.

*   **Display & Headlines (Space Grotesk):** Use `display-lg` for product titles. These should be set with tight letter-spacing (-0.04em) to feel architectural and "heavy."
*   **Body & UI (Manrope):** Use `body-md` for all descriptions. The generous x-height of Manrope ensures legibility against the dark background.
*   **Labeling:** `label-md` should be used for metadata (e.g., "PLATFORM," "RELEASE DATE") and should always be set in All-Caps with +0.1em letter-spacing to evoke a premium, "spec-sheet" feel.

---

## 4. Elevation & Depth
In this design system, light is the only thing that creates height.

*   **The Layering Principle:** Place a `surface-container-lowest` (#000000) card inside a `surface-container-high` section to create a "recessed" look, or vice versa for a "lifted" look.
*   **Ambient Glows:** Standard black shadows are banned. Use **Ambient Purple Glows**: `primary` (#cc97ff) at 8% opacity with a 32px blur for elevated cards. This mimics the light cast from a neon source.
*   **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use a "Ghost Border": `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Primitive Components

### Buttons
*   **Primary:** Gradient (`primary` to `primary_dim`), `xl` rounded corners (1.5rem). Text: `label-md` Bold, All-Caps.
*   **Secondary:** Ghost style. Transparent background with a `primary` "Ghost Border" (20% opacity). On hover, transition to 10% `primary` background fill.
*   **Tertiary:** No background. `primary` text with a subtle `secondary_container` glow on hover.

### Glass Cards
*   **Requirement:** No dividers. Use `xl` (1.5rem) or `lg` (1rem) corner radius.
*   **Layout:** Use vertical white space (32px or 48px) to separate the title from the body. Background: `surface-container` with a subtle top-left to bottom-right gradient.

### Input Fields
*   **Style:** `surface_container_highest` background. No border. 
*   **Focus State:** The field background remains dark, but a 1px `primary` glow appears at the *bottom* only, and the `primary` color bleeds into the text cursor.

### Chips (Category Tags)
*   **Selection Chips:** `full` (9999px) roundedness. When selected, use `secondary_container` with `on_secondary_container` text.

### The "Crystal" Scrollbar
*   **Track:** `surface`.
*   **Thumb:** `surface_variant` with `full` roundedness. On hover, the thumb transitions to `primary`.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text is left-aligned and imagery breaks the grid on the right.
*   **Do** lean into high-contrast ratios. White text on `#0e0e0e` must be sharp.
*   **Do** use `primary_container` for subtle "soft glow" backgrounds behind transparent product PNGs to give them "aura."

### Don’t:
*   **Don’t** use 100% opaque borders. They make the UI look like a legacy "boxed" website.
*   **Don’t** use standard drop shadows. Always use a tinted glow (`primary` or `secondary` tokens).
*   **Don’t** use divider lines to separate list items. Use 16px or 24px of padding and a slight background shift on hover.
*   **Don’t** use "pure" grey. Every neutral should have a hint of the `primary` or `surface_variant` tone to maintain the "Crystal" atmosphere.