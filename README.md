
# AI-Powered Chatbot

The goal of this project is to build a fully functional AI-powered chatbot that can communicate with users in real-time. The chatbot will utilize an AI model (such as OpenAI’s GPT API) to generate responses. The application will have a user-friendly frontend built with Next.js and Tailwind CSS, while the backend will be developed using Node.js, Express.js, and MongoDB for data storage.


## Features

1️⃣ **User Authentication**  
Users can sign up and log in using JWT or NextAuth.  
Secure session handling.

2️⃣ **Chat Interface**  
A sleek and responsive UI designed with Tailwind CSS.  
Real-time message updates (using WebSockets/Sockets.io).  
User and AI messages displayed in a conversation format.

3️⃣ **AI-Powered Responses**  
Backend API integrates with OpenAI GPT (or an alternative AI model).  
User inputs are processed and sent to the AI, which generates a response.

4️⃣ **Chat History**  
Messages are stored in MongoDB.  
Users can access previous conversations.

5️⃣ **Real-Time Chat (WebSockets)**  
Enables live conversation without the need to refresh the page.  
Uses Socket.io to send and receive messages instantly.

6️⃣ **User Personalization**  
Users can configure chatbot settings (e.g., chatbot name, theme mode).  
Option to rate responses or provide feedback.

7️⃣ **Admin Panel & Analytics (Optional)**  
Admin can track chatbot usage, user activity, and AI response performance.


## 🧱 Tech Stack

### 🖥️ Frontend

- **React** (v19)
- **Next.js** (v15)
- **Tailwind CSS** (v4) – for modern, utility-first UI
- **PostCSS** – for transforming CSS with JavaScript
- **Zustand** – lightweight state management
- **Lucide-react** – customizable icon library
- **react-hot-toast** – toast notifications
- **Axios** – HTTP client (though `fetch` is also used)
- **ESLint** – JavaScript/React linting and code quality
- **Vercel** – frontend hosting and deployment
- **JavaScript (ES6+)**
- **CSS** (with Tailwind + PostCSS)

---

### 🔧 Backend

#### 📦 Languages & Runtime
- **Node.js** – JavaScript runtime

#### 🧩 Frameworks & Libraries
- **Express.js** – minimalist web framework
- **Mongoose** – MongoDB ODM (Object Data Modeling)
- **dotenv** – environment variable management
- **CORS** – Cross-Origin Resource Sharing
- **bcryptjs** – password hashing
- **jsonwebtoken** – JWT-based authentication
- **cookie-parser** – for handling cookies
- **axios** – for making HTTP requests (used with Gemini API)
- **nodemon** – auto-restarts server on changes (development only)

#### 🗃️ Database
- **MongoDB Atlas** – cloud database solution

---

### 🌐 External Services

- **Google Gemini API** – AI-powered chatbot responses
- **MongoDB Atlas** – fully managed cloud database

