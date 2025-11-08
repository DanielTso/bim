# Changelog

All notable changes to the Blue Collar Trades Resource Platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned for Week 3-4
- Homepage with hero section
- Trade categories overview grid
- Featured resources section
- Trade list and detail pages
- Search and filter functionality
- Career path explorer pages

## [0.2.0] - 2025-11-08

### Added - Week 1-2: UI Foundation & Design System Complete

#### Design System
- Comprehensive color palette with CSS variables
  - Primary (blue), Secondary (orange), Success (green), Warning (yellow), Error (red)
  - Gray scale with 10 shades
  - Semantic color naming
- Typography system
  - Font size scale (xs to 5xl)
  - Font weight utilities
  - Line height tokens
  - System font stack
- Spacing scale (4px to 64px)
- Border radius tokens (sm to full)
- Shadow utilities (sm to xl)
- Accessibility features
  - Focus-visible outline styles
  - Screen reader-only utility class
  - Smooth scrolling with motion preferences

#### UI Components (11 Components)
- **Button Component**
  - 4 variants: primary, secondary, tertiary, danger
  - 3 sizes: sm, md, lg
  - Loading state with spinner
  - Left/right icon support
  - Full width option
  - Disabled state

- **Form Components**
  - Input: Labels, errors, helper text, left/right icons, size variants
  - Textarea: Resizable, labels, errors, helper text
  - Select: Custom styled dropdown with options array
  - Checkbox: Labels, helper text, error states

- **Layout Components**
  - Card: With Header, Title, Description, Content, Footer sub-components
  - Container: Responsive width constraints (sm, md, lg, xl, full)
  - Section: Padding and background variants

- **Feedback Components**
  - Modal: Accessible dialog with keyboard support (ESC to close)
  - Toast: Notification system with 4 types and action support
  - ToastProvider: Context-based toast management
  - Skeleton: Loading placeholders (text, card variants)
  - Spinner: 4 sizes, 4 color variants

#### Navigation & Layout
- **Header Component**
  - Sticky positioning
  - Responsive mobile menu (hamburger)
  - Desktop and mobile navigation
  - Logo and branding (TradeCareers)
  - Auth buttons (Sign In, Get Started)
  - Active route highlighting
  - Black text color with semibold font weight for maximum visibility

- **Footer Component**
  - Multi-column layout (4 columns on desktop, 2 on mobile)
  - Navigation sections: Trades, Training, Resources, Company
  - Social media links (Twitter, LinkedIn, Facebook)
  - Copyright notice with dynamic year
  - Responsive grid layout

- **Root Layout**
  - Integrated Header and Footer
  - ToastProvider for global notifications
  - Improved SEO metadata
  - Flex layout for sticky footer
  - Min-height viewport

#### Developer Experience
- Component showcase page at `/components`
  - Interactive demos of all components
  - Live state management examples
  - Copy-paste ready code snippets
- Utility function `cn()` for className merging
- TypeScript types for all component props
- Component index exports for easy imports
- Build verification passing

### Changed
- Updated root layout metadata for SEO
- Improved navigation text visibility (black with semibold weight)
- Font weight changed from medium to semibold for better readability

### Technical Details
- **Dependencies Added**: clsx, tailwind-merge
- **Files Created**: 24 component and utility files
- **Lines of Code**: ~2,500 lines
- **Build Status**: ✅ Passing
- **TypeScript**: ✅ No errors

## [0.1.0] - 2025-11-08

### Added - Initial Project Setup

#### Project Foundation
- Next.js 16 with App Router
- TypeScript configuration
- Tailwind CSS 4 with custom theme
- ESLint configuration
- Prisma ORM setup

#### Database Schema
- User authentication models (User, Account, Session, VerificationToken)
- Trade models (TradeCategory, Trade, CareerPath)
- Training models (TrainingProvider, TrainingProgram)
- Content models (Resource)
- Community models (Post, Comment)
- User progress models (UserProgress, Bookmark)
- SQLite for development
- Initial migration created

#### Authentication
- NextAuth.js v5 (beta) configured
- Google OAuth provider setup
- Credentials provider placeholder
- Prisma adapter integration
- Session management with JWT

#### Documentation
- CLAUDE.md: Technical documentation for AI-assisted development
- PROJECT_BRIEF.md: Project vision, goals, and business strategy
- PRD.md: Comprehensive product requirements with 23 user stories
- IMPLEMENTATION_PLAN.md: 4-phase roadmap with detailed tasks
- README.md: Next.js default documentation

#### Infrastructure
- Git repository initialized
- GitHub repository created and linked
- SSH authentication configured
- .gitignore properly configured
- .env.example created for environment variables

### Technical Details
- **Framework**: Next.js 16 (Turbopack)
- **Database**: SQLite (development), PostgreSQL (production planned)
- **ORM**: Prisma 6.19.0
- **Authentication**: NextAuth.js v5.0.0-beta.30
- **Styling**: Tailwind CSS 4
- **Package Manager**: npm

---

## Version History Summary

| Version | Date | Description |
|---------|------|-------------|
| 0.2.0 | 2025-11-08 | Week 1-2: Complete UI foundation and design system |
| 0.1.0 | 2025-11-08 | Initial project setup and documentation |

---

## Development Phases

### ✅ Phase 0: Foundation (Complete)
- Project initialization
- Database schema
- Authentication setup
- Documentation

### ✅ Phase 1 (Weeks 1-2): UI Foundation (Complete)
- Design system
- Component library
- Navigation and layout

### 🚧 Phase 1 (Weeks 3-4): Homepage & Trade Exploration (Next)
- Homepage design
- Trade browsing
- Search and filters

### 📋 Phase 1 (Weeks 5-8): Core Features (Planned)
- Career path explorer
- Training program discovery
- User dashboard

### 📋 Phase 2 (Weeks 9-14): Community & Content (Planned)
- Resource library
- Community forum
- Email system

### 📋 Phase 3 (Weeks 15-22): Growth & Optimization (Planned)
- Performance optimization
- Provider onboarding
- Marketing features

### 📋 Phase 4 (Weeks 23-34): Scale & Monetization (Planned)
- Advanced features
- Job board
- Payment integration

---

## Notes

- All commits are co-authored with Claude Code
- Each feature includes tests before merging
- Build verification required before commits
- Accessibility is a priority in all components
- Mobile-first responsive design approach

---

## Links

- **Repository**: https://github.com/DanielTso/bim
- **Documentation**: See CLAUDE.md for technical details
- **Product Roadmap**: See IMPLEMENTATION_PLAN.md
- **Requirements**: See PRD.md

---

_This changelog is maintained manually and updated with each significant change to the project._
