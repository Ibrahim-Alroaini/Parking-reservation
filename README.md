# Parking Reservation System

A full-stack web application for managing parking spaces, built with React, Node.js, Express, and MongoDB.

## Features

### For Drivers
- Registration and vehicle management
- Search for available parking spaces
- Book and pay for parking spots
- Track booking history and payments

### For Parking Managers
- Manage parking spaces
- Set pricing and availability
- Track revenue and bookings
- Monitor space utilization

## Tech Stack

- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT
- Payment Processing: Stripe

## Setup Instructions

1. Install dependencies:
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

2. Environment Setup:
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PORT=5000
   ```

3. Start the application:
   ```bash
   # Start backend server
   cd backend
   npm start

   # In a new terminal, start frontend
   npm start
   ```

## API Endpoints

### Authentication
- POST /api/users/register - Register new user
- POST /api/users/login - User login
- GET /api/users/profile - Get user profile

### Parking Spaces
- GET /api/parking - Get all parking spaces
- POST /api/parking - Create parking space (Manager only)
- PUT /api/parking/:id - Update parking space (Manager only)
- GET /api/parking/manager - Get manager's parking spaces

### Bookings
- POST /api/bookings - Create booking
- GET /api/bookings - Get user bookings
- GET /api/bookings/manager - Get manager's parking space bookings
- PUT /api/bookings/:id - Update booking status

## Security

- JWT-based authentication
- Role-based access control
- Secure payment processing with Stripe
- Password hashing with bcrypt

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
