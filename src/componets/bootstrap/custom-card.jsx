import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CustomDNALoader, InfinityLoader } from '../loder/loader';
// import CustomToast from '../toast/toast';
import { InstaHeart } from '../heart/heart';
import { CutomIcon } from '../icons/icons';
import { CustomImage } from '../image/img';
import { DiApple } from "react-icons/di";


const BootstrapCards=({title,content,image,children,removeHandler,ind})=> {
  
  return (
    <Card className='hello' style={{ width: '21rem' , display:"flex", direction:"row" }}>
   
      <Card.Body>
        {/* <Card.Title>{title}</Card.Title> */}
        <Card.Text>
          <CustomImage source={image}/>
          <DiApple></DiApple>
          <h5 style={{color:"red" }}>{title}</h5>
          {content}
      
          <InstaHeart ></InstaHeart>
          <Button onClick={()=>removeHandler(ind)}>Remove </Button>
        </Card.Text>
        {/* <Button >Go somewhere</Button>/ */}
      </Card.Body>
    </Card>
  );
}

export default BootstrapCards;
















  
          {/* <CustomIcon/> */}
          {/* <CustomDNALoader/> */}
          {/* <CustomToast message={"your Transaction is completed"}/> */}
          {/* <InfinityLoader width={"500"} color={"red"}/> */}