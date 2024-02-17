import axios from "axios";
import { getToken } from "../backend/utils/getToken";

export const addPostCommentService = async (postId, commentData) => {
  try {
    const encodedToken = getToken();
    const response = await axios.post(
      `/api/comments/add/${postId}`,
      { commentData },
      { headers: { authorization: encodedToken } }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};