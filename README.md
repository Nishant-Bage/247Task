Project Overview

This is a React application demonstrating:
	•	User authentication with JWT using DummyJSON API.
	•	Todo CRUD operations (create, read, update, delete).
	•	Idle logout feature with a 10-minute inactivity timer and 60-second warning modal.
	•	Tailwind CSS for responsive, modern UI.
	•	React Router for page navigation.
	•	React Context for managing authentication state.

Folder Structure
src/
 ├─ api/
 │    ├─ auth.js           // Login API
 │    └─ todos.js          // CRUD APIs for todos
 ├─ components/
 │    ├─ TodoItem.jsx      // Single todo row
 │    ├─ TodoForm.jsx      // Add new todo form
 │    └─ IdleLogoutModal.jsx  // Idle logout modal
 ├─ context/
 │    └─ AuthContext.jsx   // Login, logout, token storage
 ├─ hooks/
 │    └─ useIdleTimer.jsx  // Tracks inactivity and countdown
 ├─ pages/
 │    ├─ LoginPage.jsx
 │    └─ HomePage.jsx
 ├─ App.jsx
 ├─ index.js
 └─ index.css

 Features

1. Authentication
	•	Users can login with DummyJSON credentials.
	•	JWT token stored in localStorage and AuthContext.
	•	Redirects to HomePage after login.

2. Todo CRUD
	•	View todos.
	•	Add new todos.
	•	Edit todos inline.
	•	Mark todos complete/incomplete.
	•	Delete todos.

3. Idle Logout
	•	Tracks mouse movement, key presses, clicks.
	•	Shows a 60-second countdown modal after 10 minutes of inactivity.
	•	Modal has Stay Logged In (resets timer) and Logout buttons.
	•	Activity during countdown resets timer automatically.

4. Styling
	•	Tailwind CSS for responsive, modern UI.
	•	Login and HomePage are fully styled and responsive.


Installation
	1.	Clone the repository:
        git repo
        cd <your-project-folder>
    
    2.	Install dependencies:
        imp i
    
    3.	Start the development server:
        npm start
    
    4.	Login with demo credentials:
        username: emilys
        password: emilyspass


Notes
	•	All API calls use Fetch API.
	•	JWT token is sent in Authorization header for todos.
	•	Idle logout is implemented globally via useIdleTimer hook.
	•	Modal ensures user can stay logged in or logout immediately.
