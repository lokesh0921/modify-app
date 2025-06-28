
const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors")({origin: true});

exports.getSongs = onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send("Only POST requests allowed");
    }

    const {mood} = req.body;

    if (!mood) {
      return res.status(400).send("Mood is required");
    }

    const moodSongs = {
      happy: {
        songs: ["Happy by Pharrell", "Walking on Sunshine", "Good Vibes"],
        image:
          "https://firebasestorage.googleapis.com/v0/b/modify-app-11a81.appspot.com/o/happy.jpg?alt=media&token=3d934880-6cb6-4c90-a99e-6f21a3ddad7d",
      },
      sad: {
        songs: ["Someone Like You", "Fix You", "Let Her Go"],
        image:
          "https://firebasestorage.googleapis.com/v0/b/modify-app-11a81.appspot.com/o/sad.jpeg?alt=media&token=f0024bc5-ee72-4f83-a934-137f29b55d9f",
      },
      energetic: {
        songs: ["Eye of the Tiger", "Can’t Hold Us", "Titanium"],
        image:
          "https://firebasestorage.googleapis.com/v0/b/modify-app-11a81.appspot.com/o/energetic.jpg?alt=media&token=23166c5d-de9b-4fb5-91ab-85c732d87be2",
      },
      calm: {
        songs: ["Weightless", "Bloom", "Chillout Lounge"],
        image:
          "https://firebasestorage.googleapis.com/v0/b/modify-app-11a81.appspot.com/o/calm.jpg?alt=media&token=8f234675-b60e-4210-9e9b-bf5015dc8a1b",
      },
    };

    const result = moodSongs[mood.toLowerCase()];
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json({
        songs: ["No suggestions available"],
        image: null,
      });
    }
  });
});
