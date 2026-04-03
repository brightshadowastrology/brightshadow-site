# CLAUDE.md

This file provides guidance to Claude Code when working with this Next.js business website.

---

## Project Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Primitives:** Radix UI
- **Language:** TypeScript

---

## Styling Rules

### Global CSS First

- **Always refer to `app/globals.css` before writing any styles.**
- Use CSS custom properties (variables) defined in `globals.css` for colors, spacing, typography, radii, and shadows.
- Do not hardcode color values or spacing values that are already defined as CSS variables.
- If a token is missing from `globals.css`, add it there first, then reference it.

### Tailwind Usage

- Use Tailwind utility classes as the primary styling mechanism.
- Map Tailwind's `theme()` values to CSS variables in `globals.css` via `@layer base` where appropriate.
- Avoid arbitrary Tailwind values (e.g. `w-[347px]`) unless absolutely necessary — prefer design tokens.
- Use `cn()` (from `lib/utils.ts`) to merge class names conditionally.

### No Inline Styles

- Avoid `style={{}}` props. Use Tailwind classes or CSS variables instead.

---

## Component Rules

### Radix UI Primitives

- **Always prefer Radix UI primitives** for interactive components where applicable.
- Use Radix for: dialogs, dropdowns, tooltips, popovers, toggles, checkboxes, radio groups, sliders, tabs, accordions, navigation menus, selects, and similar interactive elements.
- Do **not** build custom accessibility logic from scratch if a Radix primitive covers the use case.
- Wrap Radix primitives in project-specific component files under `components/ui/` with Tailwind styling applied.

### Component File Structure

```
components/
  ui/                  # Radix-based primitive wrappers (Button, Dialog, Tabs, etc.)
  layout/              # Layout components (Header, Footer, Section, Container)
  [feature]/           # Feature-specific components
```

### Component Conventions

- Use named exports for all components.
- Accept a `className` prop on every component and merge it with `cn()`.
- Keep components in separate files — one component per file.
- Co-locate types with the component file.

---

## Next.js Conventions

- Use the **App Router** (`app/` directory) exclusively — do not use `pages/`.
- Prefer **Server Components** by default. Add `"use client"` only when necessary (event handlers, hooks, browser APIs, Radix interactivity).
- Use `next/image` for all images. Never use raw `<img>` tags.
- Use `next/link` for all internal navigation. Never use raw `<a>` tags for internal links.
- Place shared layouts in `app/layout.tsx` and route-specific layouts in nested `layout.tsx` files.
- Use `loading.tsx` and `error.tsx` files for streaming and error boundaries.

---

## File & Folder Conventions

```
app/
  globals.css          # ← Single source of truth for design tokens and base styles
  layout.tsx
  page.tsx
  [route]/
    page.tsx
    layout.tsx         # if needed
components/
  ui/
  layout/
lib/
  utils.ts             # cn() and other shared utilities
public/
  images/
```

---

## globals.css Guidelines

The `globals.css` file is the **single source of truth** for:

- Color palette (background, foreground, primary, secondary, muted, accent, destructive, border, ring, etc.)
- Border radii (`--radius-sm`, `--radius-md`, `--radius-lg`)
- Font families (`--font-sans`, `--font-mono`)
- Spacing scale (if custom tokens are needed beyond Tailwind defaults)
- Shadows and elevation tokens
- Dark mode overrides via `.dark` class or `@media (prefers-color-scheme: dark)`

**Before adding any new visual value, check `globals.css` first.**

---

## Accessibility

- All interactive components must be keyboard-navigable (Radix handles this for its primitives).
- Always provide meaningful `aria-label` attributes on icon-only buttons.
- Ensure sufficient color contrast — reference the design tokens, which should be contrast-compliant.
- Use semantic HTML elements (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`).

---

## Payload CMS

- Payload 3.x is installed as part of this Next.js project. Do not remove or modify `payload.config.ts` or anything in the `collections/` or `globals/` directories without being explicitly asked.
- Use the **Payload local API** for all server-side data fetching — never call the REST or GraphQL API from within the same Next.js app.

  ```ts
  import { getPayload } from "payload";
  import config from "@payload-config";

  const payload = await getPayload({ config });
  const posts = await payload.find({ collection: "posts" });
  ```

- **Collections** are defined in `collections/`. **Globals** are defined in `globals/`. Do not add content schema logic directly to page files.
- Rich text fields use the **Lexical editor**. Always use Payload's `RichText` component (or the appropriate Lexical renderer) to render them — never render as a plain string or with `dangerouslySetInnerHTML`.
- Do not write raw database queries — always go through the Payload API (`payload.find()`, `payload.findByID()`, `payload.findGlobal()`, `payload.create()`, `payload.update()`, etc.).
- Payload's admin panel is served at `/admin` — do not create a custom `/admin` route.
- Access control and hooks belong in the collection/global config, not in page or API route files.

---

## Figma Integration

- When **implementing or updating a component or page**, request the Figma node URL and use the Figma MCP (`get_design_context`) to extract structured design context — exact colors, spacing, typography, and variable names.
- When only a **quick visual reference** is needed (e.g. checking layout direction or rough proportions), a user-provided screenshot is sufficient — skip the MCP call to conserve resources.
- Always write any extracted design values (colors, radii, spacing, fonts) into `globals.css` as CSS variables — never hardcode them inline.
- Prefer specific **node-level URLs** (a single frame or component) over whole-file links for more accurate and efficient context extraction.

---

## Do Not

- Do not install or use shadcn/ui — use Radix primitives directly with custom Tailwind styling.
- Do not use CSS Modules or styled-components.
- Do not use the `pages/` directory.
- Do not use `<img>` or `<a>` tags for images or internal links.
- Do not write one-off color values — always use `globals.css` tokens.
- Do not add `"use client"` to a component unless it genuinely requires client-side interactivity.
