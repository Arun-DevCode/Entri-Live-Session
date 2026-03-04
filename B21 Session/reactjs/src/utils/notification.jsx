import { toast } from "react-hot-toast";

async function useNotification(calls) {
  toast.promise(
    calls(), // 👈 pass the promise here
    {
      loading: "Registering user...",
      success: "User registered successfully!",
      error: "Error occurred. Please try again later.",
    }
  );
}

export default useNotification;
