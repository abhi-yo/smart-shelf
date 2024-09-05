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
- 🧑‍💼 **Admin Dashboard**: A user-friendly interface for managing stock and viewing reports.
- 📡 **IoT Integration**: Seamless integration with RFID sensors for real-time updates.

## 🔍 RFID Integration in IoT

In the **Smart Shelf** project, **RFID (Radio Frequency Identification)** tags are used as a core component of the IoT integration. RFID tags are small devices embedded with unique identifiers that can be attached to products on the shelf. These tags are read by RFID sensors, which are part of the Smart Shelf's infrastructure, allowing for real-time tracking and monitoring of inventory.

### 📡 How It Works:

1. **RFID Tags**: Each item on the shelf is equipped with an RFID tag. These tags transmit data via radio waves to the RFID readers.
  
2. **RFID Readers**: Placed on or near the shelves, these readers capture data from the RFID tags, such as product ID, location, and quantity. This allows the system to keep an accurate count of items on the shelf without manual input.

3. **Backend Processing**: The data from the RFID readers is processed by the Node.js backend, which stores it in a MongoDB database. This information is used to monitor stock levels and trigger automated alerts when items need restocking.

4. **Real-time Monitoring**: The RFID system provides real-time insights into inventory levels, ensuring that the web app displays the most current stock status.

Using RFID technology makes inventory management seamless, efficient, and less error-prone by reducing the need for human intervention and providing real-time data on stock levels. This helps retail stores manage their shelves efficiently and avoid stockouts or overstocking.

## 🛠️ Technologies

- **Backend**: Node.js, Express.js 🟢
- **Database**: MongoDB 🍃
- **Frontend**: HTML, CSS, JavaScript 🖼️
- **IoT**: RFID sensor integration for real-time updates 📡
- **Deployment**: Docker 🐳 for containerized application deployment

## 🚧 Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/).
- Set up your RFID hardware (RFID tags, readers) integrated with the IoT network.
- Docker (optional for deployment).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/footcricket05/smart-shelf.git
   ```
2. Navigate to the project directory:
   ```bash
   cd smart-shelf
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Copy the `.env.example` file to `.env` and fill in the necessary values, such as the MongoDB connection string.
   ```bash
   cp .env.example .env
   ```
5. Start the MongoDB service and then start the backend server:
   ```bash
   npm start
   ```
6. Open your browser and visit `http://localhost:3000` to access the Smart Shelf app.

## 🧑‍💻 Usage

Once the application is running:

- **Admin Dashboard**: Use the web interface to manage inventory, view real-time stock levels, and check restocking alerts.
- **RFID Integration**: When items are removed or added to the shelf, the RFID readers will capture this data and automatically update the stock levels in the system.
- **Alerts**: Get real-time notifications when items are running low or need restocking.

## 📸 Screenshots

### Admin Dashboard
![Dashboard Screenshot](link-to-dashboard-screenshot)

### Real-Time Monitoring
![Monitoring Screenshot](link-to-monitoring-screenshot)

## 🤝 Contributing

We welcome contributions! 🎉 If you have suggestions for improvements or find any bugs, feel free to create a pull request or open an issue.

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please check out the [CONTRIBUTING.md](link-to-contributing-md) file for more details.

## 🧪 Testing

To run tests, execute the following command:
```bash
npm test
```
Unit tests are written to ensure functionality across the backend logic.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/footcricket05/smart-shelf/blob/main/LICENSE) for details.

