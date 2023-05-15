import { data } from "autoprefixer";
import axiosInstance from "../utils/Api";

const USER_URL = "/users";
const token = localStorage.getItem("token") || "";

export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get(`${USER_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.userProfile);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const response = await axiosInstance.put(`${USER_URL}/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.userProfile;
  } catch (error) {
    console.error("Error updating user profile:", error.response?.data?.message || error.message);
  }
};
