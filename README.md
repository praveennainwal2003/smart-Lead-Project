# Smart Lead Automation System

A MERN stack application built for the **VR Automations Developer Test**.  
This system processes a batch of names, enriches them using an external API, applies business rules, and runs a background automation.

---

## 🛠 Tech Stack
- Frontend: React, Axios
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Background Jobs: node-cron

---

## ⚙️ How It Works
1. User submits a list of names from the frontend
2. Backend calls Nationalize.io API for each name (async)
3. If confidence > 60% → **Verified**
4. Else → **To Check**
5. Data is stored in MongoDB
6. Every 5 minutes, verified leads are synced once (simulated CRM log)

---

## 🚀 How to Run Locally

### Backend
```bash ..

```bash
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm start


Runs on http://localhost:3000

🔐 Environment Variables

Create .env inside backend:

PORT=5000
MONGO_URI=your_mongodb_atlas_url



