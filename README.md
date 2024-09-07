# Slack Clone

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)  
- [Scripts](#scripts)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Project Structure

```plaintext
.eslintrc.json  
.gitignore  
.next/  
package.json  
components.json  
next-env.d.ts  
next.config.mjs  
postcss.config.mjs  
README.md  
src/  
  app/  
    components/  
    features/  
    lib/  
tailwind.config.ts  
tsconfig.json


.eslintrc.json: ESLint configuration file.  
.gitignore: Specifies files to be ignored by Git.  
.next/: Build output directory.  
package.json: Project metadata and dependencies.  
components.json: Configuration for UI components.  
next-env.d.ts: TypeScript environment definitions for Next.js.  
next.config.mjs: Next.js configuration file.  
postcss.config.mjs: PostCSS configuration file.  
README.md: Project documentation.  
src/: Source code directory.  
app/: Application-specific code.  
components/: Reusable UI components.  
features/: Feature-specific code.  
lib/: Utility functions and libraries.  
tailwind.config.ts: Tailwind CSS configuration file.  
tsconfig.json: TypeScript configuration file. 
```

You can start editing the page by modifying src/app/page.tsx. The page auto-updates as you edit the file.

## Scripts
```
dev: Runs the development server.
build: Builds the application for production.
start: Starts the production server.
lint: Runs ESLint to check for linting errors.
```