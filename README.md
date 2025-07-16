
# 🏆 LeaderBoard Backend 

This is the **backend server** for the [Leaderboard Backend](https://github.com/saranshjagwani/LeaderBoard-Backend), built with **Node.js**, **Express**, and **MongoDB**. It supports user management, random point claiming, and claim history tracking.

> 🔗 Deployed API: [https://leaderboard-backend-r8zw.onrender.com](https://leaderboard-backend-r8zw.onrender.com)

---

## 🗂️ Project Structure

```

Leaderboard-Backend/
├── models/          # Mongoose schemas (User, Claim)
├── routes/          # API route files (users, claim)
├── server.js        # Main entry point
├── .env             # Environment variables (not pushed to GitHub)
└── package.json

````

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Axios** (used in frontend)
- **CORS** (enabled for frontend integration)
- **Deployed on Render**

---

## 🚀 Available API Endpoints

### 📍 User Routes (`/api/users`)
- `GET /api/users` — Get all users sorted by points
- `POST /api/users` — Add a new user

### 🎯 Claim Routes (`/api/claim`)
- `POST /api/claim` — Claim random points for a user
- `GET /api/claim/history` — View all point claim history

---

## 📦 Installation & Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/saranshjagwani/LeaderBoard-Backend.git
cd LeaderBoard-Backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the server

```bash
nodemon server.js
# OR
node server.js
```

> By default, it runs on `http://localhost:5000`

---

## 🌐 Deployment

This project is deployed on **Render**:

> 🔗 [https://leaderboard-backend-r8zw.onrender.com](https://leaderboard-backend-r8zw.onrender.com)

Make sure to set the following **Environment Variables** in Render:

* `PORT`
* `MONGO_URI`

---

## 🧪 Testing with Postman

You can test the API using [Postman](https://www.postman.com/) or any HTTP client.

Example:

```http
POST /api/claim
Content-Type: application/json

{
  "userId": "64abc1234xyz..."
}
```

---

## 👨‍💻 Author

**Saransh Jagwani**
🔗 [GitHub](https://github.com/saranshjagwani)

---

## 🛡️ License

This project is licensed under the **MIT License**.

---

## 🙌 Contributions & Issues

Pull requests and issue reports are always welcome! If you find a bug or want to suggest improvements, feel free to contribute.

```
