


const List=(props)=>{
    const {Items}=props;
return(

  <ul>
    {
    Items.map((EachFruit,index)=>{
        return <li key={index}>{EachFruit}</li>
    })
}
  </ul>
  
  
)
}
export default List
export const OrderList=(prop)=>{
    const {Order}=prop;
    return(
        <ol>
       {
        Order.map((EachItem,index)=>{
            return( <li key={index}>{EachItem}</li>)
        })
       }
    </ol>
    )
}
// const Listitem=()=>{

//     return(
//         <>
//        <li>hello</li>
//        <li>vamshi</li>
//        <li>gopi</li>
//        <li>sunny</li>
//         </>
//     )
// }