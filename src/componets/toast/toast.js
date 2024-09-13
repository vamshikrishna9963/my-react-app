import { ToastContainer, toast } from 'react-toastify';



export const SuccessToast=(message,position)=>{
    toast.success(message,{
        position:position,
    });
};
export const FailToast=(message,position)=>{
    toast.error(message,{
        position:position,
    });
};












 {/* <button onClick={()=>SuccessToast("hello im clicked")}> click</button>
    <button onClick={()=>FailToast("sorry try again")}>click here</button>
        <CustomToast text='click me'></CustomToast> */}
{/* <Button Onpress={click}/>  */}
    {/* <AddCard/> */}
    {/* <FakeStore/> */}
{/* <Firstcomponent /> */}