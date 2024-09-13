# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
class details................and assignmets.
import List from "./componets/list/list.jsx"
import { OrderList } from "./componets/list/list.jsx"
import { Mainhead ,Secondhead} from "./componets/headings/head.jsx"
import { CustomImage } from "./componets/image/img.jsx"
// import { Table, } from "./componets/table/table.jsx"
import { Button } from "./componets/button/button.jsx"
import { Recipes } from "../data/recipe.js"
import Greeting from "./componets/greetings/greeting.jsx"
const App=()=>{
  // const ListImage=[{
  //   source:"https://images.cnbctv18.com/wp-content/uploads/2020/10/APJ-Abdul-Kalam.jpg",
  //   alternate:"bag1",
  //   width:100,
  //   height:100,
  // },
  // {
  //   source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLptopW9KxDeuWO-1QnDreTnLXpLrDQytbQ&s",
  //   alternate:"bag2",
  //   width:100,
  //   height:100,
  
  // },
  // {
  //   source:"https://images.cnbctv18.com/wp-content/uploads/2020/10/APJ-Abdul-Kalam.jpg",
  //   alternate:"bag1",
  //   width:100,
  //   height:100,
  // },]
 
  return(
    <>
    {
      [{name:"vamshi",role:"Full stack Devops"},{name:"gopi",role:"fronted Devops"},{name:"chintu",role:"back End devop"},].map(EachName=>{
        return(
          <>

          <Greeting text={`I am a ${EachName.role}`}>{EachName.name}</Greeting>
          <Button text="clike me" Onpress={()=>alert(`you clicked the ${EachName.name}`)}></Button>
          </>
        )
      })
    }
   {/* <Greeting>vamshi</Greeting> */}
    {/* <h1>hello</h1> */}
    {
      // Recipes.map((eachRecipe)=>{
      //   return(
      //   <div key={eachRecipe.id}>

      //   <Mainhead  Headings={eachRecipe.name}>
      //   <Greeting/>
      //   </Mainhead>
      //   <CustomImage source={eachRecipe.image} width={200} height={200}/>
      //   <Secondhead  Second="Instuctions to Follow"/>
      //   <List Items={eachRecipe.instructions}/>
      //   <Secondhead Second="Ingredients of the food"/>
      //   <OrderList Order={eachRecipe.ingredients}/>
      //   <Button text="BUY ME" />
      //   <h5>{eachRecipe.rating}</h5>
      //   {/* <OrderList Order={eachRecipe.ingredients}/> */}
      //   </div>
      //   )
        
          // <Mainhead Headings={eachRecipe.name}/>
      // })
    }
    {/* {
      ListImage.map((EachOne)=>{
        return <CustomImage source={EachOne.source} alternate={EachOne.alternate} width={EachOne.width} height={EachOne.height} />
      })
    } 
    <Button text="Login" Onpress={()=>{}} bgcolor="red" />
    <Button text="sign off" Onpress={()=>{}} bgcolor="yellow" />
    <Button text="sign off" Onpress={()=>{}} bgcolor="pink" />

      <Button/>
      <Mainhead Headings="name of the fruiets"/>
<List Items={["apple","banana","mango","orange"]}/>
<Mainhead Headings="Cricketers names"/>
<List Items={["Rohit shrama","Abhishek shrma","Virat Kohli","Head"]}></List>
<Mainhead Headings="Tollywood Heros names"></Mainhead>
<List Items={["Prabhas","Nani","Maheshbabu","NTR"]}></List> */}
    
  {/* <h1>this is version 1</h1>
    <Secondhead></Secondhead>
    <Image2></Image2>
    <Unorder></Unorder>
    <btn></btn> */}
    {/* <CustomImage source="   " alternate="bag1" width={100} height={100}/> */}
    {/* <CustomImage source="" alternate="bag1" width={100} height={160}/> */}

</>
  )
  
}
export default App
16th aug
------------------------------------------------
ternary operater in react...
if and else
const Login=({isAdmin=false})=>{
   if(isAdmin){
    return(
        <h3>Wellcome Admin</h3>
    )
   }
   else{
    return(
        <h3>Well come User</h3>
    )
   }
}
===========
ternary operater...
{
const Login=({isAdmin=false})=>{
//    if(isAdmin){
    return(
        <>
        {
            isAdmin?<h3>Wellcome Admin</h3>:<h3>Wellcome User</h3>
        }
        </>
    )
// }
}
}
date 20/8
-------------------
1.cards in react-bootstrap
//html to jsx converter....
-> ctrl+p is the switch to other
 const arr=[{
    name:"vamshi",
    role:"software developer",
    location:"Hyderabad",
  },{
  
  name:"gopi",
  role:"engineer",
  location:"vikarabad",
  },
  {
  name:"sunny",
  role:"engineer",
  location:"vikarabad",
  },
]

  return(
    <>
    
   {/* <Greeting text="vamhsi"/> */}
    <h2 className="card">This the bootstrap</h2>
    {/* <BootstrapCards title={"vamshi"} text={arr2}/> */}
    {/* {
      arr.map((data)=>{
        return <BootstrapCards title={data.name} text={data.role} role={data.location}/>
      })
    } */}
    <Firstcomponent/>
    </>
    date 21/8
    =-=-=-=-=-=------------------
    export const InfinityLoader=(props)=>{
    return(
        <InfinitySpin
  visible={true}
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  <!-- {...props} -->
  width="200"

  />
    )
        {/* <CustomDNALoader/> */}
    {
      arr.map(each=>{
        return <BootstrapCards text={each.name} role={each.role} image={each.image}>
        </BootstrapCards>
      })
    }
    ..................................
     const arr=[{
    name:"APJ Abdul Kalam",
    role:"President of India",
    location:"Hyderabad",
    image:"https://cdn.britannica.com/48/222648-050-F4D0A2D8/President-of-India-A-P-J-Abdul-Kalam-2007.jpg"
    
  },{
  
  name:"Swami Viveka Nanda",
  role:"Great Person",
  location:"vikarabad",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUPlWR5t-nw_VTDP-2SiF2ytsbpvCuSN5Eg&s"
  },
  {
  name:"Swami vevekananda",
  role:"Inspirational person",
  location:"vikarabad",
  image:"https://images.squarespace-cdn.com/content/v1/5caaad10e5f7d161a45a641b/1556740314152-RWG4HY45BQDH2G659ZBZ/vivekananda-reclining.jpg"
  },
  {
    name:"Swami vevekananda",
    role:"Inspirational person",
    location:"vikarabad",
    image:"https://images.squarespace-cdn.com/content/v1/5caaad10e5f7d161a45a641b/1556740314152-RWG4HY45BQDH2G659ZBZ/vivekananda-reclining.jpg"
    },
    {
      name:"Swami vevekananda",
      role:"Inspirational person",
      location:"vikarabad",
      image:"https://images.squarespace-cdn.com/content/v1/5caaad10e5f7d161a45a641b/1556740314152-RWG4HY45BQDH2G659ZBZ/vivekananda-reclining.jpg"
      },
      {
        name:"Swami vevekananda",
        role:"Inspirational person",
        location:"vikarabad",
        image:"https://images.squarespace-cdn.com/content/v1/5caaad10e5f7d161a45a641b/1556740314152-RWG4HY45BQDH2G659ZBZ/vivekananda-reclining.jpg"
        },
        {
          name:"Swami vevekananda",
          role:"Inspirational person",
          location:"vikarabad",
          image:"https://images.squarespace-cdn.com/content/v1/5caaad10e5f7d161a45a641b/1556740314152-RWG4HY45BQDH2G659ZBZ/vivekananda-reclining.jpg"
          },
]
------------------------------------
    {/* <Subscribe/>
    {/* <CustomBall/> */}
    {/* <CustomDNALoader/> */}

    {/* <CustomToast text={"click me"}></CustomToast> */}
    {/* <SuccessToast/> */}
     {/* <YoutubeButton/> */}
    <CustomToast text={"click here"}/> 
    <BallTriangle color={"red"}/>
    <InfinityLoader color={"red"}/> */}

