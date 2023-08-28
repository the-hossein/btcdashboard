import { toast, ToastOptions } from "react-toastify"
import { StatusEnumToast } from "../../viewModel/enums/StatusToastEnum";

const options: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}



export const ShowToast = (status: StatusEnumToast, message: string): void => {
    toast[status](message, options)
}