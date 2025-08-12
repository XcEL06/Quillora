Quillora is a full-stack social networking platform built for **writers, authors, readers, artists, and other creatives**. It provides an online space where creators can **connect, share, collaborate, and showcase their work**.

---

## ✨ Features

- **User Authentication & Profiles**
  - Secure **JWT-based authentication**
  - Create and edit personal profiles
  - Profile pictures, bios, and creative interests

- **Content Creation**
  - Post stories, articles, and creative works
  - Like, comment, and share posts
  - Rich text editor support for formatted content

- **Social Interaction**
  - Add friends & follow creatives
  - Real-time chat & messaging via Socket.IO
  - Notifications for likes, comments, and follows

- **Community Engagement**
  - Topic-based discovery of posts
  - Featured works & trending content
  - Collaborative writing and feedback

- **Responsive Design**
  - Mobile-first, responsive UI
  - Works on all screen sizes

---

## 🛠 Tech Stack

**Frontend**
- React.js
- React Router
- Axios
- Socket.IO Client
- TailwindCSS (or your chosen styling library)

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Socket.IO Server

**Other Tools**
- Nodemon (for development)
- dotenv (for environment variables)
- bcryptjs (for password hashing)

---

## 📂 Project Structure

quillora/ │ ├── frontend/        # React frontend │   ├── public/ │   ├── src/ │   └── package.json │ ├── backend/         # Node.js backend │   ├── config/      # Database & server config │   ├── controllers/ # API logic │   ├── models/      # MongoDB schemas │   ├── routes/      # API routes │   ├── utils/       # Helpers & middleware │   ├── server.js    # App entry point │   └── package.json │ ├── .gitignore ├── LICENSE └── README.md

---

## 🚀 Getting Started


 Backend Setup

cd backend
cp .env.example .env
# Edit .env with your MONGO_URI, JWT_SECRET, CLIENT_URL
npm install
npm run dev  # Development mode

 Frontend Setup

cd frontend
npm install
npm start


---

⚙️ Environment Variables

In your backend/.env file:

MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
CLIENT_URL=http://localhost:3000


---

📜 License

See the LICENSE file for more information.


---

📣 Contributing

Currently, this repository is for viewing purposes only.
Forking and direct edits are disabled.
If you wish to collaborate, please contact the repository owner.


---

💌 Contact

Author: Okanlawon Emmanuel
GitHub: XcEL06
Email: oluwatobie049@gmail.com


---

> Quillora – Where Creativity Meets Connection.

