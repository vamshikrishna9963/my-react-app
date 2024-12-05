import { Image ,Image2} from "../image/img"

import { Link } from "../anc/link"

export const Table=()=>{
    return(
        <>
        <table border={2}>
            <tr>
                <td><Link></Link></td>
                <td>vamshi</td>
                <td>hinnac</td>
            </tr>
            <tr>
                <td><Image2></Image2></td>
                <td><a href="https://nirbanclasses.com/2023/07/swami-vivekananda-1863-1902.html">about hime</a></td>
                <td>sunny</td>
            </tr>
            <tr>
                <Image/>
                <td>chintu</td>
                <td>sunny</td>
            </tr>
            <tr>
                <td>gopi</td>
                <Table3></Table3>

            </tr>
            <tr>
                <td>gopi</td>
                <td>chintu</td>
                <td>sunny</td>
            </tr>
            <Table3></Table3>

            {/* <Total></Total> */}
        </table>
  
        </>
    )
}


const Table3=()=>{
    return(
        <>
        <td>vamshi</td>
        <td>gopi</td>
        <td>chintu</td>
        <td>sunny</td>
        </>
    )
}