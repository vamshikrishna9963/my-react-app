import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CustomToast=({message,text})=>{
    const notify=()=>{
        // toast("hello")
    toast.success("sucess notification!", {
        position: "top-right"
      });
      // toast.error("Error Notification !", {
      //   position: "top-right"
      // });
    }
   
    return(
        <div>
        <button onClick={notify}>{text}</button>
        <ToastContainer />
      </div>
    )
}
// export default CustomToast