import FakeStore from "../fake-catagiry/fakestore"
import BootstrapCards from "./custom-card"



const Firstcomponent=({image,title,content})=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        

        <FakeStore/>
        {/* <h3>Column 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
        </p> */}
        {/* <BootstrapCards text={"vamshi"} title={""} role={"hyderabad"}/> */}
      </div>
     
    </div>
  </div>
</>

    )
}
export default Firstcomponent


















{/* <div className="col-sm-4"> */}
{/* <BootstrapCards text={"vamshi"} title={"software Developer"} role={"hyderabad"}/> */}
  
// </div>
{/* <div className="col-sm-4">
<BootstrapCards text={"vamshi"} title={"software Developer"} role={"hyderabad"}/>
 
</div> */}