import admin from "firebase-admin";
import serviceAccount from "../../eduincluye-14601-firebase-adminsdk-fbsvc-c0acad3d39.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

export default db;
