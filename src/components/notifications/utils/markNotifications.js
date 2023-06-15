import axios from "../../../redux/app/customAxios";

const markSingleNotification = async (id) => {
  await axios.patch(`/notifications/${id}`);
};

const markAllNotifications = async () => {
  await axios.patch('/notifications');
};

export {markAllNotifications, markSingleNotification};
