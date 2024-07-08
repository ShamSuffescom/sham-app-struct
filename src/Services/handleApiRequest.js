import { logout } from "../Redux/auth/slice"
import store from "../Redux/store";
import { errorMsg } from "../Helpers/toastMessage";

export async function handleApiRequest(
  method,
  request = "",
  showErrorToast = true,
  onError = () => {}
) {
  try {
    const response = await store.dispatch(method(request)).unwrap();
    
    if (response?.status && response?.status === "success") {
      // console.log('ssss', response);
      return response;
      // return JSON.stringify(response);
    } else {
      onError();
      showErrorToast && errorMsg(JSON.stringify(response.error));
      return {};
    }
  } catch (error) {
    console.log("api error", error.status, error);

    if (error.status === "Unauthenticated.") {
      const response = store.dispatch(logout());
    }
    showErrorToast && errorMsg(error?.status);
    return {};
  }
}
