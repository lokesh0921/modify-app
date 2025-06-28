
# 🎧 Moodify - Song Suggestion by Mood

Moodify is a simple full-stack cloud-based web app that suggests songs based on your current mood. It uses **Firebase Cloud Functions** for backend logic and **Firebase Hosting** to serve the frontend. Songs and associated images are fetched based on the selected mood. Images are stored in **Firebase Cloud Storage**.

---

🛠️ How Moodify Works – In Simple Steps
- 🎨 User Interface: User opens the website and sees mood options (Happy, Sad, Calm, Energetic).
- 🖱️ Mood Selection: User clicks on a mood button (e.g., 😊 Happy).
- 📡 API Call: A POST request is sent to a Firebase Cloud Function with the selected mood in the request body.
- 🧠 Function Logic: The Cloud Function processes the mood, picks matching songs and an image from a pre-defined list.
- 🖼️ Image & Songs: The function responds with:
  - A list of song names
  - A public image URL from Firebase Cloud Storage
- 📲 Display Results: The frontend receives the response and shows the songs and mood image on the page.
- 🌐 Hosting: Everything is hosted and served via Firebase Hosting.

---

## 🚀 Live Demo

Frontend: [https://modify-app-11a81.web.app](https://modify-app-11a81.web.app)  
Cloud Function URL: [getSongs](https://us-central1-modify-app-11a81.cloudfunctions.net/getSongs)

---

## 🔧 Services Used

| 🔢 No. | Service                   | Role / Purpose                                                       |
|-------|----------------------------|----------------------------------------------------------------------|
| 1     | Cloud Functions            | Serverless backend that processes mood input and returns results     |
| 2     | Cloud Run                  | Executes containerized Cloud Functions                               |
| 3     | Cloud Build                | Builds container image for the deployed function                     |
| 4     | Artifact Registry          | Stores the container image used by Cloud Run                         |
| 5     | Firebase Hosting           | Hosts the frontend (HTML, CSS, JS)                                   |
| 6     | App Engine (behind Hosting)| Infrastructure layer supporting Firebase Hosting                     |
| 7     | Cloud Storage              | Stores and serves mood-related images                                |
| 8     | Cloud Logging              | Captures logs and errors for Cloud Functions                         |

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
```

---
# ⚠️ Note:                                                                
##  The live demo is currently unavailable because my Google Cloud free trial has ended. Continuing service requires upgrading to a paid plan, which incurs costs. I apologize for the inconvenience and thank you for your understanding.

![GCP Trial Ended Screenshot](https://raw.githubusercontent.com/lokesh0921/modify-app/main/img.png)
