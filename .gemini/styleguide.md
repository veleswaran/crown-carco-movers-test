# Altalya Web Style Guide

## Generic Rules for Static & Dynamic Websites (SEO-First)

---

## 0. Purpose (NON-NEGOTIABLE)

This document defines **mandatory architectural, coding, SEO, testing, performance, and behavioral rules** for **AI agents and developers** working on web applications.

❗ **If any rule is violated, the implementation is considered incorrect — even if it renders, builds, or ranks temporarily.**

### Primary Goals

* Predictable AI-generated code
* SEO-optimized web presence
* High performance (Core Web Vitals)
* Accessibility and usability
* Long-term maintainability
* Safe AI extensibility

---

## 1. Applicability (FUTURE-PROOF)

These rules apply to:

* Static websites (marketing, landing pages, blogs)
* Dynamic websites (CMS, SaaS, dashboards)
* Admin panels
* PWA-enabled apps
* SEO-driven content platforms

The guide is **domain-agnostic** and **business-neutral**.

---

## 2. Core Architectural Principles (HARD RULES)

### 2.1 Separation of Concerns (MANDATORY)

Code MUST follow a layered structure:

```
Page / Route
   ↓
Feature / Section
   ↓
Hooks / Logic
   ↓
Services / Data Access
```

#### Forbidden:

* ❌ Pages calling APIs directly
* ❌ UI components owning business logic
* ❌ Data fetching mixed with presentation
* ❌ Global side effects in components

---

### 2.2 Feature-First Organization (MANDATORY)

Code MUST be organized by **feature or page intent**, not by file type.

```
src/
 ├── app/
 ├── features/
 │   ├── home/
 │   ├── pricing/
 │   ├── blog/
 │   ├── auth/
 │   └── dashboard/
 ├── shared/
 │   ├── components/
 │   ├── hooks/
 │   ├── seo/
 │   ├── types/
 │   └── utils/
```

#### Forbidden:

* ❌ Flat `components/` without context
* ❌ Cross-feature imports bypassing `shared/`
* ❌ SEO logic scattered across components

---

## 3. Static vs Dynamic Rendering Rules

### 3.1 Static Rendering (DEFAULT)

Use static generation when content is:

* Marketing pages
* Blogs
* Documentation
* Landing pages
* SEO-critical pages

Rules:

* Prefer build-time rendering
* Use incremental regeneration only when required

---

### 3.2 Dynamic Rendering

Allowed only when:

* User-specific content is required
* Auth/session context exists
* Real-time data is essential

❌ Avoid dynamic rendering for SEO pages
❌ Avoid client-side rendering for indexable content

---

## 4. SEO Rules (CRITICAL – NON-NEGOTIABLE)

### 4.1 Metadata Control (MANDATORY)

Every public page MUST define:

* Title (≤ 60 chars)
* Meta description (≤ 160 chars)
* Canonical URL
* Open Graph tags
* Twitter card metadata

❌ No default or empty metadata
❌ No duplicated titles across pages

---

### 4.2 Semantic HTML (MANDATORY)

Rules:

* Exactly ONE `<h1>` per page
* Proper heading hierarchy (`h1 → h2 → h3`)
* Use semantic tags: `header`, `main`, `section`, `article`, `footer`

❌ No div-only layouts
❌ No skipped heading levels

---

### 4.3 Content SEO Rules

* Text content must be crawlable (no JS-only rendering)
* Keywords must be natural, not stuffed
* Internal linking is mandatory for large sites

❌ Hidden text for SEO
❌ Keyword stuffing
❌ Cloaking

---

### 4.4 Images & Media SEO

Mandatory:

* Descriptive `alt` attributes
* Proper image sizing
* Lazy loading for non-critical images

❌ Missing alt text
❌ Oversized images

---

## 5. Performance Rules (CORE WEB VITALS)

Targets:

* LCP < 2.5s
* CLS < 0.1
* INP < 200ms

Rules:

* Lazy load non-critical components
* Minimize client-side JS
* Avoid unnecessary hydration

❌ Heavy libraries for simple UI
❌ Over-hydrated pages

---

## 6. Accessibility Rules (WCAG-ALIGNED)

Mandatory:

* Keyboard navigation
* ARIA roles for interactive elements
* Proper labels for inputs
* Sufficient color contrast

Accessibility regressions = bugs.

---

## 7. UI & Component Rules

### 7.1 Component Responsibility

| Type              | Responsibility      |
| ----------------- | ------------------- |
| UI Component      | Pure presentation   |
| Feature Component | Composes UI + logic |
| Container         | Orchestration only  |

❌ UI components fetching data
❌ Containers with raw JSX logic

---

## 8. Data Fetching & Security (GENERIC)

Rules:

* Centralized data access layer
* No hardcoded endpoints in components
* Environment-based configuration only

❌ Secrets in client code
❌ Trusting client-side validation

---

## 9. Testing Rules (MANDATORY)

### Required Coverage

| Layer          | Test Type   |
| -------------- | ----------- |
| Utilities      | Unit        |
| Hooks          | Unit        |
| Feature logic  | Unit        |
| Critical pages | Integration |

Rules:

* Test behavior, not implementation
* Mock external services
* No snapshot-only tests

---

## 10. TypeScript Rules (STRICT)

Mandatory:

* `strict: true`
* Explicit return types
* Shared types for APIs

❌ `any`
❌ `@ts-ignore`

---

## 11. Configuration & Environment Rules

* No direct `process.env` usage outside config
* Public vars must be prefixed
* Config must be typed

---

## 12. AI Behavioral Constraints (CRITICAL)

### AI MUST:

* Follow existing structure
* Ask questions if SEO intent is unclear
* Prefer static rendering for public pages
* Consider long-term SEO impact

### AI MUST NOT:

* Invent new architectures
* Break SEO fundamentals
* Optimize prematurely
* Introduce unnecessary dependencies

---

## 13. SEO Ownership Rule (IMPORTANT)

> **The website must remain fully understandable, crawlable, and rank-stable even if JavaScript fails.**

This overrides UI convenience decisions.

---

## 14. orangeen Rule (ABSOLUTE)

> **If the site cannot be safely extended, re-indexed, or redesigned in 12 months without SEO loss or architectural refactor, the implementation is incorrect.**

---