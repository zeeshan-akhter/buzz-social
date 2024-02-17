import axios from "axios";
import { avatarDb } from "../backend/utils/avatarDb";

export const userSignupService = async (signupData) => {
  try {
    const { username, password, firstName, lastName } = signupData;
    const response = await axios.post("/api/auth/signup", {
      username,
      password,
      firstName,
      lastName,
      background:
        "https://res.cloudinary.com/dkfqnzabv/image/upload/v1683230900/samples/landscapes/girl-urban-view.jpg",
      profileAvatar: avatarDb[Math.floor(Math.random() * avatarDb?.length)],
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
