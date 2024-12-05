import { DNA } from "react-loader-spinner";
import { InfinitySpin } from "react-loader-spinner";
import { BallTriangle } from "react-loader-spinner";
export const CustomDNALoader=()=>{
    return(
        <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    )
}
export const InfinityLoader=(props)=>{
    return(
        <InfinitySpin
  visible={true}
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  {...props}
  width="200"

  />
    )
}
export const CustomBall=(props)=>{
    return(
        <BallTriangle
  height={100}
  width={100}
//   {...props}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    )
}