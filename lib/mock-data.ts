export const mockDocumentation = {
  readme: `# Project Name

## Overview

This is an example project that demonstrates a modern web application built with React and Node.js. It includes features for user authentication, data management, and API integration.

## Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project.git

# Navigate to the project directory
cd project

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

## Features

- User authentication and authorization
- CRUD operations for data management
- RESTful API endpoints
- Real-time updates with WebSockets
- Responsive UI for desktop and mobile devices

## Project Structure

\`\`\`
project/
├── src/
│   ├── components/  # UI components
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page components
│   ├── services/    # API services
│   ├── utils/       # Utility functions
│   └── App.tsx      # Main application component
├── server/
│   ├── controllers/ # Request handlers
│   ├── models/      # Data models
│   ├── routes/      # API routes
│   └── index.js     # Server entry point
└── package.json     # Project dependencies
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
`,

  moduleSummaries: `# Module Summaries

## src/components

### Button.tsx
A reusable button component that supports different variants and sizes.

**Props:**
- \`variant\`: 'default' | 'primary' | 'outline' | 'ghost'
- \`size\`: 'sm' | 'md' | 'lg'
- \`isLoading\`: boolean
- \`disabled\`: boolean

### Card.tsx
A flexible card component for displaying content with consistent styling.

**Props:**
- \`title\`: string
- \`description\`: string
- \`footer\`: ReactNode
- \`className\`: string

### Form.tsx
Form components with validation support using React Hook Form.

**Components:**
- \`Form\`: Main form wrapper
- \`FormField\`: Individual form field
- \`FormLabel\`: Label for form fields
- \`FormMessage\`: Validation error message

## src/hooks

### useAuth.ts
Custom hook for authentication state and operations.

**Methods:**
- \`login(email, password)\`: Login user
- \`logout()\`: Logout user
- \`register(userData)\`: Register new user
- \`isAuthenticated\`: boolean

### useFetch.ts
Hook for making API requests with loading and error states.

**Methods:**
- \`get(url)\`: GET request
- \`post(url, data)\`: POST request
- \`put(url, data)\`: PUT request
- \`delete(url)\`: DELETE request

## src/utils

### api.ts
Utility functions for API communication.

**Functions:**
- \`createApiClient(baseUrl)\`: Create API client
- \`handleApiError(error)\`: Error handling for API requests

### formatters.ts
Helper functions for formatting data.

**Functions:**
- \`formatDate(date, format)\`: Format date strings
- \`formatCurrency(amount, currency)\`: Format currency values

## server/controllers

### UserController.js
Controller for user-related operations.

**Methods:**
- \`getUsers()\`: Get all users
- \`getUserById(id)\`: Get user by ID
- \`createUser(data)\`: Create new user
- \`updateUser(id, data)\`: Update user
- \`deleteUser(id)\`: Delete user

### AuthController.js
Controller for authentication operations.

**Methods:**
- \`login(email, password)\`: User login
- \`register(userData)\`: User registration
- \`refreshToken(token)\`: Refresh authentication token
`,

  apiDocs: `# API Documentation

## Base URL
\`\`\`
https://api.example.com/v1
\`\`\`

## Authentication
All API requests require authentication using a bearer token:

\`\`\`
Authorization: Bearer {your_token}
\`\`\`

## Error Responses
All endpoints may return these error status codes:

- \`400\` - Bad Request
- \`401\` - Unauthorized
- \`403\` - Forbidden
- \`404\` - Not Found
- \`500\` - Server Error

---

## Users API

### Get All Users
\`\`\`
GET /users
\`\`\`

**Response**
\`\`\`json
{
  "users": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "admin"
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "user"
    }
  ]
}
\`\`\`

### Get User by ID
\`\`\`
GET /users/{id}
\`\`\`

**Response**
\`\`\`json
{
  "id": "1",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "created_at": "2023-01-15T10:30:00Z"
}
\`\`\`

### Create User
\`\`\`
POST /users
\`\`\`

**Request Body**
\`\`\`json
{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "password123",
  "role": "user"
}
\`\`\`

**Response**
\`\`\`json
{
  "id": "3",
  "name": "New User",
  "email": "newuser@example.com",
  "role": "user",
  "created_at": "2023-03-10T14:20:00Z"
}
\`\`\`

### Update User
\`\`\`
PUT /users/{id}
\`\`\`

**Request Body**
\`\`\`json
{
  "name": "Updated Name",
  "role": "admin"
}
\`\`\`

**Response**
\`\`\`json
{
  "id": "3",
  "name": "Updated Name",
  "email": "newuser@example.com",
  "role": "admin",
  "updated_at": "2023-03-11T09:15:00Z"
}
\`\`\`

### Delete User
\`\`\`
DELETE /users/{id}
\`\`\`

**Response**
\`\`\`json
{
  "message": "User deleted successfully"
}
\`\`\`

---

## Authentication API

### Login
\`\`\`
POST /auth/login
\`\`\`

**Request Body**
\`\`\`json
{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

**Response**
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin"
  }
}
\`\`\`

### Register
\`\`\`
POST /auth/register
\`\`\`

**Request Body**
\`\`\`json
{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "password123"
}
\`\`\`

**Response**
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "5",
    "name": "New User",
    "email": "newuser@example.com",
    "role": "user"
  }
}
\`\`\`
`,

  architecture: `# Project Architecture

This document provides an overview of the project's architecture and component relationships.

## System Overview

The application follows a client-server architecture with a React frontend and Node.js backend.

\`\`\`mermaid
graph TD
    Client[Client Browser] -->|HTTP/WS| API[API Server]
    API -->|Query/Mutation| DB[(Database)]
    API -->|Authentication| Auth[Auth Service]
    API -->|Events| Queue[Message Queue]
    Worker[Background Worker] -->|Process Jobs| Queue
    Worker -->|Read/Write| DB
    Cache[Redis Cache] <-->|Cache Data| API
\`\`\`

## Component Dependencies

The following diagram shows the main components and their dependencies:

\`\`\`mermaid
graph LR
    App[App] --> Router[Router]
    Router --> Pages[Pages]
    Pages --> Components[UI Components]
    Pages --> Hooks[Custom Hooks]
    Hooks --> Services[API Services]
    Services --> Utils[Utilities]
    
    subgraph "Frontend"
    App
    Router
    Pages
    Components
    Hooks
    Services
    Utils
    end
    
    subgraph "Backend"
    API[API Routes]
    Controllers[Controllers]
    Models[Data Models]
    Middleware[Middleware]
    end
    
    Services -->|HTTP Requests| API
    API --> Controllers
    Controllers --> Models
    Middleware -->|Intercept| API
\`\`\`

## Data Flow

The data flow through the system follows this pattern:

\`\`\`mermaid
sequenceDiagram
    participant User
    participant UI
    participant API
    participant DB
    
    User->>UI: Interaction
    UI->>API: HTTP Request
    API->>DB: Query Data
    DB->>API: Return Results
    API->>UI: JSON Response
    UI->>User: Update View
\`\`\`

## Deployment Architecture

The application is deployed using a modern cloud architecture:

\`\`\`mermaid
graph TD
    Client[Client] -->|HTTPS| CDN[CDN]
    CDN -->|Static Assets| StaticS3[Static Storage]
    Client -->|API Calls| LB[Load Balancer]
    LB -->|Route Requests| API1[API Server 1]
    LB -->|Route Requests| API2[API Server 2]
    API1 -->|Read/Write| DB[(Database)]
    API2 -->|Read/Write| DB
    API1 -->|Cache| Redis[Redis Cluster]
    API2 -->|Cache| Redis
\`\`\`
`
};