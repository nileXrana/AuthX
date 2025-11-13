# AuthX - Role-Based Authentication System

A full-stack auth system with role-based signup/login and dashboards. Built with **Next.js** | **Express** | **MongoDB** | **TypeScript**

## ✨ Features

- Role-based authentication (User/Admin)
- JWT tokens (30-day expiration)
- bcrypt password hashing
- Protected routes & dashboards
- Zod form validation
- Modern TailwindCSS UI

## 🛠️ Tech Stack

**Frontend:** Next.js 16, TypeScript, TailwindCSS, React Hook Form, Axios  
**Backend:** Node.js, Express, MongoDB, JWT, bcryptjs

##  Quick Start

1. **Clone & install**
```bash
git clone https://github.com/nileXrana/AuthX
cd AuthX
npm install && cd backEnd && npm install
```

2. **Environment variables**

`backEnd/.env`:
```
PORT=5001
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:3000
```

3. **Run**

Terminal 1:
```bash
cd backEnd && npm run dev
```

Terminal 2:
```bash
npm run dev
```

**Frontend:** http://localhost:3000  
**Backend:** http://localhost:5001

## 📍 Routes

| Page | Path | Protected |
|------|------|-----------|
| Landing | `/` | ❌ |
| Login | `/auth/login` | ❌ |
| Signup | `/auth/signup` | ❌ |
| User Dashboard | `/dashboard/user` | ✅ |
| Admin Dashboard | `/dashboard/admin` | ✅ Admin |

## 🔐 API Endpoints

```
POST /api/auth/signup    - Register user
POST /api/auth/login     - Login user
GET  /api/auth/me        - Get user info (protected)
```

## 📂 Project Structure

```
AuthX/
├── frontEnd/
│   ├── app/
│   │   ├── auth/ (login, signup)
│   │   └── dashboard/ (user, admin)
│   ├── components/ (ProtectedRoute)
│   ├── context/ (AuthContext)
│   └── lib/ (api, schemas)
└── backEnd/
    └── src/
        ├── models/ (User)
        ├── routes/
        ├── controllers/
        ├── middleware/ (auth)
        └── utils/ (jwt)
```

## 🔒 Security

- Bcrypt password hashing
- JWT authentication with 30-day expiration
- CORS configured for frontend
- Protected routes via middleware
- Zod input validation
