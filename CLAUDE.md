# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a resource website for people interested in entering blue collar trades. The platform helps users explore different trades, find training programs, access educational resources, and connect with a community of trade workers.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js v5 (beta)
- **Package Manager**: npm

## Development Commands

### Core Commands
```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Database Commands
```bash
# Generate Prisma Client after schema changes
npx prisma generate

# Create a new migration
npx prisma migrate dev --name <migration_name>

# Apply migrations in production
npx prisma migrate deploy

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# View current database
# SQLite database file: prisma/dev.db
# Migrations folder: prisma/migrations/
```

## Database Architecture

The database schema is located in `prisma/schema.prisma` and consists of several key domains:

### User & Authentication Models
- `User` - User accounts with profile information
- `Account` - OAuth provider accounts (for NextAuth.js)
- `Session` - User sessions
- `VerificationToken` - Email verification tokens

### Trade & Career Models
- `TradeCategory` - Top-level categories (e.g., Construction, Electrical, Plumbing)
- `Trade` - Specific trades with descriptions, salary info, and requirements
- `CareerPath` - Step-by-step career progression paths for each trade

### Training & Education Models
- `TrainingProvider` - Schools, unions, companies offering training
- `TrainingProgram` - Specific programs (apprenticeships, certifications, courses)

### Content Models
- `Resource` - Articles, videos, guides, and tools
- `Post` - Community forum posts
- `Comment` - Nested comments on posts

### User Progress Models
- `UserProgress` - Track user progress through career paths
- `Bookmark` - User-saved resources

### Important Schema Notes
- JSON fields are stored as strings and need parsing (e.g., `skills`, `requirements`, `tags`)
- The Prisma Client is generated to `src/generated/prisma/client.ts` (not the default location)
- Import PrismaClient from `@/generated/prisma/client` (not just `@/generated/prisma`)
- SQLite is used for development; consider PostgreSQL for production

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/
│   │   └── auth/[...nextauth]/  # NextAuth.js API routes
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components (to be created)
├── generated/
│   └── prisma/           # Generated Prisma Client (auto-generated)
├── lib/
│   ├── auth.ts           # NextAuth.js configuration
│   └── prisma.ts         # Prisma Client singleton instance
├── types/                # TypeScript type definitions (to be created)
└── utils/                # Utility functions (to be created)
```

## Key Patterns

### Database Access
Always import the Prisma Client from `@/lib/prisma`:
```typescript
import { prisma } from '@/lib/prisma';

// Example query
const trades = await prisma.trade.findMany({
  include: { category: true }
});
```

### Authentication
NextAuth.js v5 is configured in `src/lib/auth.ts`. To get session or protect routes:
```typescript
import { auth } from '@/lib/auth';

// Get current session
const session = await auth();

// In Server Components or API routes
if (!session) {
  // Handle unauthenticated user
}

// For sign in/out
import { signIn, signOut } from '@/lib/auth';
await signIn('google'); // or other provider
await signOut();
```

### JSON Fields
Several fields store JSON as strings. Always parse/stringify:
```typescript
// When reading from database
const skills = JSON.parse(trade.skills);

// When writing to database
await prisma.trade.create({
  data: {
    skills: JSON.stringify(['Electrical wiring', 'Blueprint reading'])
  }
});
```

## Environment Variables

Required variables in `.env`:
- `DATABASE_URL` - Database connection string (default: `file:./dev.db`)
- `NEXTAUTH_URL` - Base URL for NextAuth.js (default: `http://localhost:3000`)
- `NEXTAUTH_SECRET` - Secret key for NextAuth.js (must be changed in production)

Optional OAuth provider variables:
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret

## Important Notes

1. **Prisma Client Location**: The Prisma Client is generated to `src/generated/prisma/client.ts`, not the default location. Always import PrismaClient from `@/generated/prisma/client` (not `@/generated/prisma`). However, use the singleton instance from `@/lib/prisma` for database queries.

2. **NextAuth.js v5**: This project uses NextAuth.js v5 beta, which has a different API than v4. Use `auth()` instead of `getServerSession()`, and import `{ auth, signIn, signOut }` from `@/lib/auth`.

3. **Database Initialization**: When setting up a new environment, run `npx prisma migrate dev` to create the database and apply migrations.

4. **Development Workflow**: After modifying the Prisma schema, always run `npx prisma generate` to update the Prisma Client types.

5. **Credentials Provider**: The credentials provider in `src/lib/auth.ts` is a placeholder. Implement proper password hashing (bcrypt/argon2) before using it in production.

6. **Build Verification**: The project builds successfully with `npm run build`. Always test builds locally before deploying.

## Features to Implement

The main features planned for this platform:
1. **Career Path Explorer** - Interactive tool to explore trades and career progression
2. **Training Finder** - Search and filter training programs by location, type, and trade
3. **Resource Library** - Searchable collection of articles, videos, and guides
4. **Community Features** - Forums, Q&A, user profiles, and discussions

## Architecture Decisions

- **SQLite for Development**: Easy setup, no external database needed. Migrate to PostgreSQL for production deployment.
- **App Router**: Using Next.js 14+ App Router for better performance and developer experience.
- **Server Components by Default**: Leverage React Server Components for better performance; use 'use client' only when needed.
- **Prisma ORM**: Type-safe database access with great TypeScript support.
