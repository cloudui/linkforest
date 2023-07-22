import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "svelte-project-b5c21";
const FB_CLIENT_EMAIL = "firebase-adminsdk-ief7o@svelte-project-b5c21.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6LUBZr/iFj690\n+CAOBJW/C3GTF4uJfk/QBPfzvSeqdmSiXYB6S5JSeZ0AxewUJPwAjCWyD7MHcUxw\nqx3zJy43ExGobSqvX+SjDoGur9F2Jb2hV0uEKPqp9TSMkWi8o7ShBtc/PYFOGEAH\nkW45vg2HpK1s7iAezESm9Yde3EmS456irHW0BL3xKj+WyUE3tqaDJr+m+dr7KtlY\n5hqUeGPmH1vZTMIGOwM8Onvs3td2SiRn4+AsRlJpVwmsJPdXC+6cXk4LdccfLYVi\n4vB+FnCFrps2E8uCxhcyE50A4reBAiYO1+lqEJ1U1uRkNufuAb/5hiBgtYebNsAw\nUzzoC2A1AgMBAAECggEAG2koLUxESd3S1mTly0qPhZY4vZBc4fxv4c+pdgBmg6l0\nvZcIoHjZ7Tysif2Z+YlMdQQtVJ8NG85pk7kN6svc+Qzcr7CK9VEoB33OSBrouv1p\ngwSoQKgL59QLTZrnEccEhCTOsifrDsVxP+wAj43UziDHy97vablnbjF+IdBLIM4U\nNuounMmvoR0RhB/+212WJ5+wk+Go+pOusj+xfTrSjPvaVaeK5evhF0m4tsK5/hmW\nnhEcMOarqENYoZDptLX8PXWRhmnw81fhtmyS1D54dLZ0/O25hdIKmNrVR9NKhK2o\nZjtGDXEDZsd3sme5nuwvP5WAfNxY+pAsNwyKGMB/DQKBgQDawHt8cpsMiIEHGFzl\nBPBsOzyKOSP95GtE114NOfzC1bzk37z5atPF7pprgTsncyAOiAwYj3l8Ls41cUMc\n6HzfRtXHhAGGVUC5qQittuHVnjurHH1EFVqaKEpP0TRaOXF5SD2ASSwe0/HKlh9c\na7k0lyQCxSHKzPJSUEZLbhtQZwKBgQDZ4M0Ylvfc5hvYchKa/PvVYINypeO+QNX9\n49HDTokc4/XqvmZ1tgvrKHW/K0NOWv5y9ISY8ZkBqXzyIg+jk0J99SZ+MuL8Hkx+\nFmLPemqGSNIqnh6EJk0ZXPNMAFxY4E0EpnS6j3kZjr9p7ss2wD0vP1eUsmX5soL4\nH6cIawm5AwKBgDr9Vw+LNEaf9PN93Wcg+tik7MF1gUAxPcAVt9YnQgMkckjiEOrN\npQgmPNwqwFH2GLnydBiXcDJNyOvefDOqeioXxwSDk4mvKcInVCDMRYA+qGaPSzR1\n8bXKkaeOieievvvuwC79DHnPu89exlw87HfDHkHk+STgOaR640nqClGXAoGBAI6/\nZGCp+Lc35CKJinsVKQIB+91PpsjtvcZcTwCBIgBVsrccDBEvNtvZZFvdwnlB0NgM\nMBvsnmyiWQRjII/xWW0hAxlHycOZLlCl5hM9hzF34IqfkirO1VC6v4SZ7+ci/hL/\n5BafDZ6bEfobw/SZOv0LqRv5TiqstHZQdqVjS7l1AoGBAI48dKmJj3P7Uo1+W3zf\n6oQOJPfDwODwFV/x3ShZhf36AFoujS7bDVlaytqS867RBIjaqCMYZ+PWiPDBpoHq\nfo8D3Ypl4ha2NJqRuP9Xnt3EgjHShQc7GjlO9iaJgYtUR5Cwj3FAxKrBPVEmPs0Q\nBVZzwsKNwJPB6ChVqqhpfPHl\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