## 🏗️ Project Architecture
```plaintext
Labmentix/
└── Project2/
    ├── labmentix-frontend-chatbot/
    │   ├── .gitignore
    │   ├── eslint.config.mjs
    │   ├── jsconfig.json
    │   ├── next.config.mjs
    │   ├── package.json
    │   ├── postcss.config.mjs
    │   ├── README.md
    │   ├── .next/                    # Next.js build output
    │   │   ├── app-build-manifest.json
    │   │   ├── build-manifest.json
    │   │   ├── fallback-build-manifest.json
    │   │   ├── package.json
    │   │   ├── trace/
    │   │   └── transform.js
    │   ├── public/                   # Static assets (images, favicon, etc.)
    │   ├── src/
    │   │   ├── components/           # Reusable UI components
    │   │   │   └── Nav.jsx
    │   │   ├── pages/                # Application routes
    │   │   │   ├── _app.js
    │   │   │   ├── _document.js
    │   │   │   ├── chathistory.js
    │   │   │   ├── demy.js
    │   │   │   ├── demy1.js
    │   │   │   ├── hero.js
    │   │   │   ├── index.js
    │   │   │   ├── signin.js
    │   │   │   └── signup.js
    │   │   ├── store/                # Zustand store
    │   │   │   └── auth.js
    │   │   └── styles/
    │   │       └── globals.css
    │   └── ...
    │
    └── labmentix-backend-chatbot/
        ├── .env                      # Environment variables
        ├── index.js                  # Main server file
        ├── package.json
        └── route/
            └── myrouter.js          # Express API routes

### 📝 Notes

- The **frontend** is built using **Next.js (React)** with:
  - **Tailwind CSS** for modern UI styling
  - **Zustand** for lightweight global state management
  - **Lucide-react** for icons
  - **react-hot-toast** for toast notifications
  - Custom components and pages for routing and layout

- The **backend** is developed using **Node.js** and **Express.js**, with:
  - **MongoDB** (via **Mongoose**) for database operations
  - **JWT** for secure authentication
  - **bcryptjs** for password hashing
  - **dotenv** for environment configuration
  - **axios** for HTTP requests
  - **CORS** and **cookie-parser** for handling cross-origin and cookie data

- The `.env` file in the backend stores sensitive configurations such as **API keys** and **MongoDB URI**.

- `myrouter.js` in the backend contains custom **Express routes**.

- The `public/` directory in the frontend contains **static assets** (e.g., images, favicon).

- The `src/pages/` directory in the frontend includes all main **pages** such as the chatbot, login/signup, and home.

- The `src/components/` folder contains reusable **UI components** (e.g., `Nav`).

- The `src/store/` directory holds the **Zustand state management** logic.

- The `src/styles/` folder contains global **Tailwind-based styles**.



### ⚙️ Installation & Setup
### 1️⃣ Clone the Repository  
Download the codebase to your local machine.
```bash
git clone https://github.com/your-username/labmentix.git
cd labmentix/Project2
```

### 2️⃣ Install Frontend Dependencies  
Navigate to the frontend folder and install required packages.
```bash
cd labmentix-frontend-chatbot
npm install
```

### 3️⃣ Install Backend Dependencies  
Navigate to the backend folder and install backend dependencies.
```bash
cd ../labmentix-backend-chatbot
npm install
```

### 4️⃣ Configure Environment Variables  
Create a `.env` file in `labmentix-backend-chatbot/` and add your secrets:
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

### 5️⃣ Run the Backend Server  
Start the Express backend server.
```bash
npm start
```
Runs on: [http://localhost:5000](http://localhost:5000)

### 6️⃣ Run the Frontend Development Server  
Navigate back to the frontend and run the Next.js development server.
```bash
cd ../labmentix-frontend-chatbot
npm run dev
```
Runs on: [http://localhost:3000](http://localhost:3000)

### 7️⃣ Access the Application  
Open your browser and visit:  
[http://localhost:3000](http://localhost:3000)



## 🚀 Usage

Once the installation and setup are complete, follow these steps to start using the application:

### 🔐 1. User Signup/Login  
- Navigate to [http://localhost:3000](http://localhost:3000).  
- Create a new account or log in using your existing credentials.  
- Authentication is handled securely using JWT.

### 💬 2. Start Chatting  
- After logging in, you'll be redirected to the chatbot interface.  
- Enter messages in the input box and interact with the AI assistant in real-time.  
- Messages are processed by the backend and routed to Google Gemini API for responses.

### 🕓 3. View Chat History  
- Click on **Chat History** to view your past conversations.  
- All chats are stored in MongoDB and are user-specific.

### ⚙️ 4. Customize Your Experience  
- Personalize your chatbot (e.g., name, theme settings).  
- Modify frontend behavior via Zustand state (e.g., dark mode toggle).

### 📊 5. Admin Panel (Optional Feature)  
- If enabled, navigate to the admin route (e.g., `/admin`).  
- View metrics such as active users, message count, and response accuracy.

### 🧪 6. Development Utilities  
- Use tools like `nodemon` (backend) and `eslint` (frontend) during development.  
- Helpful logs are printed in both backend and frontend consoles.

---

✅ You're now ready to use **Labmentix Chatbot**!  
Feel free to explore the code and expand the functionality as needed.


## 🚀 Deployment

### 🌐 Frontend Deployment
- Deploy the frontend on **[Vercel](https://vercel.com/)** for optimal performance and ease of CI/CD.
- Make sure to connect your GitHub repository and set the necessary environment variables in Vercel dashboard.

### 🖥️ Backend Deployment
- Deploy the backend on platforms like:
  - **[Render](https://render.com/)**
  - **[Heroku](https://heroku.com/)**
  - Or any other **Node.js-compatible hosting** service.
- Be sure to set environment variables (e.g., `MONGO_URI`, `JWT_SECRET`, `GEMINI_API_KEY`) in the platform settings.

### ⚙️ Configuration for Production
- Update all **API base URLs** in the frontend to match your deployed backend endpoint.
- Ensure `.env` variables are correctly configured in both frontend (if needed) and backend environments.

> 💡 Tip: Use `.env.production` for Vercel and production `.env` files for other services to separate dev and prod configurations.



The application is live at:  
🔗 [https://labmentix-frontend-chatbot-1.vercel.app](https://labmentix-frontend-chatbot-1.vercel.app)



## 📡 API Endpoints

### 🔐 Authentication Endpoints

- **POST `/callsignup`**  
  Registers a new user.  
  **Body:**  
  ```json
  { "name": "John", "email": "john@example.com", "password": "123456" }
  ```  
  **Response:** Success or error message.

- **POST `/callsignin`**  
  Logs in a user and returns a JWT token (also sets a cookie).  
  **Body:**  
  ```json
  { "email": "john@example.com", "password": "123456" }
  ```  
  **Response:** Success message, token, and user info.

- **POST `/callsignout`**  
  Logs out the user by clearing the authentication cookie.  
  **Response:** Success or error message.

---

### 💬 Chat & Message Endpoints

- **POST `/callapi`**  
  Sends a user message to the Gemini API and returns the AI's reply.  
  **Body:**  
  ```json
  { "mymsg": "Hello!" }
  ```  
  **Response:**  
  ```json
  { "success": true, "reply": "Hi there!" }
  ```

- **POST `/savemessage`**  
  Saves a chat message to the database.  
  **Body:**  
  ```json
  { "type": "user", "content": "Hi", "files": [], "timestamp": "2025-06-13T20:00:00Z" }
  ```  
  **Response:** Success or error message.

- **GET `/getchathistory`**  
  Retrieves all chat messages from the database, sorted by timestamp.  
  **Response:** Array of message objects.

---

### 🛠️ Utility Endpoints

- **GET `/`**  
  Returns a simple welcome message.

- **GET `/callhome`**  
  Returns a dashboard welcome message.

---

### 📌 Notes

- All endpoints use and return **JSON**.
- Authentication is managed using **JWT tokens and cookies**.
- The `/callapi` endpoint integrates with the **Gemini API** to generate AI-based responses.

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project with proper attribution.

See the [LICENSE](./LICENSE) file for more details.

## 🙌 Acknowledgements

This project helped us learn and implement:

- 🔐 **User Authentication** using JWT and secure session handling.
- ⚛️ **React & Next.js** architecture for building scalable frontend applications.
- 🎨 **Tailwind CSS** for designing a clean and responsive UI.
- 🌐 **WebSockets with Socket.io** for enabling real-time communication.
- 🤖 **AI Integration** using Google Gemini API (or OpenAI) to handle dynamic chatbot responses.
- 💾 **MongoDB** with Mongoose for schema-based database interaction.
- 🧠 **State Management** using Zustand for lightweight and reactive global state.
- ☁️ **Frontend Deployment on Vercel** and **Backend Deployment on Render**.
- 🔄 Handling of **.env variables**, API routes, and deployment configuration.

Thanks to open-source libraries and APIs that made this project possible!


## Glimpse of our WebPage:
![Screenshot (1381)](https://github.com/user-attachments/assets/e57cd24a-296c-456b-bc93-d175c1f23446)
![Screenshot (1382)](https://github.com/user-attachments/assets/0c73bd8c-0f43-46b3-af8b-7a02880c548a)
![Screenshot (1383)](https://github.com/user-attachments/assets/141f7f54-6352-4fb0-8362-71c3b19be4a0)
![Screenshot (1384)](https://github.com/user-attachments/assets/43eedc94-5d99-4091-9ab4-e5a9584fdc3c)



hello merge this
