# Fast Pizza — Redesign Plan (Based on Stitch Design)

## Executive Summary

Transform the current Fast Pizza app from its warm mustard/cream palette with Fraunces/Manrope/Piazzolla to the Stitch Material 3-inspired system: **terracotta primary (#a33900)**, **sage tertiary (#006947)**, **amber secondary (#855300)** on **cream background (#fff8f5)** with **Plus Jakarta Sans / Inter** typography. The redesign introduces elevated component patterns (sticky cart bar, inline quantity steppers, progress stepper, live oven cam) while preserving all existing React/Redux/Router logic.

---

## 1. Design Token Mapping

### 1.1 Color Palette

| Current (tailwind.config.js) | Stitch (Material 3) | Role |
|---|---|---|
| `cream-50: #F7F3E8` | `background: #fff8f5` / `surface: #fff8f5` | Page background |
| `cream-100: #F0E9D6` | `surface-container-low: #faf2ee` | Card backgrounds |
| `mustard-100: #F7EAC4` | `surface-container: #f4ece8` | Elevated surfaces |
| `mustard-300: #EBC87A` | `surface-container-high: #eee7e3` | Input backgrounds |
| `mustard-600: #B8892F` | `secondary: #855300` | Secondary actions |
| `mustard-400: #E0A83A` | `secondary-container: #fea619` | Secondary filled |
| `basil-500: #4A7C59` | `tertiary: #006947` / `tertiary-container: #00855b` | Success/green actions |
| `red-600` (ad-hoc) | `primary: #a33900` | **Primary CTAs, priority, oven** |
| `red-500` (ad-hoc) | `primary-container: #cc4900` | Primary filled |
| — | `error: #ba1a1a` / `error-container: #ffdad6` | Destructive/errors |
| — | `outline: #8e7166` / `outline-variant: #e2bfb2` | Borders/dividers |
| — | `on-surface: #1e1b19` | Primary text |
| — | `on-surface-variant: #5a4138` | Secondary text |
| — | `on-primary: #ffffff` | Text on primary |
| — | `on-secondary: #ffffff` | Text on secondary |
| — | `on-tertiary: #ffffff` | Text on tertiary |

### 1.2 Typography

| Current | Stitch | Usage |
|---|---|---|
| `Fraunces` (display) | `Plus Jakarta Sans` (800/700/600) | **All headlines, display, hero** |
| `Manrope` (body) | `Inter` (400/500/600/700) | **All body, labels, UI text** |
| `Piazzolla` (ingredients) | `Inter` (tabular nums for prices) | Price display with `font-variant-numeric: tabular-nums` |

**Type Scale (Stitch):**
- `display-hero`: 56px/60px, -0.03em, 800
- `display-hero-mobile`: 36px/40px, -0.025em, 800
- `headline-lg`: 30px/36px, -0.02em, 700
- `headline-lg-mobile`: 24px/30px, -0.015em, 700
- `headline-md`: 20px/28px, -0.015em, 700
- `headline-sm`: 18px/24px, -0.01em, 700
- `body-lg`: 16px/24px, 400
- `body-base`: 15px/22px, 400
- `body-sm`: 13px/18px, 400
- `label-base`: 14px/20px, 600
- `label-caps`: 11px/16px, +0.06em, 700 (uppercase)
- `price-tabular`: 16px/22px, -0.01em, 700 (tabular-nums)

### 1.3 Spacing System

| Stitch Token | Value | Usage |
|---|---|---|
| `space-xs` | 0.25rem (4px) | Micro gaps |
| `space-sm` | 0.5rem (8px) | Component internal |
| `space-md` | 1rem (16px) | Default gap |
| `space-lg` | 1.5rem (24px) | Section gaps |
| `space-xl` | 2rem (32px) | Large section gaps |
| `gutter-mobile` | 0.75rem (12px) | Mobile page padding |
| `gutter-tablet` | 1rem (16px) | Tablet page padding |
| `gutter` | 1.25rem (20px) | Desktop page padding |
| `margin` | 1.5rem (24px) | Max-width container margin |
| `margin-mobile` | 1rem (16px) | Mobile container margin |

### 1.4 Border Radius

| Token | Value |
|---|---|
| `DEFAULT` | 0.25rem (4px) |
| `lg` | 0.5rem (8px) |
| `xl` | 0.75rem (12px) |
| `full` | 9999px (pills) |

Cards use `rounded-xl` (12px), buttons use `rounded-full`, inputs use `rounded-xl`.

### 1.5 Shadows / Elevation

| Level | Shadow |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` |
| `shadow-xl` | `0 16px 48px rgba(0,0,0,0.16)` |

Header: `shadow-[0_1px_8px_rgba(0,0,0,0.04)]` with `bg-surface/85 backdrop-blur-xl`

---

## 2. Component-by-Component Redesign

### 2.1 AppLayout / Header (`src/ui/AppLayout.jsx`, `src/ui/Header.jsx`)

**Current:** Gradient bg `from-cream-50 via-mustard-100 to-mustard-300`, simple header with logo + username + search.

**Stitch Target:**
- Page bg: `bg-background` (#fff8f5)
- Fixed header: `bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]`
- Height: `h-16` (64px)
- Logo: `h-8` + wordmark "Fast-Pizza Co." in `font-headline-sm text-headline-sm`
- Search: Pill input `h-10 rounded-full bg-surface-container-lowest` with search icon, expands on focus
- Nav: `hidden md:flex` with label-base, active state = `text-primary font-bold`
- Cart link: inline-flex with badge `bg-surface-container-high text-on-surface font-label-caps`
- User avatar: `w-8 h-8 rounded-full bg-primary` with person icon

### 2.2 Home Page (`src/ui/Home.jsx`)

**Current:** Simple landing with name input.

**Stitch Target:**
- Hero section: 2-col grid (7/12 + 5/12 on lg)
- Left: Eyebrow `font-label-caps text-label-caps uppercase text-primary` + divider + `display-hero` headline + `body-lg` copy
- Name form: Pill input with person icon + primary CTA "Start Ordering →" with arrow_forward icon
- Success feedback: inline-flex with check_circle icon, tertiary color
- Trust badges: pulse dot + "Ovens hot & ready", star + rating
- Right: Hero pizza image in `aspect-[4/5] rounded-xl overflow-hidden shadow-xl` with gradient overlay
- Floating card: `-mt-12 mx-4` with featured pizza + price

### 2.3 Menu Page (`src/features/menu/Menu.jsx`, `src/features/menu/MenuItem.jsx`)

**Current:** Simple grid, add-to-cart button, sold-out overlay.

**Stitch Target:**
- Section header: Eyebrow "450°C Wood-Fired" + green pulse dot "Oven Ready"
- Headline: `headline-lg` "Artisan Pizza Menu"
- Subtitle: `body-base` descriptive copy
- Category filters: Horizontal scroll chip group
  - Active: `bg-primary text-on-primary shadow-sm`
  - Inactive: `bg-surface-container-low text-on-surface-variant`
  - All `rounded-full px-4 py-2 font-label-base` with `active:scale-95`
- Pizza cards: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-gutter`
  - Card: `bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`
  - Image: `aspect-square object-cover group-hover:scale-105 transition-transform duration-300`
  - Badges: Vegetarian (tertiary), Spicy (error with dot)
  - Content: `p-space-md` (16px), flex-col justify-between
  - Name: `headline-sm` truncate
  - Description: `body-sm text-on-surface-variant line-clamp-2`
  - Price + Actions:
    - **If qty > 0**: Inline stepper (dec / qty / inc / delete) — dec/inc `w-8 h-8 rounded-full`, delete `w-8 h-8`
    - **If qty = 0**: Primary "Add to Cart" pill button
  - Sold out: Grayscale image + overlay `bg-inverse-surface/65` with "Sold Out" pill

