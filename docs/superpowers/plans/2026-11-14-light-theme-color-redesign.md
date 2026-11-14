# Light Theme Color Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing dark-blue design language of the M.M. Knitwear website with the approved "Bright Corporate Blue — Clean White — Soft Sky Blue — Premium Manufacturing Identity" light theme, using the official brand palette, without touching structure, content, or functionality.

**Architecture:** Centralize the new palette as CSS custom properties in the existing `:root` token block of `src/styles/global.css`, then refactor component styles that still reference old tokens or hardcode legacy hex/rgba values. Build everything token-first; no new dependencies, no framework changes, no structural rewrites.

**Tech Stack:** Astro (vanilla — global.css inlined via `?inline` + `inlineStylesheets: 'always'`), vanilla CSS custom properties, Google Fonts (Jost / Manrope).

**Spec:** The "Professional Light Theme Color Redesign" brief supplied by the human partner (2026-11-14): bright corporate blue `#00A8EC`, clean white, soft sky blue, premium manufacturing identity. Light theme only. Exact palette and per-component requirements are quoted in the Global Constraints below.

## Global Constraints

- Light theme ONLY. No dark mode styling, no black/navy/charcoal backgrounds, no dark footer, no dark gradient backgrounds, no dark overlays serving as section backgrounds.
- Official palette (exact values, use consistently):
  - Brand colors: primary cyan `#00A8EC`; light sky blue `#91D9F5`; pale cyan `#D1EAF6`; pastel sky `#D7F0FC`.
  - Backgrounds: main `#FFFFFF`; alternate `#F5FAFD`; light blue `#EAF6FC`; highlight `#D7F0FC`.
  - Typography: primary heading/body `#355264`; secondary text `#5A6F7B`; accessible link `#0079AC`.
  - Borders/surfaces: default border `#DCEBF2`; light decorative border `#D1EAF6`; card background `#FFFFFF`; soft panel `#F5FAFD`.
  - Interactive: primary button bg `#00A8EC`, text `#0F3043`, hover `#91D9F5`; secondary button bg `#D7F0FC`, text `#355264`, hover `#C5EAF9`; focus indicator `#00A8EC`.
- Strict visual restrictions: no dark sections/footer, no excessive gradients, no neon/glowing borders, no excessive rounded cards, no excessive shadows, no random decorative shapes, no generic AI aesthetics, no unnecessary animations, no inconsistent shades of blue, no low-contrast text, no white text on bright cyan.
- Preserve: page structure, routes, content/copy, navigation, images, interactivity, responsive layouts, SEO metadata, functional animations, company logo (incl. black square background). No full rewrite; no new UI framework or dependencies.

## Review Focus

1. Remaining dark backgrounds/overlays after the refactor (hero, page-header, `.section--brand`, CTA banner, video wrap, lightbox backdrop) must be converted to the light palette.
2. Legacy hardcoded colors left behind (old brand family `#0077ad…`, dark overlays `rgba(19, 101, 150, …)`, pale tints `#a5e6ff`, `#d5edfd`, `#d9f1ff`, old surfaces `#f0faff`, `#e0f5ff`, `#d0edfb`) must not survive as stray values.
3. Contrast after swap: primary button cyan `#00A8EC` with text `#0F3043`; body `#355264` on white; secondary text `#5A6F7B` on white/`#F5FAFD`.

## Tasks

### Task 1: Swap design tokens to the official light palette

**Files:**
- Modify: `src/styles/global.css:9-22` (`:root` token block)

**Interfaces:**
- Consumes: the approved palette from the spec.
- Produces: new token values that all later tasks reference (e.g. `--brand: #00A8EC`, `--brand-hover: #91D9F5`, `--brand-soft: #D7F0FC`, `--brand-softer: #D1EAF6`, `--bg-alt: #F5FAFD`, `--bg-light: #EAF6FC`, `--ink: #355264`, `--text: #5A6F7B`, `--line: #DCEBF2`, `--link: #0079AC`, `--btn-primary-bg/text/hover`, `--btn-secondary-bg/text/hover`).

