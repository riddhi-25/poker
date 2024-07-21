# Planning Poker App - Backend

This is the backend application for the Planning Poker App, built with NestJS.

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- NestJS CLI

## Setup
1. Install dependencies:
```
npm install
```

2. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the variables in `.env` with your own configuration details

## Running the Application
To start the development server:
```
npx nx run backend:serve

```
The server will be available at `http://localhost:3000/`.

## Building for Production
To build the application for production:
```
npx nx run backend:build --configuration=production 

```

## Key Modules
- `JiraModule`: Integrates with JIRA API for story import/export
- `AuthModule`: Handles user authentication and authorization

## API Documentation
API documentation is available at `http://localhost:3000/api` when the server is running. This documentation is generated using Swagger.

## Additional Information
For more information on using NestJS, check out the [NestJS documentation](https://docs.nestjs.com/).