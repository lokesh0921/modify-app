# 🎧 Moodify - Song Suggestion by Mood

Moodify is a simple full-stack cloud-based web app that suggests songs based on your current mood. It uses **Firebase Cloud Functions** for backend logic and **Firebase Hosting** to serve the frontend. Songs and associated images are fetched based on the selected mood. Images are stored in **Firebase Cloud Storage**.

---

## 🚀 Live Demo

Frontend: [https://modify-app-11a81.web.app](https://modify-app-11a81.web.app)  
Cloud Function URL: [getSongs](https://us-central1-modify-app-11a81.cloudfunctions.net/getSongs)

---

## 🛠️ Technologies & Cloud Services Used

| Feature                | Service Used                       |
|------------------------|------------------------------------|
| Web Hosting            | Firebase Hosting                   |
| Backend Logic (API)    | Firebase Cloud Functions           |
| CORS Handling          | CORS NPM Middleware                |
| Image Storage          | Firebase Cloud Storage (Bucket)    |

---

## 📦 Project Structure

```bash
cloudProj/
├── public/
│   └── index.html              # Frontend UI
├── functions/
│   ├── index.js                # Cloud Function logic
│   └── package.json            # Dependencies for functions
├── firebase.json               # Firebase project config
└── .firebaserc                 # Firebase project alias
