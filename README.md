# 🇹🇭 Thailand Travel Portal (web-tourist-vite)

Welcome to the **Thailand Travel Portal**, a modern, premium, and fully integrated full-stack web application designed to guide tourists through the majestic regions, unique cuisines, and cultural festivals of Thailand. 

This platform showcases a visually stunning frontend built with **React** and **Vite**, backed by a robust **Express.js** and **MongoDB** API server.

---

## ✨ Features

### 🎨 Premium Frontend (UI/UX)
* **Glassmorphic Floating Header**: Sleek, modern responsive navbar with backdrop blur (`backdrop-filter: blur(12px)`) and dynamic active tab tracking powered by React Router's `useLocation`.
* **Interactive Travel Portal**:
  * **Interest-Based Filtering**: Instantly browse tailored destination cards (Beaches & Islands, Temples & Heritage, Mountains & Nature, Food & Markets).
  * **Dynamic Keyword Search**: Responsive tag and title search built directly into the welcome hero.
* **Travel Insights Blog**: Elegant grid-based blog layout featuring article cards with expandable `"Read Full Article ▼"` accordion details, blockquotes, and publication details.
* **Dual-Column Contact Sheet**: Fully styled two-column page with localized hotline support grids and a glassmorphic inquiry card form.

### 🔌 Resilient Full-Stack Backend
* **Robust Express API**: Seamless communication via a pre-configured Vite development proxy to automatically bypass CORS restrictions.
* **Connection-Resilient Database**: Integrates **MongoDB** and **Mongoose**. If MongoDB is down locally, the server gracefully fallbacks to a memory-based data array to keep the REST endpoints fully operational.
* **Email Notification System**: Utilizes **Nodemailer** for email delivery. If SMTP credentials are not configured in `.env`, the system automatically prints inquiries inside the server logs so local testing remains smooth.

---

## 🛠️ Tech Stack

* **Frontend**: React (v18), Vite, Vanilla CSS (Premium gradients, custom hover scaling, transition systems), React Router (v7).
* **Backend**: Node.js, Express.js, Mongoose, Nodemailer, Dotenv, Cors.
* **Database**: MongoDB (with local array backup).

---

## 📁 Project Structure

```text
web-tourist-vite/
├── src/
│   ├── backend/
│   │   ├── .env                 # Local server environment config
│   │   └── server.js            # Express server entry point
│   ├── components/
│   │   ├── Header.jsx           # Top welcome banner
│   │   ├── Nav.jsx              # Glassmorphic navbar component
│   │   └── Footer.jsx           # Global application footer
│   ├── page/
│   │   ├── Home.jsx             # Interactive travel guide & search
│   │   ├── News.jsx             # Grid-based travel blog
│   │   ├── Contact.jsx          # Inquiry contact form sheet
│   │   └── About.jsx            # Thailand overview layout
│   ├── App.jsx                  # React routing and root wrappers
│   ├── App.css                  # Custom styling system
│   └── main.jsx                 # Client entry point
├── vite.config.js               # Dev proxy settings
└── package.json                 # Dependency manifests
```

---

## ⚡ Getting Started

Follow these steps to launch the entire platform locally:

### 1. Prerequisites
Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB](https://www.mongodb.com/) (Optional - the application will auto-fallback to an in-memory database if MongoDB is not running)

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/iamnewdt/web-tourist-vite.git
cd web-tourist-vite
npm install
```

### 3. Setup Environment Variables
An empty template `.env` has been created inside `src/backend/.env`. You can supply SMTP email credentials to enable live email delivery:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/web-tourist
SMTP_HOST=smtp.ethereal.email
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
RECEIVER_EMAIL=admin@example.com
```

### 4. Running the Application
Launch both systems in separate terminal windows:

#### Start the Backend API Server:
```bash
node src/backend/server.js
```
*Console output will display database and email connection status:*
```text
🚀 Server successfully launched on http://localhost:5000
💚 Connected to MongoDB successfully.
```

#### Start the Vite React Frontend:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser to explore!

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Returns server health status and active database engine. |
| `POST` | `/api/contact` | Validates, persists contact details, and triggers email notices. |
| `GET` | `/api/contact-messages` | Dev helper route to inspect submitted inquiries. |

---

## 🇹🇭 Sawasdee 🙏
Enjoy exploring the Land of Smiles! For support or queries, reach out through our Contact page.
