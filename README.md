# Ecommerce React

A React-based demo ecommerce application located in [`demo-app`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app), built with:

- `react` + `react-router-dom`
- `redux` + `redux-thunk`
- `formik` + `yup`
- `axios`
- `react-toastify`

## Project Structure

- [`demo-app/src/pages`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app/src/pages): Route-level pages
- [`demo-app/src/components`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app/src/components): Reusable UI blocks
- [`demo-app/src/redux`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app/src/redux): Redux store/actions/reducers
- [`demo-app/src/services`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app/src/services): API service helpers
- [`demo-app/src/utils`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app/src/utils): Local storage/cart helpers
- [`demo-app/src/config`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app/src/config): App-level constants

## Setup

1. Install dependencies:
```bash
cd demo-app
npm install
```

2. (Optional) Configure API base URL:
```bash
cp .env.example .env
```

3. Start dev server:
```bash
npm start
```

## Scripts

Run these inside [`demo-app`](/Users/rjoshi/Desktop/my projects/ecommerce-react/demo-app):

- `npm start`: Start development server
- `npm run build`: Create production build
- `npm test -- --watchAll=false`: Run tests once
- `npm run lint`: Run ESLint

## Improvements Applied

- Fixed repeated/infinite fetch loop in product cards.
- Centralized API requests with a shared `productService`.
- Added resilient cart storage helpers to avoid crashes from invalid/empty `localStorage`.
- Fixed Redux reducer mutation bug in cart state updates.
- Added loading and error states for product data and product details.
- Fixed missing React keys and invalid JSX (`dic` -> `div`).
- Removed duplicated header rendering on gallery route.
- Resolved accessibility warnings from invalid placeholder links.
- Removed unnecessary dependencies from `package.json`.
- Added repo-level `.gitignore` and environment template (`.env.example`).

## Notes

- This project is currently based on Create React App (`react-scripts`), which is in maintenance mode.
- `npm audit` reports transitive vulnerabilities from CRA-era packages. Addressing all of them usually requires a migration (for example to Vite) rather than small patch updates.
