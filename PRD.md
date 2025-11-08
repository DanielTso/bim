# Product Requirements Document (PRD)
## Blue Collar Trades Resource Platform

**Version**: 1.0
**Last Updated**: November 2025
**Owner**: Product Team
**Status**: Development Phase

---

## Table of Contents
1. [Overview](#overview)
2. [User Personas](#user-personas)
3. [User Stories](#user-stories)
4. [Feature Requirements](#feature-requirements)
5. [Technical Requirements](#technical-requirements)
6. [Data Models](#data-models)
7. [API Specifications](#api-specifications)
8. [UI/UX Requirements](#uiux-requirements)
9. [Non-Functional Requirements](#non-functional-requirements)
10. [Success Criteria](#success-criteria)

---

## 1. Overview

### 1.1 Product Vision
A comprehensive, user-friendly platform that empowers individuals to discover, learn about, and pursue careers in blue collar trades through interactive tools, educational resources, and community support.

### 1.2 Goals
- Reduce barriers to entry for trade careers
- Provide accurate, up-to-date trade career information
- Connect learners with quality training programs
- Build a supportive community of trade professionals
- Track user progress from exploration to employment

### 1.3 Scope
**In Scope:**
- Career exploration tools
- Training program directory
- Educational resource library
- Community discussion platform
- User authentication and profiles
- Progress tracking

**Out of Scope (Future Phases):**
- Job board and recruitment
- Direct messaging between users
- Payment processing for premium features
- Mobile applications
- Live video instruction

---

## 2. User Personas

### 2.1 Primary Persona: "Career Changer Chris"
- **Age**: 32
- **Background**: College-educated, 8 years in office work
- **Motivation**: Seeking hands-on work with tangible results
- **Pain Points**:
  - Doesn't know where to start
  - Concerned about income during training
  - Unsure which trade fits their skills
- **Goals**:
  - Explore multiple trades
  - Understand time/cost commitment
  - Connect with people who made similar transitions

### 2.2 Secondary Persona: "Graduate Gary"
- **Age**: 19
- **Background**: Recent high school graduate
- **Motivation**: Wants stable career without college debt
- **Pain Points**:
  - Parents push for traditional college
  - Doesn't understand trade earning potential
  - Needs local training options
- **Goals**:
  - Find apprenticeship programs
  - Learn about different trades
  - See career progression possibilities

### 2.3 Tertiary Persona: "Training Provider Tina"
- **Age**: 45
- **Background**: Director at trade school
- **Motivation**: Recruit qualified, motivated students
- **Pain Points**:
  - Difficult to reach target audience
  - High dropout rates from uninterested students
  - Limited marketing budget
- **Goals**:
  - Increase visibility of programs
  - Receive qualified applications
  - Showcase program success rates

---

## 3. User Stories

### 3.1 Career Exploration

**US-001**: As a career seeker, I want to browse all available trade categories so that I can see the breadth of opportunities.
- **Acceptance Criteria**:
  - Display all trade categories with icons
  - Show trade count per category
  - Categories are clickable and navigate to trade list

**US-002**: As a career seeker, I want to view detailed information about a specific trade so that I can understand if it's right for me.
- **Acceptance Criteria**:
  - Display trade description, requirements, skills needed
  - Show average salary and job outlook data
  - Include realistic day-in-the-life information
  - Display related training programs
  - Show career path progression

**US-003**: As a career seeker, I want to filter trades by characteristics (salary, physical demand, education required) so that I can find trades that match my situation.
- **Acceptance Criteria**:
  - Multiple filter options available
  - Filters update results in real-time
  - Clear indication of active filters
  - Reset filters option

**US-004**: As a career seeker, I want to bookmark trades I'm interested in so that I can easily return to them.
- **Acceptance Criteria**:
  - Bookmark icon on trade pages
  - View all bookmarked trades in profile
  - Remove bookmarks easily
  - Requires user authentication

### 3.2 Career Path Explorer

**US-005**: As a career seeker, I want to see a step-by-step path to becoming a professional in a trade so that I know what to do next.
- **Acceptance Criteria**:
  - Display sequential steps clearly
  - Show estimated duration for each step
  - Include prerequisites and requirements
  - Link to relevant training programs
  - Visual progress indicator

**US-006**: As a logged-in user, I want to track my progress through a career path so that I can see how far I've come.
- **Acceptance Criteria**:
  - Mark steps as completed
  - Save progress to user profile
  - Display completion percentage
  - Add personal notes to each step
  - View all career paths in progress

### 3.3 Training Program Discovery

**US-007**: As a career seeker, I want to search for training programs by location so that I can find options near me.
- **Acceptance Criteria**:
  - Search by city, state, or ZIP code
  - Display distance from user location
  - Show programs on a map view
  - Filter by in-person/online/hybrid

**US-008**: As a career seeker, I want to compare training programs so that I can make an informed decision.
- **Acceptance Criteria**:
  - Compare up to 3 programs side-by-side
  - Show key differences (cost, duration, format)
  - Include ratings and reviews
  - Link to application pages

**US-009**: As a career seeker, I want to filter training programs by cost, duration, and type so that I can find programs that fit my constraints.
- **Acceptance Criteria**:
  - Multiple filter options
  - Range sliders for cost and duration
  - Checkbox filters for type
  - Display count of matching programs

**US-010**: As a training provider, I want to create a profile for my organization so that potential students can find us.
- **Acceptance Criteria**:
  - Registration form for providers
  - Upload logo and images
  - Add multiple programs
  - Verification process for credibility

**US-011**: As a training provider, I want to add detailed program information so that students have all the information they need.
- **Acceptance Criteria**:
  - Program title, description, requirements
  - Cost, duration, and schedule information
  - Application deadlines and process
  - Contact information
  - Edit and update capability

### 3.4 Resource Library

**US-012**: As a career seeker, I want to access educational articles about trades so that I can learn more before committing.
- **Acceptance Criteria**:
  - Browse articles by category and trade
  - Search functionality
  - Reading time estimates
  - Related articles suggested
  - Bookmark articles

**US-013**: As a career seeker, I want to watch video content about different trades so that I can see what the work actually looks like.
- **Acceptance Criteria**:
  - Video player embedded in site
  - Video thumbnail previews
  - Duration displayed
  - Filter by trade and topic
  - Share videos

**US-014**: As a career seeker, I want to download career planning tools and guides so that I can work through my decisions offline.
- **Acceptance Criteria**:
  - Downloadable PDF guides
  - Checklists and worksheets
  - Resume and interview templates
  - Track download in user history

**US-015**: As a user, I want to see featured/trending resources on the homepage so that I don't miss important content.
- **Acceptance Criteria**:
  - Curated featured content section
  - Most viewed resources widget
  - Recently added content
  - Personalized recommendations (if logged in)

### 3.5 Community Features

**US-016**: As a registered user, I want to create discussion posts so that I can ask questions and share experiences.
- **Acceptance Criteria**:
  - Create post with title and content (markdown support)
  - Associate with specific trade (optional)
  - Add tags for categorization
  - Edit and delete own posts
  - View draft before publishing

**US-017**: As a registered user, I want to comment on posts so that I can participate in discussions.
- **Acceptance Criteria**:
  - Comment on any post
  - Reply to other comments (nested)
  - Edit and delete own comments
  - Markdown formatting support
  - Notification of replies (future)

**US-018**: As a user, I want to view community posts by trade so that I can find relevant discussions.
- **Acceptance Criteria**:
  - Filter posts by trade
  - Sort by recent, popular, unanswered
  - Search within posts
  - Display post count per trade

**US-019**: As a user, I want to view profiles of community members so that I can learn about their experience.
- **Acceptance Criteria**:
  - Display user bio and location
  - Show trades they work in or are learning
  - List their posts and comments
  - Display join date and activity level

### 3.6 User Authentication & Profile

**US-020**: As a new user, I want to create an account so that I can access personalized features.
- **Acceptance Criteria**:
  - Email/password registration
  - Google OAuth option
  - Email verification
  - Password strength requirements
  - Accept terms of service

**US-021**: As a registered user, I want to log in securely so that I can access my account.
- **Acceptance Criteria**:
  - Email/password login
  - Google OAuth login
  - Remember me option
  - Password reset functionality
  - Session management

**US-022**: As a registered user, I want to create and edit my profile so that others can learn about me.
- **Acceptance Criteria**:
  - Add bio and location
  - Select trades of interest/expertise
  - Upload profile picture
  - Privacy settings for profile visibility
  - View own profile as others see it

**US-023**: As a registered user, I want to see a dashboard of my activity so that I can track my journey.
- **Acceptance Criteria**:
  - Bookmarked trades and resources
  - Career paths in progress
  - Community posts and comments
  - Saved training programs
  - Quick action buttons

---

## 4. Feature Requirements

### 4.1 Homepage

#### 4.1.1 Hero Section
- **Purpose**: Immediately communicate value proposition
- **Requirements**:
  - Compelling headline: "Start Your Blue Collar Career Journey"
  - Subheadline explaining platform purpose
  - Primary CTA: "Explore Trades"
  - Secondary CTA: "Find Training"
  - Hero image/video showing trade workers

#### 4.1.2 Trade Categories Overview
- **Purpose**: Allow quick navigation to trade exploration
- **Requirements**:
  - Display 6-8 main categories with icons
  - Show trade count per category
  - Hover effects for engagement
  - Link to category pages

#### 4.1.3 Featured Resources
- **Purpose**: Surface valuable content
- **Requirements**:
  - 3-4 featured articles/videos
  - Thumbnail images
  - Brief descriptions
  - Reading/viewing time
  - "View All Resources" link

#### 4.1.4 How It Works Section
- **Purpose**: Explain platform usage
- **Requirements**:
  - 3-step process visualization
  - Icons for each step
  - Clear, concise descriptions
  - Link to getting started guide

#### 4.1.5 Testimonials/Success Stories
- **Purpose**: Build trust and inspire users
- **Requirements**:
  - 2-3 user testimonials
  - Photos and names
  - Their trade and location
  - Brief success story
  - Rotating carousel

#### 4.1.6 Call to Action Section
- **Purpose**: Drive account creation
- **Requirements**:
  - Compelling reason to sign up
  - Sign-up form or button
  - Benefits of creating account
  - No credit card required message

### 4.2 Trade Exploration

#### 4.2.1 Trade Categories Page
- **Purpose**: Browse all trades by category
- **Requirements**:
  - List all categories
  - Expandable to show trades within
  - Trade count per category
  - Sort options (alphabetical, popularity)
  - Search across all trades

#### 4.2.2 Trade List Page
- **Purpose**: View trades within a category
- **Requirements**:
  - Grid or list view toggle
  - Trade cards with image, name, brief description
  - Key stats (salary, outlook) on cards
  - Bookmark icon (if logged in)
  - Filters sidebar
  - Pagination or infinite scroll

#### 4.2.3 Trade Detail Page
- **Purpose**: Comprehensive information about a specific trade
- **Requirements**:
  - **Header**: Trade name, hero image, bookmark button
  - **Overview Section**:
    - Full description
    - What you'll do day-to-day
    - Work environment
  - **Stats Section**:
    - Average salary (entry, mid, senior)
    - Job outlook/growth rate
    - Typical work hours
    - Physical demands rating
  - **Requirements Section**:
    - Educational requirements
    - Certifications needed
    - Skills required
    - Personality traits that fit well
  - **Career Path Section**:
    - Visual progression diagram
    - Entry level → Journeyman → Master/Specialist
    - Time estimates for each stage
    - Link to detailed career path
  - **Training Programs Section**:
    - List of relevant programs (3-5)
    - "View All Programs" link
  - **Resources Section**:
    - Related articles, videos, guides
  - **Related Trades Section**:
    - Similar or complementary trades
  - **Community Discussions**:
    - Recent posts about this trade
    - "Ask a Question" button

#### 4.2.4 Filters and Search
- **Requirements**:
  - **Search**: Autocomplete, search by name and keywords
  - **Filters**:
    - Salary range (slider)
    - Education required (dropdown)
    - Physical demand level (checkbox)
    - Job outlook (checkbox)
    - Work environment (indoor/outdoor/both)
  - Clear filters button
  - Active filter tags
  - Result count display

### 4.3 Career Path Explorer

#### 4.3.1 Career Path Page
- **Purpose**: Show step-by-step path to becoming a professional
- **Requirements**:
  - **Header**: Trade name, overview
  - **Path Visualization**:
    - Timeline or step-by-step layout
    - Each step clearly numbered
    - Visual connectors between steps
  - **Step Details**:
    - Step title and description
    - Duration estimate
    - Requirements/prerequisites
    - What you'll learn
    - Typical costs (if applicable)
    - Resources for this step
    - Mark as complete button (if logged in)
  - **Progress Tracking** (logged in users):
    - Overall completion percentage
    - Current step highlighted
    - Completed steps checked off
    - Notes section for each step
  - **Related Information**:
    - Total journey timeline
    - Estimated total costs
    - Success tips
    - Common challenges
  - **Call to Action**:
    - "Start This Path" button
    - "Find Training Programs" link
    - Share path option

### 4.4 Training Program Discovery

#### 4.4.1 Training Program Search Page
- **Purpose**: Find and filter training programs
- **Requirements**:
  - **Search Bar**:
    - Search by program name, provider, location
    - Autocomplete suggestions
    - Search button
  - **Filters Sidebar**:
    - Trade/category dropdown
    - Location (city, state, distance)
    - Program type (apprenticeship, certification, course, bootcamp)
    - Format (in-person, online, hybrid)
    - Duration (range slider)
    - Cost (range slider or brackets)
    - Start date availability
    - Verified providers only (checkbox)
  - **Results Area**:
    - Program cards in grid layout
    - Each card shows:
      - Provider logo
      - Program title
      - Provider name
      - Location
      - Format badge
      - Duration
      - Cost (if available)
      - Key features (2-3 bullets)
      - "View Details" button
      - Compare checkbox
    - Sort options (relevance, cost, duration, rating)
    - Pagination
  - **Map View Toggle**:
    - Switch between list and map
    - Pins for program locations
    - Click pin to see program info
  - **Compare Feature**:
    - Select up to 3 programs
    - Floating compare button
    - Opens comparison modal/page

#### 4.4.2 Training Program Detail Page
- **Purpose**: Comprehensive information about a program
- **Requirements**:
  - **Header**:
    - Program title
    - Provider name (linked)
    - Provider logo
    - Verified badge (if applicable)
    - Share and bookmark buttons
  - **Overview**:
    - Full description
    - What you'll learn
    - Who should apply
  - **Key Details**:
    - Program type and format
    - Duration and schedule
    - Location or online platform
    - Cost and payment options
    - Financial aid availability
    - Start dates
  - **Requirements**:
    - Prerequisites
    - Age requirements
    - Educational background
    - Physical requirements (if any)
  - **Curriculum** (if available):
    - Course outline
    - Skills taught
    - Hands-on experience details
  - **Outcomes**:
    - Certification/credential earned
    - Job placement rate
    - Graduate testimonials
  - **Provider Information**:
    - About the provider
    - Contact information
    - Website link
    - Address and map
    - Other programs offered
  - **Application**:
    - Application deadline
    - How to apply
    - Application requirements
    - "Apply Now" button (external link)
  - **Reviews** (future feature):
    - Student ratings
    - Written reviews
    - Review submission form

#### 4.4.3 Program Comparison Page
- **Purpose**: Side-by-side comparison of selected programs
- **Requirements**:
  - Display 2-3 programs in columns
  - Comparison rows:
    - Program name and provider
    - Type and format
    - Duration
    - Cost
    - Location
    - Requirements
    - Outcomes/certification
    - Start dates
  - Highlight differences
  - Remove from comparison option
  - "View Details" links
  - Print comparison option

#### 4.4.4 Training Provider Profile Page
- **Purpose**: Information about training organizations
- **Requirements**:
  - **Header**:
    - Provider name and logo
    - Verified badge
    - Location(s)
    - Contact information
  - **About**:
    - Organization description
    - History and mission
    - Accreditations
    - Industry partnerships
  - **Programs Offered**:
    - List of all programs
    - Filter by trade
  - **Reviews and Ratings** (future)
  - **Contact Form**:
    - General inquiry form
    - Quick questions

### 4.5 Resource Library

#### 4.5.1 Resource Library Page
- **Purpose**: Browse educational content
- **Requirements**:
  - **Filters Sidebar**:
    - Content type (article, video, guide, tool)
    - Trade/category
    - Topics/tags
    - Featured content only
  - **Search Bar**:
    - Search content titles and descriptions
  - **Sort Options**:
    - Most recent
    - Most viewed
    - Alphabetical
  - **Resource Grid**:
    - Thumbnail image
    - Content type badge
    - Title
    - Brief description
    - Reading time or video length
    - View count
    - Trade tag
    - Bookmark button (if logged in)
  - **Pagination**

#### 4.5.2 Resource Detail Page (Article)
- **Purpose**: Display article content
- **Requirements**:
  - Title and author
  - Published/updated date
  - Reading time estimate
  - Featured image
  - Article content (markdown rendered)
  - Images and embedded media
  - Table of contents (for long articles)
  - Bookmark and share buttons
  - Related resources
  - Author bio (if applicable)
  - Comments section (future)

#### 4.5.3 Resource Detail Page (Video)
- **Purpose**: Display video content
- **Requirements**:
  - Video player (YouTube/Vimeo embed or native)
  - Title and description
  - Video duration
  - View count
  - Published date
  - Transcript (if available)
  - Related videos
  - Bookmark and share buttons
  - Comments section (future)

#### 4.5.4 Downloadable Resources
- **Purpose**: Provide tools and templates
- **Requirements**:
  - List of downloadable PDFs, templates
  - Preview thumbnails
  - File size and type
  - Download button
  - Download counter
  - Require email for download (optional)

### 4.6 Community Platform

#### 4.6.1 Community Forum Homepage
- **Purpose**: Hub for community discussions
- **Requirements**:
  - **Welcome Section**:
    - Community guidelines link
    - "Create Post" button (prominent)
  - **Filter Tabs**:
    - All posts
    - Following (if logged in)
    - My posts (if logged in)
  - **Trade Category Filters**:
    - Filter by trade
    - All trades option
  - **Post List**:
    - Post title
    - Author name and avatar
    - Trade tag
    - Excerpt of content
    - Comment count
    - View count
    - Time posted
    - Vote count (future)
  - **Sort Options**:
    - Most recent
    - Most popular
    - Unanswered questions
  - **Search Posts**:
    - Search titles and content
  - **Sidebar**:
    - Top contributors
    - Recent activity
    - Featured discussions

#### 4.6.2 Create Post Page
- **Purpose**: Allow users to create discussion posts
- **Requirements**:
  - Title field (required)
  - Content editor (markdown support)
  - Trade association dropdown (optional)
  - Tags input
  - Preview button
  - Save as draft option
  - Publish button
  - Cancel button
  - Character counts
  - Formatting toolbar

#### 4.6.3 Post Detail Page
- **Purpose**: Display full post and comments
- **Requirements**:
  - **Post Header**:
    - Title
    - Author name, avatar, link to profile
    - Trade tag
    - Post date
    - View count
    - Edit/delete buttons (if author)
    - Share and bookmark buttons
  - **Post Content**:
    - Full content rendered (markdown)
    - Images and media
  - **Comments Section**:
    - Comment count
    - Sort comments (newest, oldest, top)
    - Comment form (if logged in)
    - Nested comment threads
    - Each comment shows:
      - Author name and avatar
      - Comment content
      - Timestamp
      - Reply button
      - Edit/delete (if author)
    - Load more comments (if many)
  - **Sidebar**:
    - Author info
    - Related posts
    - Related trades

#### 4.6.4 User Profile Page
- **Purpose**: Display user information and activity
- **Requirements**:
  - **Profile Header**:
    - Profile picture
    - Name
    - Location
    - Join date
    - Edit profile button (if own profile)
  - **About Section**:
    - Bio
    - Trades of interest/expertise
    - Website/social links (optional)
  - **Activity Tabs**:
    - Posts created
    - Comments made
    - Bookmarks (private, only visible to self)
    - Career paths in progress (optional visibility)
  - **Stats**:
    - Post count
    - Comment count
    - Community reputation (future)

### 4.7 User Dashboard

#### 4.7.1 Dashboard Overview
- **Purpose**: Personalized hub for user activity
- **Requirements**:
  - **Welcome Message**:
    - Personalized greeting
    - Quick stats (bookmarks, paths in progress)
  - **Quick Actions**:
    - Explore trades
    - Find training
    - Ask a question
  - **Career Paths in Progress**:
    - List of active paths
    - Progress bars
    - "Continue" buttons
  - **Bookmarked Items**:
    - Tabs for trades, programs, resources
    - Quick view cards
    - Remove bookmark option
  - **Recent Activity**:
    - Recent posts and comments
    - Community notifications
  - **Recommended Content**:
    - Personalized suggestions based on interests
    - New resources in followed trades

### 4.8 Authentication

#### 4.8.1 Sign Up Page
- **Purpose**: New user registration
- **Requirements**:
  - Email and password fields
  - Password confirmation
  - Password strength indicator
  - "Sign up with Google" button
  - Terms of service and privacy policy checkboxes
  - Already have account link (to login)
  - Form validation
  - Email verification sent after signup

#### 4.8.2 Login Page
- **Purpose**: User authentication
- **Requirements**:
  - Email and password fields
  - Remember me checkbox
  - "Login with Google" button
  - Forgot password link
  - Don't have account link (to signup)
  - Form validation
  - Redirect to previous page after login

#### 4.8.3 Forgot Password Flow
- **Requirements**:
  - Email input page
  - Email verification
  - Password reset link sent
  - Reset password page
  - New password fields
  - Password strength indicator
  - Confirmation and redirect to login

#### 4.8.4 Profile Settings Page
- **Purpose**: Manage account settings
- **Requirements**:
  - **Profile Information**:
    - Name, bio, location
    - Profile picture upload
    - Trades of interest
  - **Account Settings**:
    - Email (with verification if changed)
    - Password change
    - Delete account option
  - **Privacy Settings**:
    - Profile visibility
    - Show activity publicly
    - Email preferences
  - **Notification Preferences** (future):
    - Email notifications
    - Community reply notifications

---

## 5. Technical Requirements

### 5.1 Technology Stack (Implemented)

#### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React hooks and context
- **Form Handling**: React Hook Form (to be added)
- **Validation**: Zod (to be added)

#### Backend
- **API**: Next.js API Routes
- **Authentication**: NextAuth.js v5
- **ORM**: Prisma
- **Database**:
  - Development: SQLite
  - Production: PostgreSQL (recommended)

#### Deployment
- **Hosting**: Vercel (recommended)
- **CDN**: Vercel Edge Network
- **Database**: Railway or Supabase for PostgreSQL

### 5.2 Performance Requirements

- **Page Load Time**: < 2 seconds for initial page load
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: > 90 on all metrics
- **Image Optimization**: All images lazy-loaded and optimized
- **API Response Time**: < 500ms for 95th percentile

### 5.3 Security Requirements

- **Authentication**: Secure session management with NextAuth.js
- **Data Protection**:
  - Passwords hashed with bcrypt/argon2
  - HTTPS only in production
  - CSRF protection
  - XSS prevention
- **API Security**:
  - Rate limiting on all endpoints
  - Input validation and sanitization
  - SQL injection prevention (via Prisma)
- **Privacy**:
  - GDPR compliance
  - Clear privacy policy
  - User data export capability
  - Account deletion

### 5.4 Accessibility Requirements

- **WCAG 2.1 Level AA Compliance**
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader Support**: Proper ARIA labels
- **Color Contrast**: Minimum 4.5:1 ratio
- **Focus Indicators**: Visible focus states
- **Alt Text**: All images have descriptive alt text
- **Semantic HTML**: Proper heading hierarchy

### 5.5 Browser Support

- **Desktop**:
  - Chrome (last 2 versions)
  - Firefox (last 2 versions)
  - Safari (last 2 versions)
  - Edge (last 2 versions)
- **Mobile**:
  - iOS Safari (last 2 versions)
  - Chrome Android (last 2 versions)

### 5.6 Responsive Design

- **Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- **Mobile-First Approach**: Design for mobile, enhance for desktop
- **Touch Targets**: Minimum 44x44px for interactive elements

---

## 6. Data Models

### 6.1 Database Schema (Already Implemented)

The complete database schema is defined in `prisma/schema.prisma`. Key models:

#### User & Authentication
```typescript
User {
  id: String (CUID)
  name: String?
  email: String (unique)
  emailVerified: DateTime?
  image: String?
  bio: String?
  location: String?
  createdAt: DateTime
  updatedAt: DateTime
  // Relations: accounts, sessions, posts, comments, bookmarks, progress
}

Account { /* NextAuth.js OAuth accounts */ }
Session { /* User sessions */ }
VerificationToken { /* Email verification */ }
```

#### Trade Models
```typescript
TradeCategory {
  id: String
  name: String (unique)
  description: String
  slug: String (unique)
  icon: String?
  // Relations: trades
}

Trade {
  id: String
  name: String (unique)
  slug: String (unique)
  description: String
  shortDescription: String
  categoryId: String
  averageSalary: String?
  jobOutlook: String?
  skills: String (JSON array)
  requirements: String (JSON array)
  imageUrl: String?
  // Relations: category, careerPaths, trainingPrograms, resources
}

CareerPath {
  id: String
  tradeId: String
  title: String
  description: String
  steps: String (JSON array)
  duration: String?
  difficulty: String?
  order: Int
  // Relations: trade, userProgress
}
```

#### Training Models
```typescript
TrainingProvider {
  id: String
  name: String
  type: String
  description: String?
  website: String?
  phone: String?
  email: String?
  address: String?
  city: String?
  state: String?
  zipCode: String?
  logoUrl: String?
  verified: Boolean
  // Relations: programs
}

TrainingProgram {
  id: String
  title: String
  description: String
  providerId: String
  tradeId: String?
  type: String
  duration: String?
  cost: String?
  format: String?
  location: String?
  startDate: String?
  applicationUrl: String?
  requirements: String? (JSON)
  featured: Boolean
  // Relations: provider, trade
}
```

#### Content Models
```typescript
Resource {
  id: String
  title: String
  description: String
  content: String (Markdown)
  type: String
  url: String?
  tradeId: String?
  featured: Boolean
  published: Boolean
  views: Int
  readTime: Int?
  imageUrl: String?
  tags: String? (JSON)
  // Relations: trade, bookmarks
}
```

#### Community Models
```typescript
Post {
  id: String
  title: String
  content: String
  authorId: String
  published: Boolean
  tradeId: String?
  views: Int
  // Relations: author, comments
}

Comment {
  id: String
  content: String
  authorId: String
  postId: String
  parentId: String? (for nesting)
  // Relations: author, post, parent, replies
}
```

#### User Progress Models
```typescript
UserProgress {
  id: String
  userId: String
  careerPathId: String
  currentStep: Int
  completed: Boolean
  notes: String?
  // Relations: user, careerPath
}

Bookmark {
  id: String
  userId: String
  resourceId: String
  // Relations: user, resource
}
```

### 6.2 JSON Field Structures

#### Trade.skills (array)
```json
["Electrical theory", "Blueprint reading", "Code compliance", "Safety procedures"]
```

#### Trade.requirements (array)
```json
[
  "High school diploma or GED",
  "18 years or older",
  "Valid driver's license",
  "Ability to lift 50 lbs"
]
```

#### CareerPath.steps (array of objects)
```json
[
  {
    "order": 1,
    "title": "Complete Basic Education",
    "description": "Obtain high school diploma or GED",
    "duration": "Varies",
    "requirements": []
  },
  {
    "order": 2,
    "title": "Enroll in Apprenticeship",
    "description": "Find and apply to approved apprenticeship programs",
    "duration": "4-5 years",
    "requirements": ["Valid ID", "Reliable transportation"]
  }
]
```

#### Resource.tags (array)
```json
["beginner", "certification", "video", "hvac"]
```

---

## 7. API Specifications

### 7.1 API Routes Structure

All API routes follow RESTful conventions under `/api/`:

#### Trades
- `GET /api/trades` - List all trades (with filters)
- `GET /api/trades/[id]` - Get single trade
- `GET /api/trades/category/[slug]` - Trades by category
- `GET /api/trades/search?q=query` - Search trades

#### Categories
- `GET /api/categories` - List all categories
- `GET /api/categories/[slug]` - Get single category

#### Career Paths
- `GET /api/career-paths/[id]` - Get career path
- `GET /api/career-paths/trade/[tradeId]` - Paths for a trade

#### Training Programs
- `GET /api/training-programs` - List programs (with filters)
- `GET /api/training-programs/[id]` - Get single program
- `POST /api/training-programs` - Create program (provider only)
- `PUT /api/training-programs/[id]` - Update program
- `DELETE /api/training-programs/[id]` - Delete program

#### Training Providers
- `GET /api/training-providers` - List providers
- `GET /api/training-providers/[id]` - Get single provider
- `POST /api/training-providers` - Create provider profile
- `PUT /api/training-providers/[id]` - Update provider

#### Resources
- `GET /api/resources` - List resources (with filters)
- `GET /api/resources/[id]` - Get single resource
- `POST /api/resources/[id]/view` - Increment view count

#### Community
- `GET /api/posts` - List posts (with filters)
- `GET /api/posts/[id]` - Get single post with comments
- `POST /api/posts` - Create post (authenticated)
- `PUT /api/posts/[id]` - Update post (author only)
- `DELETE /api/posts/[id]` - Delete post (author only)
- `POST /api/posts/[id]/comments` - Add comment
- `PUT /api/comments/[id]` - Update comment (author only)
- `DELETE /api/comments/[id]` - Delete comment (author only)

#### User
- `GET /api/user/profile` - Get current user profile
- `PUT /api/user/profile` - Update profile
- `GET /api/user/bookmarks` - Get user bookmarks
- `POST /api/user/bookmarks` - Add bookmark
- `DELETE /api/user/bookmarks/[id]` - Remove bookmark
- `GET /api/user/progress` - Get user career path progress
- `POST /api/user/progress` - Update progress
- `PUT /api/user/progress/[id]` - Update specific progress

#### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- (Additional NextAuth routes under `/api/auth/[...nextauth]`)

### 7.2 API Response Format

#### Success Response
```json
{
  "success": true,
  "data": { /* response data */ },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

#### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

### 7.3 Authentication

- **Method**: JWT tokens via NextAuth.js
- **Token Location**: HTTP-only cookies
- **Protected Routes**: Require valid session
- **Token Expiration**: 30 days (configurable)
- **Refresh**: Automatic via NextAuth.js

---

## 8. UI/UX Requirements

### 8.1 Design Principles

1. **Clarity**: Information should be easy to find and understand
2. **Simplicity**: Clean, uncluttered interfaces
3. **Accessibility**: Usable by everyone, including those with disabilities
4. **Consistency**: Uniform design patterns throughout
5. **Responsiveness**: Seamless experience across devices
6. **Performance**: Fast loading and smooth interactions

### 8.2 Visual Design

#### Color Palette
- **Primary**: Blue (#2563EB) - Trust, professionalism
- **Secondary**: Orange (#F97316) - Energy, enthusiasm
- **Accent**: Green (#10B981) - Growth, success
- **Neutral**: Grays (#F9FAFB to #111827)
- **Semantic**:
  - Success: Green (#10B981)
  - Warning: Yellow (#F59E0B)
  - Error: Red (#EF4444)
  - Info: Blue (#3B82F6)

#### Typography
- **Headings**: Bold, clear hierarchy (H1-H6)
- **Body**: Readable font size (16px minimum)
- **Line Height**: 1.5 for body text
- **Font Family**: System fonts for performance

#### Spacing
- Consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Adequate white space for readability
- Clear visual grouping

#### Components
- **Buttons**:
  - Primary: Solid background, high contrast
  - Secondary: Outline style
  - Tertiary: Text only
  - Sizes: Small, medium, large
  - States: Default, hover, active, disabled
- **Forms**:
  - Clear labels above fields
  - Helpful placeholder text
  - Inline validation with clear error messages
  - Required field indicators
- **Cards**:
  - Rounded corners
  - Subtle shadows
  - Hover effects for interactivity
- **Navigation**:
  - Persistent header with logo, main nav, search, account
  - Mobile: Hamburger menu
  - Breadcrumbs for deep pages
  - Footer with links and info

### 8.3 User Flows

#### Flow 1: Explore Trade → Find Training
1. Land on homepage
2. Click "Explore Trades" or category
3. Browse trades, use filters
4. Click on interesting trade
5. Read details, view career path
6. Click "Find Training Programs"
7. Filter by location, type
8. Compare programs
9. Click "Apply Now" (external)

#### Flow 2: Create Account → Track Progress
1. Browse site as guest
2. Find interesting career path
3. Prompted to create account to track progress
4. Sign up with email or Google
5. Return to career path
6. Click "Start This Path"
7. Mark steps as complete
8. Add notes to steps
9. View progress in dashboard

#### Flow 3: Join Community
1. Navigate to community section
2. Browse discussions
3. Find relevant question
4. Need to login to reply
5. Create account or login
6. Write comment
7. Posted and visible
8. Receive future notifications (future feature)

### 8.4 Key Interactions

- **Bookmarking**: Single click to save, visual feedback
- **Filtering**: Real-time updates, clear active filters
- **Search**: Autocomplete, recent searches
- **Forms**: Inline validation, clear error states
- **Loading States**: Skeleton loaders, progress indicators
- **Empty States**: Helpful messages, calls to action
- **Modals**: For confirmations and quick actions
- **Toasts**: For success/error notifications

---

## 9. Non-Functional Requirements

### 9.1 Performance
- Page load time < 2 seconds
- API response time < 500ms (95th percentile)
- Image optimization and lazy loading
- Code splitting for faster initial load
- CDN for static assets

### 9.2 Scalability
- Support for 10,000+ concurrent users
- Database query optimization
- Caching strategy (Redis in future)
- Horizontal scaling capability

### 9.3 Reliability
- 99.9% uptime SLA
- Automated backups (daily)
- Error logging and monitoring (Sentry)
- Graceful error handling

### 9.4 Security
- HTTPS everywhere
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF tokens
- Rate limiting
- Regular security audits

### 9.5 Maintainability
- Clean, documented code
- TypeScript for type safety
- Comprehensive test coverage
- Consistent code style (ESLint, Prettier)
- Version control (Git)

### 9.6 SEO
- Server-side rendering with Next.js
- Semantic HTML
- Meta tags for all pages
- Sitemap.xml
- Robots.txt
- Schema.org markup
- Social media preview cards

### 9.7 Analytics
- Google Analytics integration
- User behavior tracking
- Conversion tracking
- A/B testing capability (future)

### 9.8 Legal Compliance
- GDPR compliance
- CCPA compliance
- Privacy policy
- Terms of service
- Cookie consent
- Data retention policies

---

## 10. Success Criteria

### 10.1 Launch Criteria (MVP)

**Must Have:**
- [ ] Homepage with trade categories
- [ ] Trade detail pages with comprehensive info
- [ ] Career path pages with step-by-step guidance
- [ ] Training program search and detail pages
- [ ] Resource library with articles and videos
- [ ] User authentication (email and Google OAuth)
- [ ] User dashboard with bookmarks and progress
- [ ] Community forum with posts and comments
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Basic SEO optimization

**Should Have:**
- [ ] Training program comparison feature
- [ ] User profile pages
- [ ] Search across trades and resources
- [ ] Email verification
- [ ] Password reset functionality

**Nice to Have:**
- [ ] Advanced filters on all pages
- [ ] Map view for training programs
- [ ] Video content in resource library
- [ ] Featured content curation
- [ ] Social sharing

### 10.2 Post-Launch Success Metrics

#### Month 1
- 1,000 unique visitors
- 100 registered users
- 50 career paths started
- 20 community posts created
- 5 training provider partnerships

#### Month 3
- 5,000 unique visitors
- 500 registered users
- 200 career paths started
- 100 community posts
- 20 training providers

#### Month 6
- 15,000 unique visitors
- 2,000 registered users
- 500 career paths started
- 300 community posts
- 50 training providers

#### Key Performance Indicators (Ongoing)
- **Engagement**:
  - Average session duration > 3 minutes
  - Pages per session > 3
  - Return visitor rate > 30%
- **Conversion**:
  - Registration conversion rate > 5%
  - Training program clicks > 10% of trade views
  - Career path start rate > 20% of views
- **Community**:
  - Active contributors (post/comment monthly) > 10%
  - Average response time to questions < 24 hours
- **Quality**:
  - User satisfaction score (NPS) > 50
  - Training provider satisfaction > 4/5
  - Page load time < 2 seconds

### 10.3 User Feedback

- Conduct user interviews (10+ users)
- Post-launch survey (target 100+ responses)
- Continuous feedback widget on site
- Monitor support requests and common issues
- Analyze user behavior with analytics

---

## Appendix

### A. Glossary

- **Trade**: A skilled occupation requiring specialized training
- **Apprenticeship**: Structured training program combining classroom and on-the-job learning
- **Journeyman**: Mid-level trade professional who has completed apprenticeship
- **Certification**: Official credential demonstrating competency
- **Career Path**: Step-by-step progression from entry to mastery in a trade

### B. References

- Bureau of Labor Statistics (BLS) - Trade statistics and outlooks
- Department of Labor - Apprenticeship information
- NextAuth.js v5 Documentation
- Next.js 16 Documentation
- Prisma Documentation
- Tailwind CSS Documentation

### C. Change Log

- **Version 1.0** (November 2025): Initial PRD creation

---

**Document Approval**

- [ ] Product Owner
- [ ] Engineering Lead
- [ ] Design Lead
- [ ] Stakeholders
