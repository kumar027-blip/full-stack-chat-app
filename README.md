# Full Stack Chat App

A modern, real-time chat application built with a full stack approach, supporting multiple users, authentication, and rich messaging features. The project demonstrates best practices in full stack development, combining a robust backend with an interactive frontend UI.

## Features

- **User Authentication**: Secure sign up, login, and logout functionality.
- **Real-Time Messaging**: Send and receive messages instantly using WebSockets.
- **Multiple Chat Rooms**: Create and join different chat rooms.
- **User Presence**: See who is online and active in chats.
- **Responsive Design**: Works seamlessly on desktops and mobile devices.
- **Message History**: View previous messages in each room.
- **Modern UI**: Clean and intuitive interface.

## Tech Stack

- **Frontend**: React.js, Redux (if used), TailwindCSS or Material-UI
- **Backend**: Node.js, Express.js
- **WebSockets**: Socket.io for real-time communication
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Tokens), bcrypt for password hashing
- **Deployment**: Docker, Heroku or Vercel (specify if deployed)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Docker (optional, for containerization)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kumar027-blip/full-stack-chat-app.git
   cd full-stack-chat-app
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in both `server` and `client` directories.
   - Example content for `server/.env`:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - For `client/.env`, add any necessary React environment variables (e.g., `REACT_APP_API_URL`).


## Usage

- Register a new account or log in with existing credentials.
- Join a chat room or create a new one.
- Start messaging in real-time with other users.
  

## Contributing

Contributions are welcome! Please open issues and submit pull requests for improvements or new features.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [TailwindCSS](https://tailwindcss.com/) or [Material-UI](https://mui.com/)
