const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"UBNtv+icwoFUCGZNp0Dz1jrwEZT+hk6ypGuVdes+LWI="},"public":{"type":"Buffer","data":"OjTcg6250N047N38iH22JJ2EqgpRD51RVy+1TNf+5Ak="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2ChmTgsveZNWCqC83HScmUdKgOQImGbjQ4BIobhQ2GM="},"public":{"type":"Buffer","data":"PLvGnyiuVg8mGNau/EUo6VcIAji+BnPS4Gfjk/fHojc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aAegrX6tO8dAZ/417TTXBYXw6v+WpsMZqqFvQnx5ZXc="},"public":{"type":"Buffer","data":"NBX2Z1oDDOxrWUQDQ0jTwff7/Pp7P21zFxD54Kr3Sy4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"EB5pwkWTxksYpb4tqRnvmLkJrRH3lYLPQsq9DW8NzmU="},"public":{"type":"Buffer","data":"/ecwYcThcVRZUaSGIGpI3IIxI2frrBbMOTO8j9YNWUs="}},"signature":{"type":"Buffer","data":"BffDQ0oDCPeEm6jJ4JbJxEemJA4w5PJIkqfVu+/M2N1uu3elVoSsJk8b5Tdq4xR+bpXAhFt7/ksS2qIDCO5Wgw=="},"keyId":1},"registrationId":35,"advSecretKey":"CEK/zEThueee9hDQ7BvFCMNexT+zIl0X5QNlAWoAfYI=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"_ruBfunPQrm-YfhCiP13JA","phoneId":"fcb7fd0b-c50c-4f96-af30-8ae54e9c1e62","identityId":{"type":"Buffer","data":"+3faFPD7xF8yx0PTcuOu/ZfhyaY="},"registered":true,"backupToken":{"type":"Buffer","data":"Ynynu3fjhnlBAO8TB8y+t2vldv8="},"registration":{},"pairingCode":"36DX28DV","me":{"id":"2348102811896:48@s.whatsapp.net"},"account":{"details":"COmSlfQGEKe9or8GGAEgACgA","accountSignatureKey":"32572qpaJ9C+6cGS1nYRpbI0aZM47eCktwDgdqgHDQk=","accountSignature":"K7k4pHGKF2F8qDdlNpjYj/evMbxzViKxvle/mIiPflczzlGVGltvhcJtUDgG6K1DJwaVS6SIKfEZMCDUrqopDQ==","deviceSignature":"LZNeTSPNlbJhOybRAvi9RRM3Sqjaduir5tqHaYqXjlZPQhcDITINXKr/XZISzPOtoy1tDOVzws8MpKAYBzjYjg=="},"signalIdentities":[{"identifier":{"name":"2348102811896:48@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bd9ue9qqWifQvunBktZ2EaWyNGmTOO3gpLcA4HaoBw0J"}}],"platform":"android","lastAccountSyncTimestamp":1743298228}",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "2348102811896",
  "OWNER_NAME": process.env.OWNER_NAME || "Wilson",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
