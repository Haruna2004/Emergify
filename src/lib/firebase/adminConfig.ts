import admin from "firebase-admin";

const serviceAccountKey = {
  type: process.env.FIREBASE_TYPE as string,
  project_id: process.env.FIREBASE_PROJECT_ID as string,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID as string,
  private_key: process.env.FIREBASE_PRIVATE_KEY as string,
  client_email: process.env.FIREBASE_CLIENT_EMAIL as string,
  client_id: process.env.FIREBASE_CLIENT_ID as string,
  auth_uri: process.env.FIREBASE_AUTH_URI as string,
  token_uri: process.env.FIREBASE_TOKEN_URI as string,
  auth_provider_x509_cert_url: process.env
    .FIREBASE_AUTH_PROVIDER_CERT_URL as string,
  client_x509_cert_url: process.env.FIREBASE_CERT_URL as string,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN as string,
};

// const serviceAccount = JSON.parse(
//   process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string,
// );

// if (!admin.apps.length) {
//     admin.initializeApp({
//       credential: admin.credential.cert(JSON.stringify(serviceAccountKey)),
//     });
//   }

const firebaseAdmin = admin.apps.length
  ? admin.app()
  : admin.initializeApp({
      credential: admin.credential.cert(JSON.stringify(serviceAccountKey)),
    });

const serverDb = admin.firestore();

export { serverDb, firebaseAdmin };
