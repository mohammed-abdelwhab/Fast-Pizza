# Fast Pizza 🍕

A modern, responsive pizza ordering web application built with React, Redux Toolkit, and React Router. Fast Pizza delivers a smooth user experience from menu browsing to order tracking, with real-time cart management and location-based address fetching.

## ✨ Features

- **User Onboarding**: Enter name on first visit, persisted in Redux state
- **Menu Browsing**: Responsive grid with lazy-loaded images, sold-out indicators
- **Smart Cart**: Add/remove items, adjust quantities, real-time summary with animations
- **Checkout Flow**: Complete order form with phone validation, priority option with dynamic fee calculation
- **Location Services**: One-click address fetch via browser Geolocation API + reverse geocoding
- **Order Tracking**: View order details, estimated delivery time, and upgrade to priority post-order
- **Order Search**: Search any order by ID from the header
- **State Management**: Redux Toolkit slices for cart and user with async thunks
- **Data Loading**: React Router loaders for server-like data fetching

## 🛠 Tech Stack

- **Frontend**: React 18, React Router DOM 6
- **State**: Redux Toolkit, React Redux
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Build**: Vite
- **Fonts**: Fraunces (display), Manrope (body), Piazzolla (ingredients)
- **API**: REST API integration for menu, orders, and geocoding

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── features/
│   ├── cart/          # Cart slice, overview, items
│   ├── menu/          # Menu display and items
│   ├── order/         # Create order, view order, search
│   └── user/          # User name and geolocation
├── ui/                # Shared components (Header, Layout, Loader)
├── services/          # API calls
├── store.js           # Redux store configuration
└── App.jsx            # Router configuration
```

## 🎨 Design System

Custom Tailwind theme with warm palette:
- Cream & Mustard gradients for backgrounds
- Basil green (`#4A7C59`) for primary actions
- Red accents for priority/order CTAs
- Custom animations: float, bump, slide-up/down

## 🔄 User Flow

1. Enter name → Menu loads
2. Add items to cart → Cart overview appears
3. Navigate to cart → Modify quantities/delete
4. Confirm → Create order form with priority option
5. Submit → Order details view with tracking
6. Search orders via header input

## 📝 Key Implementation Details

- React Router v6 loaders for data fetching
- Redux Toolkit async thunk for geolocation
- Form actions with validation and redirects
- useFetcher for non-navigational updates
- Optimistic UI with animations

## 📄 License

MIT

