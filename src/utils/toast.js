import { toast } from "react-toastify";

export const showErrorMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    pauseOnHover: true,
  });
};

export const showSuccessMessage = (message) => {
  toast.dark(message, {
    position: "top-right",
    pauseOnHover: true,
  });
};
