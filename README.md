# Smart Shelf - RFID Inventory System

Real-time inventory management using RFID technology with Node.js backend and MongoDB.

## Key Features

- Real-time RFID stock tracking
- Docker containerization
- MongoDB integration

## Technologies

- Node.js/Express
- MongoDB
- Serialport (RFID integration)
- Docker

## Quick Start

```bash
# With Docker (recommended):
docker-compose up

# Without Docker:
npm install
npm start
```

Set environment variables in `.env`:
```ini
MONGODB_URI=mongodb://localhost/smartshelf
SERIAL_PORT=COM3  # Your RFID device port
BAUD_RATE=9600
```

## Development

```bash
npm test  # Run tests
```

[Contributing Guidelines](CONTRIBUTING.md) | [License](LICENSE)

