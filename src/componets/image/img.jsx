export const CustomImage=(props)=>{
    console.log(props)
    const {source,alternate,width=300,height="200"}=props
    
    return(
        <img src={source} alt={alternate} width={width} height={height} />
    )
}
// export const Image2=()=>{
//     return(
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLptopW9KxDeuWO-1QnDreTnLXpLrDQytbQ&s" width={100}/>
//     )
        
// }
