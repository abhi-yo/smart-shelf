# 🛒 Smart Shelf - Inventory Management System

Welcome to the **Smart Shelf** project! 📦 This system helps automate and streamline inventory management using IoT technologies and real-time stock monitoring.

## 🗂️ Project Structure

```bash
smart-shelf/
├── config/        # 📑 Configuration files for the server and database
├── controllers/   # 🎮 Handles incoming requests and business logic
├── models/        # 🗄️ Database models and schemas
├── public/        # 🌐 Static files (HTML, CSS, JS) for the frontend
├── routes/        # 🛤️ API routes definitions
├── services/      # ⚙️ Services handling core logic
├── utils/         # 🧰 Utility functions
├── .gitignore     # 🚫 Files and directories to ignore in version control
├── LICENSE        # 📜 License for this project
├── package.json   # 📦 Project metadata and dependencies
├── package-lock.json # 🔒 Locked versions of project dependencies
└── server.js      # 🖥️ Main entry point for the backend server
```

## 🚀 Features

- 📊 **Real-time Stock Monitoring**: Track inventory levels in real-time using RFID tags.
- 🔄 **Automated Restocking Alerts**: Get notifications when stock levels are low.
- 🛒 **Inventory Management**: Manage products efficiently with an intuitive interface.
- ⚙️ **Backend Built with Node.js**: Scalable backend using Express.js.
- 🛡️ **Secure and Robust**: Built with security in mind, ensuring the integrity of inventory data.

## 🛠️ Technologies

- **Backend**: Node.js, Express.js 🟢
- **Database**: MongoDB 🍃
- **Frontend**: HTML, CSS, JavaScript 🖼️
- **IoT**: RFID sensor integration for real-time updates 📡

## 🚧 Getting Started

### Prerequisites

- Node.js installed
- MongoDB running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/footcricket05/smart-shelf.git
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (refer to `.env.example`).

4. Start the server:
   ```bash
   npm start
   ```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/footcricket05/smart-shelf/blob/main/LICENSE) for details.