### 2.4 Cart Overview → Sticky Cart Bar (New Component)

**Current:** `CartOverview` slides up from bottom on all pages except `/cart`.

**Stitch Target:** Replace with **fixed bottom bar** (`fixed bottom-0 left-0 right-0 z-40`)
- Top accent line: `h-0.5 w-full bg-primary`
- Content: `h-16 max-w-7xl mx-auto px-margin flex items-center justify-between`
- Left: Shopping bag icon (secondary-container) + summary text `price-tabular` "2 Pizzas · $34.00"
- Right: "Open Cart →" secondary pill button `bg-surface-container-lowest text-on-surface`
- Hide on `/cart` page and when cart empty

### 2.5 Cart Page (`src/features/cart/Cart.jsx`, `src/features/cart/CartItem.jsx`)

**Current:** Vertical list with qty controls, summary card, confirm/clear buttons.

**Stitch Target:**
- Back link: `inline-flex items-center gap-2 font-label-base text-primary` with arrow_back icon
- Status pill: `bg-tertiary-fixed text-on-tertiary-fixed` with pulse dot "Oven Ready • 18 min"
- Funnel step label: `font-label-caps uppercase tracking-widest text-outline` "Order Funnel • Step 02"
- Headline: `headline-lg` "Your Cart, {name}"
- Item count pill: `bg-surface-container-low` with fire icon + count
- Cart items: `gap-3` cards `rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md`
  - Thumbnail: `w-16 h-16 rounded-xl object-cover`
  - Qty badge: `font-label-base text-primary font-bold` "2×"
  - Name: `headline-sm truncate`
  - Meta: `body-sm text-on-surface-variant` with ingredients + unit price
  - Qty stepper: `bg-surface-container-low p-1 rounded-full` with dec/inc `w-8 h-8` buttons
  - Line total: `w-16 text-right price-tabular`
  - Remove: `w-8 h-8 rounded-full bg-surface-container-low` hover error
