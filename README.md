# 🏥 Priscripto – Doctor Appointment Booking & Management System

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![Express.js](https://img.shields.io/badge/Express.js-REST_API-black?logo=express)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)

## 📌 Project Overview

**Priscripto** is a full-stack doctor appointment booking and healthcare management web application developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

The platform simplifies appointment scheduling by providing a centralized system where patients can discover doctors, book appointments, manage their bookings, and make online payments.

It also includes dedicated dashboards for **Doctors** and **Administrators**, allowing them to efficiently manage appointments, patient information, doctor profiles, and healthcare services.

The project was developed as a hands-on full-stack learning project following the **GreatStack Doctor Appointment Booking System tutorial**, with practical experience in frontend development, backend APIs, authentication, database management, deployment, and payment gateway integration.

---

## 🌐 Live Demo

The application is deployed on **Vercel**.

| Application | Live URL |
|---|---|
| 👤 Patient Website | [Visit Priscripto](https://priscripto-frontend-nine.vercel.app) |
| 👨‍⚕️ Doctor Dashboard | [Doctor Login](https://priscripto-admin-sepia.vercel.app/) |
| 🛡️ Admin Dashboard | [Admin Login](https://priscripto-admin-sepia.vercel.app/) |

**Patient Website:**  
https://priscripto-frontend-nine.vercel.app

**Admin & Doctor Dashboard:**  
https://priscripto-admin-sepia.vercel.app/

> **Note:** The Doctor and Admin dashboards share the same deployed application but have separate authentication and role-based functionality.

---

## ✨ Key Features

### 👤 1. Patient Module

The patient-facing application provides a responsive interface for searching doctors and scheduling medical appointments.

**Authentication & Profile Management**
- Patient registration and login
- JWT-based user authentication
- Secure password storage using hashing
- View and update personal profile information
- Upload and update profile pictures

**Doctor Discovery**
- Browse registered doctors
- Filter doctors based on medical specialization
- View doctor profiles, qualifications, experience, and consultation fees
- Check doctor availability

**Appointment Management**
- Select a doctor and preferred appointment date
- Choose from available time slots
- Book appointments online
- View previously booked appointments
- Cancel appointments
- Track appointment and payment status

**Online Payment**
- Payment gateway integration
- Online consultation fee payment
- Payment verification through backend APIs
- Payment status tracking

### 👨‍⚕️ 2. Doctor Module

The doctor dashboard provides tools for managing appointments and professional profiles.

**Doctor Dashboard**
- Secure doctor login
- View total appointments
- Track consultation earnings
- View patient details
- Monitor completed and pending appointments

**Appointment Management**
- View booked appointments
- Mark appointments as completed
- Cancel appointments when necessary
- Track appointment status

**Profile Management**
- View professional information
- Update consultation fees
- Update profile details
- Manage availability status

### 🛡️ 3. Admin Module

The administration dashboard enables centralized management of the healthcare platform.

**Admin Dashboard**
- Secure administrator authentication
- View total doctors
- View registered patients
- Monitor appointment statistics
- View recent bookings

**Doctor Management**
- Register new doctors
- Upload doctor profile images
- Add specialization, qualifications, and experience
- Set consultation fees
- View registered doctors
- Manage doctor availability

**Appointment Management**
- View appointments across the platform
- Monitor patient and doctor booking information
- Cancel appointments when required
- Track appointment status

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JSON Web Tokens (JWT), bcrypt |
| API Communication | Axios, REST APIs |
| Routing | React Router DOM |
| File Uploads | Multer |
| Image Storage | Cloudinary |
| Payment Gateway | Razorpay |
| Notifications | React Toastify |
| Deployment | Vercel |
| Version Control | Git, GitHub |

---

## 🏗️ System Architecture

Priscripto follows a **client-server architecture** with three major components:

1. Patient frontend
2. Admin and Doctor frontend
3. Backend REST API server

### Architecture Diagram

```text
                 ┌─────────────────────┐
                 │       USERS         │
                 │ Patient/Doctor/Admin│
                 └──────────┬──────────┘
                            │
             ┌──────────────┴───────────────┐
             │                              │
             ▼                              ▼
  ┌─────────────────────┐       ┌─────────────────────┐
  │  Patient Frontend   │       │ Admin/Doctor Panel  │
  │                     │       │                     │
  │ React + Tailwind CSS│       │ React + Tailwind CSS│
  │                     │       │                     │
  │ - Browse Doctors    │       │ - Admin Dashboard   │
  │ - Book Appointment  │       │ - Doctor Dashboard  │
  │ - Manage Bookings   │       │ - Manage Doctors    │
  │ - Online Payment    │       │ - Manage Bookings   │
  └──────────┬──────────┘       └──────────┬──────────┘
             │                             │
             └──────────────┬──────────────┘
                            │
                     HTTPS / Axios
                            │
                            ▼
                 ┌─────────────────────┐
                 │    Backend API      │
                 │  Node.js + Express  │
                 │                     │
                 │ - Authentication    │
                 │ - Authorization     │
                 │ - Appointment APIs  │
                 │ - Doctor APIs       │
                 │ - Payment APIs      │
                 └──────────┬──────────┘
                            │
            ┌───────────────┼──────────────┐
            │               │              │
            ▼               ▼              ▼
      ┌──────────┐   ┌───────────┐   ┌───────────┐
      │ MongoDB  │   │ Cloudinary│   │ Razorpay  │
      │ Database │   │  Storage  │   │  Payment  │
      └──────────┘   └───────────┘   └───────────┘
```

### Architecture Explanation

- **React Frontend:** Provides interactive interfaces for patients, doctors, and administrators.
- **Express Backend:** Handles incoming HTTP requests, validation, authentication, and business logic.
- **MongoDB Database:** Stores patient details, doctor information, and appointment records.
- **JWT Authentication:** Protects private APIs and enables role-based authorization.
- **Cloudinary:** Stores uploaded profile images.
- **Razorpay:** Provides payment processing capabilities for appointment fees.

---

## 📁 Project Folder Structure

The project is organized into three independent applications.

```text
Priscripto/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

### Directory Responsibilities

| Directory | Responsibility |
|---|---|
| `frontend/` | Patient website and appointment booking interface |
| `admin/` | Admin and Doctor dashboards |
| `backend/config/` | Database and external service configurations |
| `backend/controllers/` | Application business logic |
| `backend/middleware/` | Authentication and request processing |
| `backend/models/` | MongoDB/Mongoose schemas |
| `backend/routes/` | API endpoint definitions |

---

## 🔐 Authentication & Authorization

Priscripto implements role-based authentication for three user categories.

| Role | Access |
|---|---|
| Patient | Profile management, doctor discovery, appointment booking, online payment |
| Doctor | Assigned appointments, earnings dashboard, professional profile |
| Admin | Doctor management, platform-wide appointments, dashboard statistics |

### Authentication Workflow

```text
User submits login credentials
             │
             ▼
Backend receives login request
             │
             ▼
Validate credentials against database
             │
             ▼
Generate JWT upon successful login
             │
             ▼
Frontend receives authentication token
             │
             ▼
Token included in protected API requests
             │
             ▼
Authentication middleware verifies token
             │
             ▼
Role-based access granted or denied
```

Passwords are stored in hashed form rather than plaintext.

The backend validates authentication tokens before allowing access to protected operations.

---

## 📅 Appointment Booking Workflow

The appointment booking process follows the steps below:

```text
Patient logs into application
              │
              ▼
       Browse Doctors
              │
              ▼
      Select Specialization
              │
              ▼
        Select Doctor
              │
              ▼
   View Available Time Slots
              │
              ▼
      Choose Date & Time
              │
              ▼
       Book Appointment
              │
              ▼
   Save Appointment in MongoDB
              │
              ▼
   View Appointment in Dashboard
              │
              ▼
       Make Online Payment
              │
              ▼
     Verify Payment Status
              │
              ▼
     Appointment Management
```

### Appointment Availability

- Available booking slots are displayed for the selected doctor.
- Already reserved slots are excluded from new bookings.
- Appointment details are stored in MongoDB.
- Patients can review appointment information from their dashboards.
- Doctors and administrators can manage booking statuses.

---

## 💳 Payment Gateway Integration

Priscripto includes Razorpay payment gateway integration for online appointment payments.

### Payment Workflow

1. Patient selects an existing appointment.
2. Frontend requests payment order creation from the backend.
3. Backend creates an order through Razorpay.
4. Frontend opens the Razorpay checkout interface.
5. Patient attempts payment using an available payment method.
6. Backend verifies the payment response.
7. Successful verification updates the appointment's payment status.

### Payment Security

- Secret API credentials remain on the backend.
- Payment requests are initiated using backend-generated orders.
- Payment verification is performed server-side.
- An appointment should be marked paid only after successful verification.

> **Note:** Payment processing requires properly configured Razorpay credentials. Test Mode should be used when running the project for development.

---

## ⚙️ Installation & Local Setup

Follow these steps to run Priscripto locally.

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git
- MongoDB Atlas account or local MongoDB
- Cloudinary account
- Razorpay account for payment integration

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

Replace the repository URL with your actual GitHub repository.

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Configure Backend Environment Variables

Create a `.env` file inside the `backend/` directory.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secure_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Environment variable names should match those referenced by your backend source code.

**Never commit actual API secrets, passwords, or database connection credentials to GitHub.**

### Step 4: Start the Backend

```bash
npm run server
```

Use `npm start` or the appropriate script if your backend has a different `package.json` configuration.

### Step 5: Install and Run Patient Frontend

Open a new terminal.

```bash
cd frontend
npm install
```

Create the frontend `.env` file.

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the application:

```bash
npm run dev
```

### Step 6: Install and Run Admin/Doctor Dashboard

Open another terminal.

```bash
cd admin
npm install
```

Create the admin `.env` file.

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the dashboard:

```bash
npm run dev
```

Vite typically uses port `5173` for the first frontend and another available port, such as `5174`, for the second.

### Step 7: Access the Application

Open the local URLs displayed by Vite in your terminal.

Make sure MongoDB, backend APIs, and environment variables are correctly configured before testing the application.

---

## 🌍 Deployment

The patient frontend and admin/doctor dashboard are deployed independently on Vercel.

### Patient Frontend

**Production URL:**  
https://priscripto-frontend-nine.vercel.app

### Admin & Doctor Dashboard

**Production URL:**  
https://priscripto-admin-sepia.vercel.app/

### Deployment Configuration

For each Vite application, the standard Vercel settings are:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

When deploying from a monorepo, select the appropriate root directory (`frontend` or `admin`) for each Vercel project.

Environment variables must be configured separately for each deployed application.

The backend API must also be deployed and accessible over HTTPS for the production frontends to communicate with it.

---

## 🧠 Technical Concepts Practiced

This project provided practical exposure to several full-stack development concepts.

### Frontend Development
- Reusable React components
- React Hooks (`useState`, `useEffect`, `useContext`)
- Client-side routing
- Form handling and validation
- Conditional rendering
- Responsive layouts with Tailwind CSS
- REST API integration using Axios

### Backend Development
- RESTful API development with Express.js
- Routing, controllers, and middleware
- Authentication and authorization
- Password hashing
- Centralized business logic
- Error handling
- Payment API integration

### Database Management
- Designing MongoDB document schemas
- Using Mongoose models
- CRUD operations
- Associating appointments with doctors and patients
- Querying and updating booking information

### Deployment & Integration
- Environment variable management
- Connecting frontend and backend services
- CORS configuration
- Cloud-based database connectivity
- Cloudinary image handling
- Vercel deployment

---

## 🚀 Future Improvements

Potential enhancements include:

- [ ] Email and SMS appointment reminders
- [ ] Search doctors by name and location
- [ ] Patient medical history management
- [ ] Doctor reviews and ratings
- [ ] Rescheduling booked appointments
- [ ] Real-time appointment notifications
- [ ] Automated appointment confirmation emails
- [ ] Advanced admin analytics
- [ ] Unit and integration testing
- [ ] Improved accessibility and performance
- [ ] Enhanced payment failure and refund handling
- [ ] Video consultation integration

---

## 🎓 Learning Outcomes

Through this project, I gained practical experience in building a multi-role full-stack web application.

Key learning outcomes include:

1. Understanding the end-to-end MERN Stack development workflow.
2. Connecting multiple React applications with a common backend API.
3. Implementing user authentication and role-based authorization.
4. Designing and managing MongoDB database schemas.
5. Developing appointment booking and management logic.
6. Integrating third-party services such as Cloudinary and Razorpay.
7. Handling asynchronous API requests and application state.
8. Deploying React applications to Vercel.
9. Understanding the organization and responsibilities of frontend, backend, and database layers.

---

## 🙏 Acknowledgements

This project was built by following the excellent **Full Stack Doctor Appointment Booking System Using MERN Stack** tutorial by **GreatStack**.

Special thanks to GreatStack for providing step-by-step guidance on MERN Stack development, appointment management, authentication, payment integration, and deployment.

**Original Tutorial:**  
[GreatStack – Full Stack Doctor Appointment Booking System](https://www.youtube.com/watch?v=eRTTlS0zaW8)

**GreatStack Website:**  
https://greatstack.dev/

This is an educational implementation developed to practice full-stack development skills. The original tutorial and project design are credited to GreatStack.

---

## 👨‍💻 Developer

Developed as a full-stack web development learning project.

**Project:** Priscripto – Doctor Appointment Booking & Management System

**Technology:** MERN Stack

**Learning Reference:** GreatStack

**Deployment:** Vercel

---

## ⭐ Support

If you find this project useful, consider giving the repository a star ⭐.

**Built with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.**
