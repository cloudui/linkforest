import { b as adminDB } from "../../../../chunks/admin.js";
import { r as redirect, e as error } from "../../../../chunks/index.js";
const load = async ({ locals, params }) => {
  const uid = locals.userID;
  if (!uid) {
    throw redirect(307, "/login");
  }
  const userDoc = await adminDB.collection("users").doc(uid).get();
  const { username, bio } = userDoc.data();
  if (params.username !== username) {
    throw error(401, "That username does not belong to you");
  }
  return {
    bio
  };
};
export {
  load
};
