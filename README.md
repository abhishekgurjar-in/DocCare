

# Doc Care - Online Doctor Appointment Booking System

Doc Care is an online platform that allows users to book appointments with healthcare professionals in remote areas. This web application consists of a front-end built with **React** and **Vite**, while the backend is powered by **Firebase** for data storage and authentication.

## Features
- **User Authentication**: Sign up, login, and manage accounts.
- **Appointment Booking**: Easily book appointments with doctors.
- **Appointment History**: View past appointments and their details.
- **User Profile**: Update and manage your personal details.

## Technologies Used
- **Frontend**: React, Vite
- **Backend**: Firebase (Authentication, Firestore Database)
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting (for deploying the frontend)



## Setup

### 1. Clone the repository

```bash
git clone https://github.com/abhishekboadgurjar/doc-care.git
cd doc-care
```

### 2. Install dependencies

Ensure you have **Node.js** and **npm** installed, then run the following command:

```bash
npm install
```

### 3. Firebase Configuration

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Set up **Authentication** (email/password, etc.).
- Set up **Firestore Database**.
- Obtain your Firebase configuration and add it to the `src/services/firebase.js` file.

```js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 4. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the application in action.

### 5. Firebase Hosting (Optional)

If you'd like to deploy your app to Firebase Hosting:

- Install Firebase CLI globally if not already installed:

  ```bash
  npm install -g firebase-tools
  ```

- Login to Firebase:

  ```bash
  firebase login
  ```

- Initialize Firebase Hosting:

  ```bash
  firebase init
  ```

- Deploy to Firebase Hosting:

  ```bash
  firebase deploy
  ```

Your app will be live on the Firebase Hosting URL.

## Contributing

We welcome contributions! Feel free to fork the repository and create a pull request for any improvements.



## Author
**Abhishek Gurjar** is a dedicated web developer passionate about creating practical and functional web applications. Check out more of his projects on [GitHub](https://github.com/abhishekboadgurjar).




---

