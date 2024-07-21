# Planning Poker App - Frontend

This is the frontend application for the Planning Poker App, built with Angular 16.

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- Angular CLI (v16)

## Setup

1. Install dependencies: 
```
npm install
```

3. Set up environment variables:
- Copy `src/environments/environment.example.ts` to `src/environments/environment.ts`
- Update the Firebase configuration in `environment.ts` with your own Firebase project details

## Running the Application
To start the development server: 
```
npx nx run frontend:serve
 ```

Navigate to `http://localhost:4200/` in your browser.

## Building for Production
To build the application for production:
```
npx nx run frontend:build --configuration=production 
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests
To execute unit tests via Jest:
```
nx run frontend:test
```