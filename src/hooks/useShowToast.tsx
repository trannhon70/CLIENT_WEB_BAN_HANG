import React from "react";
import { toast, ToastOptions } from "react-toastify";

function useShowToast() {
  const showToast = (
    type: "success" | "error" | "info" | "warning",
    message: string,
    options?: ToastOptions
  ) => {
    switch (type) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      case "warning":
        toast.warning(message, options);
        break;
      default:
        toast.info(message, options);
        break;
    }
  };

  return showToast;
}

export default useShowToast;
