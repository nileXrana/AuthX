# Full-Stack Mini Project - Role-Based Authentication System

A modern full-stack web application with role-based signup/login and role-specific dashboards. Built with Next.js, Express, MongoDB, and TypeScript.

## 🎯 Features

### Core Features
- ✅ **Role-Based Authentication** - Signup with User or Admin role selection
- ✅ **Secure Password Storage** - bcrypt password hashing
- ✅ **JWT Authentication** - 30-day token expiration
- ✅ **Protected Routes** - Accessible only when logged in
- ✅ **Role-Specific Dashboards** - Different UI for User vs Admin
- ✅ **Logout Functionality** - Secure session termination
- ✅ **Form Validation** - Zod validation schemas
- ✅ **Modern UI** - TailwindCSS with minimal design

### API Endpoints
- `POST /api/auth/signup` - User registration with role selection
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info (protected)

### Pages
- `/` - Landing page with features overview
- `/auth/login` - Login form
- `/auth/signup` - Signup form with role selection
- `/dashboard` - Smart redirect based on user role
- `/dashboard/user` - User dashboard
- `/dashboard/admin` - Admin dashboard (admin only)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Forms**: React Hook Form + Zod validation
- **API Client**: Axios with JWT interceptor

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **CORS**: Enabled for frontend

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB account (MongoDB Atlas)
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mini-project-assignment1
```

### 2. Setup Environment Variables

#### Frontend (.env.local)
```bash
cp .env.example .env.local
# Edit .env.local with your backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### Backend (.env)
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB connection string and JWT secret
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_change_this_in_production
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Install Dependencies

#### Frontend
```bash
# From root directory
npm install
```

#### Backend
```bash
cd backend
npm install
```

### 4. Run the Application

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
# Backend runs on http://localhost:5000
```

#### Terminal 2 - Frontend
```bash
npm run dev
# Frontend runs on http://localhost:3000
```

## 📝 Usage

### Creating an Account
1. Go to `http://localhost:3000`
2. Click "Sign Up" or "Get Started"
3. Fill in your details:
   - Full Name
   - Email
   - Password (min 6 characters)
   - Confirm Password
   - Select Role (User or Admin)
4. Click "Sign Up"
5. You'll be redirected to your dashboard

### Logging In
1. Go to `http://localhost:3000/auth/login`
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to your role-specific dashboard

### Dashboards
- **User Dashboard** (`/dashboard/user`): 
  - View account information
  - See member status
  - Access user features
  - Logout button

- **Admin Dashboard** (`/dashboard/admin`):
  - Elevated admin privileges
  - System statistics
  - Admin permissions overview
  - Quick admin actions
  - Logout button

## 🔐 Security Features

- **Password Hashing**: Bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication with 30-day expiration
- **CORS**: Configured to only accept requests from frontend
- **Protected Routes**: Backend endpoints require valid JWT token
- **Client-Side Token Storage**: Stored in localStorage with automatic inclusion in requests
- **Input Validation**: Zod schemas for all form inputs

## 📂 Project Structure

```
mini-project-assignment1/
├── frontend files
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/page.tsx
│   │   │   └── signup/page.tsx
│   │   ├── dashboard/
│   │   │   ├── user/page.tsx
│   │   │   ├── admin/page.tsx
│   │   │   └── page.tsx (redirect)
│   │   ├── layout.tsx
│   │   ├── page.tsx (home)
│   │   └── globals.css
│   ├── components/
│   │   └── ProtectedRoute.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   ├── api.js
│   │   ├── schemas.ts
│   │   └── cookies.ts
│   ├── .env.example
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── models/
    │   │   └── User.js
    │   ├── routes/
    │   │   └── auth.js
    │   ├── controllers/
    │   │   └── authController.js
    │   ├── middleware/
    │   │   └── auth.js
    │   ├── utils/
    │   │   └── jwt.js
    │   └── index.js
    ├── .env.example
    ├── .gitignore
    └── package.json
```

## 🧪 Testing the App

### Test User Account
```
Email: user@example.com
Password: password123
Role: User
```

### Test Admin Account
```
Email: admin@example.com
Password: admin123
Role: Admin
```

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set environment variables:
   - `NEXT_PUBLIC_API_URL=<your-backend-url>`
5. Deploy

### Backend (Render)
1. Create account at [render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `FRONTEND_URL`
   - `NODE_ENV=production`
5. Deploy

## 📝 API Documentation

### POST /api/auth/signup
Register a new user

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "User"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "User",
    "createdAt": "2025-01-13T..."
  }
}
```

### POST /api/auth/login
Login user

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "User",
    "createdAt": "2025-01-13T..."
  }
}
```

### GET /api/auth/me
Get current user info (requires JWT token)

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "User",
    "createdAt": "2025-01-13T..."
  }
}
```

## 🐛 Troubleshooting

### Backend won't connect to MongoDB
- Check your MongoDB URI in `.env`
- Ensure IP whitelist includes your machine
- Verify database name is correct

### Frontend can't reach backend
- Ensure backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` environment variable
- Verify CORS is enabled in backend

### Token issues
- Clear localStorage and login again
- Check token expiration (30 days)
- Verify JWT_SECRET matches between backend and .env

### Build errors
- Delete `node_modules` and `.next` folder
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [JWT.io](https://jwt.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zod Validation](https://zod.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ for learning full-stack development.

---

**Happy Coding! 🚀**

If you have any questions or need help, feel free to ask!

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