- Empty state: Centered pizza icon + headline + "Browse Menu" primary CTA
- Summary card: `rounded-2xl bg-surface-container-lowest p-6 shadow-md`
  - "Order Summary" label + "Free Express Delivery Applied" badge (tertiary)
  - Subtotal / Delivery rows
  - Total: `headline-lg text-primary`
- Actions: Primary "Order Pizzas →" + Secondary "Clear Cart" with icon

### 2.6 Create Order Page (`src/features/order/CreateOrder.jsx`)

**Current:** Single column form with hidden inputs, priority checkbox, get-position button.

**Stitch Target:** **Two-column layout** (7/12 form + 5/12 sticky summary on lg)
- **Left Column:**
  - Eyebrow "01 / Dispatch Details" + `headline-lg` "Ready to order? Let's go!"
  - Form: `bg-surface-container-lowest rounded-2xl shadow-sm p-space-md sm:p-space-xl gap-space-lg`
  - Inputs: `h-12 pl-11 pr-4 rounded-xl bg-surface-container-low` with left icons (person, call, location_on)
  - Focus: `focus:bg-surface-container-lowest focus:shadow-md`
  - Address input: Embedded "Get Position" button `absolute right-1.5` in `bg-primary-fixed text-on-primary-fixed` pill
  - Geo status: Hidden `text-tertiary` "Location locked" shows after geocode
  - **Priority Card**: Checkbox styled as card `bg-primary-fixed/40 hover:bg-primary-fixed/60 rounded-2xl`
    - Custom checkbox: `w-6 h-6 rounded-lg` with check icon, peer-checked `bg-primary`
    - Headline + "Express +20%" badge `bg-secondary-container text-on-secondary-container`
    - Description text
- **Right Column (Sticky):**
  - Summary card: `rounded-2xl shadow-md p-space-md`
  - "02 / Order Summary" + item count pill
  - Line items: Thumbnail `w-12 h-12` + name + description + price
  - Cost breakdown: `bg-surface-container-low rounded-xl`
    - Subtotal row
    - Priority fee row (conditional opacity): inline "+20%" badge + amount in `text-primary`
    - Divider `h-px bg-outline-variant/40`
    - Total: `headline-sm` + `headline-lg text-on-surface`
  - Primary CTA: `w-full h-13 rounded-full bg-primary` with bolt icon + "Order now for $XX.XX"
  - Guarantee line: verified_user icon + "Hot-box guarantee • Pay on delivery or card"

### 2.7 Order Status Page (`src/features/order/Order.jsx`)

**Current:** Simple order details with status badge, delivery time, items list, summary.

**Stitch Target:**
- **Top Section (7/12 + 5/12):**
  - Left: Live tracking card `bg-surface-container-lowest rounded-xl p-space-lg shadow-sm`
    - Eyebrow "Live Order Tracking" + timestamp
    - Headline "Order #849201 Status"
    - Badges: Priority (secondary-container with bolt icon) + Status (tertiary-container with pulse dot)
    - Countdown: Fire icon + "Only 24 minutes left" + "Estimated delivery: 7:45 PM"
    - Progress ring: SVG circle with stroke-dashoffset + "Oven Temp 850°F"
  - Right: Kitchen cam `rounded-xl overflow-hidden shadow-md min-h-[200px]`
    - Full-bleed image + gradient overlay
    - Overlay: "Kitchen Cam • Station 02" + "Hand-stretched & stone-baked" + "Live" pill
- **Progress Stepper:**
  - "Preparation & Delivery Progress" + "Step 2 of 3"
  - 3 steps with connecting line (hidden mobile, visible md+)
  - Step 1: Completed (tertiary check) "Order Received" + timestamp
  - Step 2: In Progress (primary grill icon) "Baking in Wood-Fired Oven"
  - Step 3: Upcoming (outline) "Out for Delivery" + estimated time
