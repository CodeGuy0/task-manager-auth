# Scalable REST API with Authentication & Role-Based Access

This project demonstrates the design and implementation of a secure and scalable backend system along with a basic frontend UI to interact with the APIs.

The focus of this assignment is backend architecture, security, and API design, supported by a minimal frontend for testing and demonstration.

---

## 🚀 Project Overview

### Backend
- Secure user authentication using JWT
- Password hashing with bcrypt
- Role-based access control (User / Admin)
- CRUD APIs for a secondary entity (Tasks)
- API versioning
- Input validation & centralized error handling
- Modular and scalable project structure

### Frontend
- Simple UI to interact with backend APIs
- User registration & login
- JWT-protected dashboard
- CRUD operations on tasks
- API error & success message handling

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT
- bcrypt

### Frontend
- React.js
- JavaScript
- HTML
- CSS

---

## 🔐 Authentication & Authorization Flow

1. User registers with email and password
2. Password is securely hashed before storing
3. On login, JWT token is generated
4. JWT is required to access protected routes
5. Role-based middleware restricts admin-only access

---

## 📌 API Features

### Auth APIs
- User Registration
- User Login

### Protected APIs
- Create Task
- Read Tasks
- Update Task
- Delete Task

All protected routes require a valid JWT token.

---

## 🧪 API Testing

- All APIs tested using **Postman**
- Verified authentication, authorization, and CRUD flows
- Proper status codes and error responses validated

---

## 🗄 Database Design

- MongoDB Atlas used as database
- Collections:
  - Users
  - Tasks
- Schema designed to support scalability and future extensions

---

## 📈 Scalability Considerations

- Modular folder structure
- Stateless JWT authentication
- Easy integration of caching (Redis)
- Ready for microservices-based expansion
- Docker and load balancers can be added if needed

---

## 📸 Screenshots

### 🔹 Backend Running 

<img width="1125" height="240" alt="backend" src="https://github.com/user-attachments/assets/0a0b2312-44d3-4342-ba82-496959aad5a8" />


### 🔹 Postman API Testing

<img width="1181" height="928" alt="one" src="https://github.com/user-attachments/assets/60089a41-e570-498c-9933-bc15851c443e" />
<img width="1269" height="1018" alt="two" src="https://github.com/user-attachments/assets/1cccb9a6-f327-4d7c-a4b7-d671de456d2c" />
<img width="1273" height="1022" alt="three" src="https://github.com/user-attachments/assets/3b3c9d0b-8462-4b58-9f7f-5b2d7a2b232e" />
<img width="1278" height="1021" alt="four" src="https://github.com/user-attachments/assets/adab760b-8fe1-414b-bf07-1f7c01509e35" />
<img width="1274" height="1021" alt="five" src="https://github.com/user-attachments/assets/199e6edc-5ad9-4e9e-86ad-21331fcc62ec" />
<img width="1271" height="1020" alt="six" src="https://github.com/user-attachments/assets/b4685978-d72c-4456-a08f-eaada5e314a4" />



### 🔹 MongoDB Database
<img width="1919" height="867" alt="onedb" src="https://github.com/user-attachments/assets/5aeaba9f-9fd6-4cb8-92d5-52804ebfab93" />


### 🔹 Frontend UI
<img width="1163" height="380" alt="frontend" src="https://github.com/user-attachments/assets/f43fa89c-cf41-4824-bee3-c5e889cf239b" />

<img width="338" height="481" alt="Screenshot 2026-01-28 175559" src="https://github.com/user-attachments/assets/d6c5d6cd-40a4-40f5-a12e-89efb55b167d" />

---

## 📎 Notes

This project was built as part of an internship assignment to demonstrate backend development skills, security practices, API design, and frontend integration.
