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
export const Table2=()=>{
return(
<table border={2}>
    {/* <tr>
        <td> 
        <img src="https://images.cnbctv18.com/wp-content/uploads/2020/10/APJ-Abdul-Kalam.jpg" alt="apj" width={300} height={200} />

        </td>
        
    </tr>
    <tr>
        <td></td>
    </tr> */}
  
</table>
)
}
const Table3=()=>{
    return(
        <>
        <td>hello</td>
        <td>hi</td>
        </>
    )
}