- [ ] **Step 1: Replace the old token set** in `src/styles/global.css` `:root` with the official palette (old `--brand: #0077ad` … `--accent-600: #00608f` block replaced by the new token set).
- [ ] **Step 2: Update derived tokens** (`--surface`, `--surface-2`, `--line`, shadows if still referencing old hues, `--muted`).
- [ ] **Step 3: Verify** token-only values are used; no old hex values remain in `:root`.

### Task 2: Base backgrounds, sections, and typography colors

**Files:**
- Modify: `src/styles/global.css:54-62` (body), `src/styles/global.css:138-145` (`.section--surface`, `.section--brand`), `src/styles/global.css:175-196` (eyebrow), `src/styles/global.css:98-118` (headings/selection).

**Interfaces:**
- Consumes: new tokens from Task 1.
- Produces: light body background, alternating section backgrounds (`#FFFFFF` / `#F5FAFD`), light eyebrow/brand text.

- [ ] **Step 1: Set body background to `#FFFFFF`** via token (e.g. `--white` / new `--bg`).
- [ ] **Step 2: Convert `.section--brand`** from dark gradient to a light background (token, e.g. `#EAF6FC` / `#D7F0FC`) and adjust heading/eyebrow colors to the light palette.
- [ ] **Step 3: Point eyebrow/selection/heading accents** at the new cyan tokens.

### Task 3: Header and navigation styling

**Files:**
- Modify: `src/styles/global.css:289-304` (`.site-header`), `src/styles/global.css:330-367` (`.main-nav`), `src/styles/global.css:375-404` (`.nav-toggle`).

**Interfaces:**
- Consumes: new tokens.
- Produces: pure-white sticky header, subtle light border, cyan active underline, blue-gray nav type.

- [ ] **Step 1: Confirm header background is white** and border uses `--line`.
- [ ] **Step 2: Update nav link/hover/active colors** to heading/secondary tokens with cyan `#00A8EC` underline.

### Task 4: Hero slider, page headers, CTA banner, video, lightbox

**Files:**
- Modify: `src/styles/global.css:551-556` (`.hero`), `src/styles/global.css:589-619` (`.hero__dot`, `.hero__arrow`), `src/styles/global.css:628-687` (`.page-header`), `src/styles/global.css:1021-1060` (`.cta-banner`), `src/styles/global.css:1003-1018` (`.video-wrap`), `src/styles/global.css:1187-1235` (lightbox), and hero overlay markup/inline styles in `src/components/HeroSlider.astro`.

**Interfaces:**
- Consumes: new tokens, white/light backgrounds.
- Produces: light hero backgrounds with authentic photography, cyan accents, no dark overlays.

- [ ] **Step 1: Convert `.hero`** background from dark to `#FFFFFF` / `#EAF6FC`; adjust dot/arrow colors for light surfaces.
- [ ] **Step 2: Convert `.page-header`** from dark gradient to light background; heading/intro text to light tokens.
- [ ] **Step 3: Convert CTA banner / `.section--brand` usage / video / lightbox** to light equivalents where applicable.

### Task 5: Buttons, links, focus, forms, cards/stats surfaces

**Files:**
- Modify: `src/styles/global.css:215-273` (buttons), `src/styles/global.css:276-287` (card), `src/styles/global.css:831-880` (stats), `src/styles/global.css:689-745` (feature cards), `src/styles/global.css:1062-1090` (info cards), `src/styles/global.css:1092-1122` (division cards), `src/styles/global.css:1238-1305` (contact forms), `src/styles/global.css:1432-1582` (footer).

**Interfaces:**
- Consumes: new button/focus tokens.
- Produces: primary/secondary buttons per spec, readable links, white cards with `#DCEBF2` borders, stats on soft blue.

