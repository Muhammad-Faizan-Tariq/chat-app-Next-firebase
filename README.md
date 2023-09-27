This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next.js Chat Application

This is a chat application built with Next.js, using the following technologies:

- **Next.js** - A React framework for building efficient, server-rendered web applications. Next.js simplifies the development process, offering features like server-side rendering, routing, and code splitting out of the box.

- **React Context API** - Used for state management within the application. The React Context API allows for efficient sharing of state data between components, crucial for real-time chat applications.

- **Tailwind CSS** - A utility-first CSS framework for styling the application. Tailwind CSS provides a flexible and rapid styling approach, enabling you to create a polished user interface.

- **Firebase** - A comprehensive platform providing authentication, Firestore database for real-time data storage, and cloud storage for media assets. Firebase simplifies the backend development process, making it easy to implement user authentication, real-time chat functionality, and store chat history and media securely.

- **Git/GitHub** - Version control system and platform for collaborative development. Git allows you to track changes in your codebase, collaborate with team members, and manage your project's history.

- **Vercel** - A platform for deploying web applications. Vercel streamlines the deployment process, providing hosting and continuous integration for your Next.js chat application.


## Key Feature

- 🔐 Implement User Login
- 📝 Enable New User Registration
- 🔄 Implement Password Reset
- 🖼️ Customize User Profiles
- 🟢 Track User Online/Offline Status
- 🔍 Find and Connect with Users
- 💬 Enable One-to-One Chat
- ✍️ Add Real-time Typing Indicator
- 😄 Allow Emojis and Image Attachments
- 🗑️ Implement Delete Message
- 🚫 Enable Message Deletion for Everyone
- ✏️ Edit Messages
- 🚫🔓 Implement User Blocking/Unblocking
- 🗂️ Organize Conversations with Delete/Clear Chat

## Project Dependencies

Below is a list of the project's dependencies along with brief descriptions:

- **emoji-picker-react** (^4.4.10) - React component for emoji selection.
- **firebase** (^10.1.0) - Platform for web and mobile app development.
- **react-click-away-listener** (^2.2.3) - React component for click detection outside elements.
- **react-icons** (^4.10.1) - Library of SVG icons for React.
- **react-moment** (^1.1.3) - Wrapper for Moment.js for handling dates and times in React.
- **react-simple-image-viewer** (^1.2.2) - Simple image viewer component for React.
- **react-toastify** (^9.1.3) - Library for displaying toast notifications in React.
- **tailwindcss** (3.3.3) - CSS framework for responsive web designs.
- **uuid** (^9.0.0) - Package for generating and managing UUIDs (Universally Unique Identifiers).

You can install these dependencies using npm with the command `npm install`. Refer to each package's documentation for more details on usage.

## About Next.js and Firebase Chat Application

This chat application leverages the power of Next.js to create a highly performant and SEO-friendly chat platform. With server-side rendering and optimized routing, it ensures a smooth user experience.

Firebase, on the other hand, provides essential backend functionality, including user authentication, real-time database updates, and secure storage for chat messages and media. With Firebase's real-time capabilities, users can enjoy seamless, instant messaging.

By combining Next.js and Firebase, this chat application offers a modern, robust, and scalable solution for building real-time chat experiences on the web.

## Getting Started

To start using this chat application, follow these steps:

1. Clone this repository.
2. Install the project dependencies using npm: `npm install`.
3. Configure your Firebase credentials for authentication and Firestore in the Firebase console.
4. Set up Firebase authentication, Firestore, and storage rules to secure your data.
5. Run the application: `npm run dev`.
6. Start chatting and enjoy your Next.js chat experience!

Make sure to refer to the documentation for each dependency and Firebase for more information on usage and configuration.

# Firebase Configuration

To set up Firebase for this chat application, you'll need to create a Firebase project and configure it with your credentials. Replace the placeholders with your actual Firebase project credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

