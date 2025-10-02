AnantAcademy — How to Run

Backend (API)
1) Install deps
   cd backend
   npm install

2) Create .env
   Copy backend/example.env to backend/.env and fill values:
   PORT=4000
   MONGODB_URI=<your MongoDB connection string>
   NODE_ENV=development
   JWT_SECRET=your-super-secret-jwt-key-change-in-production

3) Run migrations
   npx migrate-mongo up

4) Start API
   npm run dev
   Open http://localhost:4000/health to verify

Frontend (Vue)
1) Install deps
   cd frontend
   npm install

2) Create .env
   Copy frontend/example.env to frontend/.env and adjust if needed:
   VITE_API_BASE_URL=http://localhost:4000

3) Start dev server
   npm run dev
   Open http://localhost:5173

Admin Access
- URL: http://localhost:5173/admin/login
- Email: admin@anantacademy.com
- Password: admin123

Notes
- The frontend posts to POST {VITE_API_BASE_URL}/api/v1/demo-requests
- Update VITE_API_BASE_URL if your API runs on a different host/port
- Admin dashboard allows viewing and managing all demo requests