- [ ] **Step 1: Primary/secondary buttons** per spec (`#00A8EC` + `#0F3043` text/hover `#91D9F5`; secondary `#D7F0FC` + `#355264`/hover `#C5EAF9`).
- [ ] **Step 2: Links/focus/selection** at accessible cyan/blue tones.
- [ ] **Step 3: Cards, stats, feature/info/division surfaces** to white cards + soft blue stats.

### Task 6: Footer and remaining hardcoded legacy colors

**Files:**
- Modify: `src/styles/global.css:1433-1582` (`.site-footer`), `src/layouts/BaseLayout.astro:52` (`theme-color` meta), inline styles in `src/components/Header.astro`, `src/components/DivisionSubnav.astro`, pages (`about-us.astro`, `compliance.astro`, `out-projects.astro`, `projects/[division].astro`, `about-us/leadership.astro`).

**Interfaces:**
- Consumes: final token set.
- Produces: light footer (`#F5FAFD`/`#EAF6FC` bg, blue-gray text), updated theme-color.

- [ ] **Step 1: Convert footer** to light background with blue-gray text and subtle borders.
- [ ] **Step 2: Update inline hardcoded colors** (`theme-color`, header/mobile-nav backgrounds, page-level accents) to new tokens.

### Task 7: Sweep legacy colors and build

**Files:**
- Modify: any file with remaining legacy hex values.

**Interfaces:**
- Consumes: none (verification task).

- [ ] **Step 1: Grep** the repo for legacy palette hex values (`#0077ad`, `#006d9f`, `#00608f`, `#0e5a7e`, `#0d4a70`, `#0b3352`, `#3f6280`, `#55748d`, `#f0faff`, `#e0f5ff`, `#d0edfb`, dark rgba overlays, `#a5e6ff`, `#d5edfd`, `#d9f1ff`).
- [ ] **Step 2: Replace or token-map** any remaining occurrences.
- [ ] **Step 3: Run `npm run build`** and confirm clean build.

### Task 8: Final verification and commit

**Files:** none (verification) + commit.

- [ ] **Step 1: Verify no dark styling remains** (grep for dark backgrounds/gradients).
- [ ] **Step 2: Run `npm run build`** and confirm 18 pages build.
- [ ] **Step 3: Commit** with a conventional commit message.

---

## Self-Review Checklist (from writing-plans skill)

1. **Spec coverage:** Each spec section maps to tasks: palette→T1, backgrounds→T2, header→T3, hero→T4, buttons→T5, footer/forms→T6, restrictions→global constraints, preserve-functionality→constraints. Gap: contrast verification is a review step, not a task — acceptable (verification task T8).
2. **Step scan:** Steps are single actions with checkable results; code bodies intentionally omitted (tokens chosen per spec).
3. **Type consistency:** token names consistent across tasks (`--brand`, `--line`, etc.).
4. **Review Focus:** covered in the header (dark leftovers, legacy hex sweep, contrast).
5. **Proportion:** plan ~8 tasks vs. large single-file refactor — appropriate granularity; global.css is one file so tasks are theme-area based, which is a reasonable decomposition here.

---

**Plan complete and saved to `docs/superpowers/plans/2026-11-14-light-theme-color-redesign.md`.**

Please review the plan. Which execution approach would you prefer?

- **Subagent-driven** — A fresh subagent implements each task and a fresh reviewer checks it before the next one starts, then a whole-branch review at the end. Most thorough; costs a fresh context per task and per review.
- **Native** — I implement every task myself in this session, then one fresh reviewer on the most capable model checks the whole branch. Cheapest and fastest; no independent review until the end. Runs well here since the plan carries the design.

**For this plan I recommend subagent-driven, because the tasks have crisp file boundaries and token dependencies that a fresh implementer + fresh reviewer loop will catch cleanly.**

Does the plan capture what you want, and which approach should we use? If you pick subagent-driven, I'll also need to set up the required worktree context. If native, I'll just execute task by task with verification after each.