- **Bottom Section (7/12 + 5/12):**
  - Left: Itemized receipt card
    - "Itemized Receipt" + "Your Wood-Fired Order (3 Items)" + "Pay on Delivery" pill
    - Items: Thumbnail `w-16 h-16` + name + description + price + "Extra:" labels
  - Right: Delivery map card + Payment summary card
    - Map: `w-full h-40 bg-cover bg-center rounded-lg` with location pin + address
    - Payment: Pizza price + Priority fee (with bolt icon) in `bg-surface-container-lowest rounded-xl`
    - Total: `headline-lg text-primary`
    - **Prioritize Button**: `w-full py-3.5 rounded-full bg-primary` with bolt icon
      - On click: → `bg-tertiary` with check_circle "Priority Confirmed", feedback toast

### 2.8 Search Order (Header Integration)

**Current:** Separate `SearchInput` component in header.

**Stitch Target:** Integrated into header nav (desktop) — already covered in 2.1. Mobile: could be drawer or separate screen.

---

## 3. Animation & Motion

| Current | Stitch |
|---|---|
| `float-pizza`, `bump`, `slide-up`, `slide-down` | `transition-all duration-200` (cards), `duration-300` (images), `duration-700` (progress line) |
| Custom keyframes | Material motion: `active:scale-95`, `hover:-translate-y-0.5`, `hover:scale-105` (images) |
| — | Pulse animation on live indicators (`animate-pulse` on dots) |
| — | Spinner on geolocation (`animate-spin` on progress_activity icon) |

---

## 4. Icons

Stitch uses **Material Symbols Outlined** (variable font) via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```
Key icons used: `search`, `person`, `arrow_back`, `arrow_forward`, `local_fire_department`, `delivery_dining`, `eco`, `shopping_bag`, `remove_shopping_cart`, `location_on`, `my_location`, `call`, `bolt`, `check_circle`, `verified_user`, `verified`, `outdoor_grill`, `two_wheeler`, `progress_activity`, `delete`, `remove`, `add`, `check`, `star`, `local_pizza`

---

## 5. Implementation Priority

| Phase | Components | Effort |
|---|---|---|
| **1. Foundation** | Tailwind config (colors, fonts, spacing, radius), global CSS reset, font imports | Low |
| **2. Layout** | AppLayout, Header (sticky, search, nav, avatar), StickyCartBar | Medium |
| **3. Home** | Hero, name form, trust badges, featured pizza card | Medium |
| **4. Menu** | Category chips, pizza cards with inline stepper, badges, sold-out state | High |
| **5. Cart** | Item cards with thumbnail stepper, summary card, actions | Medium |
| **6. Create Order** | Two-column layout, priority card, live totals, geolocation button | High |
| **6. Order Status** | Live tracking, kitchen cam, progress stepper, itemized receipt, prioritize action | High |
| **7. Polish** | Animations, focus states, reduced-motion, accessibility, responsive | Medium |

---

## 6. Questions Before Implementation

1. **Scope**: Redesign all 5 pages (Home, Menu, Cart, Create Order, Order Status) or start with a subset?
2. **Preserve**: Any current components you want to keep as-is (e.g., `LazyImage`, `Loader`, `ConfirmModal`, `LinkBtn`)?
3. **API**: The Stitch design assumes slightly different data shapes (e.g., `ingredients` array → description string, `priorityPrice` → calculated 20%). Should I adapt the UI to current API or suggest API changes?
4. **Images**: Stitch uses specific pizza photography URLs. Use your existing `imageUrl` from API or placeholder service?
5. **Dark Mode**: Stitch config includes `darkMode: "class"` but only light tokens shown. Implement dark mode now or later?

---

## 7. Current App vs Stitch — Key Behavioral Differences

| Feature | Current App | Stitch Design |
|---|---|---|
| Cart visibility | Slide-up footer (all pages except /cart) | Fixed bottom bar (all pages except /cart) |
| Quantity control | Separate +/- buttons in cart only | **Inline stepper on menu cards + cart** |
| Priority | Checkbox on create order only | **Checkbox on create order + "Prioritize" button on order status** |
| Geolocation | Separate button below address | **Embedded trailing button in address input** |
| Order tracking | Static status + time | **Live countdown + progress ring + kitchen cam + stepper** |
| Search | Header input | **Header input (desktop) integrated** |
| Category filter | None | **Horizontal chip group on menu** |
| Sold out | Overlay on card | **Grayscale image + overlay + disabled state** |
| Empty cart | Separate page/component | **Inline empty state in cart page** |
| Form layout | Single column | **Two-column with sticky summary** |

---

Ready to proceed when you approve the plan. Which phase would you like to start with, or shall we tackle Foundation + Layout first?