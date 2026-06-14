# hairdo-customer-app

## Overview

This is a salon customer app built with Expo + React Native + TypeScript. It uses a clean architecture pattern:

- `src/components/` — reusable UI components only
- `src/features/` — feature screens and domain-specific flows
- `src/services/` — API calls, data fetching, and service logic
- `src/hooks/` — shared reusable hooks for data and behavior
- `src/theme/` — app theming and colors
- `src/navigation/` — navigation stacks and tab routing

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app

```bash
npm start
```

Then choose Expo Go, Android, iOS, or web from the Expo developer tools.

### 3. Run on a device/emulator

```bash
npm run android
npm run ios
npm run web
```

## Project Structure

### App entry

- `App.tsx` — app entrypoint
- `src/app/App.tsx` — provider setup and root navigation container

### Navigation

- `src/navigation/tabs/BottomTabs.tsx` — bottom tab navigator
- `src/navigation/stacks/AppStack.tsx` — stack navigation for app flows

### Screens

- `src/features/home/screens/HomeScreen.tsx`
- `src/features/service/screens/ServicesScreen.tsx`

### Data and services

- `src/services/api/client/axios.ts` — Axios client configuration
- `src/services/api/endpoints/` — endpoint functions for API access
- `src/hooks/` — reusable React Query hooks

## Architecture Notes

This app is organized so UI components are reusable and isolated from service logic.

- Keep raw visual components in `src/components/`
- Keep screen logic and flow wiring in `src/features/`
- Keep API/data logic in `src/services/`
- Keep reusable behavior hooks in `src/hooks/`

## Start here

1. Open the workspace in VS Code.
2. Install packages with `npm install`.
3. Start Expo with `npm start`.
4. Edit `src/features/home/screens/HomeScreen.tsx` and `src/features/service/screens/ServicesScreen.tsx` for app flow changes.
5. Add shared UI pieces to `src/components/`.

## Notes

- Uses TypeScript path aliases configured in `tsconfig.json`.
- Uses `@tanstack/react-query` for client-side data loading.
- Use themed colors from `src/theme/ThemeProvider.tsx`.
- Avoid duplicate screen files; keep feature screens as the app runtime source of truth.
