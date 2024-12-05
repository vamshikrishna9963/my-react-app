

export const Tablecreate=({rowdata=[]})=>{
    return(
        <table className="table">
  <thead>
    <tr>
      <th>model name</th>
      <th>mobile number</th>
      <th>state</th>
    </tr>
  </thead>
  <tbody>
    {
        rowdata.map(eachdata=>{
            return(
                <tr>
                <td>{eachdata.model}</td>
                <td>{eachdata.mobile_number}</td>
                <td>{eachdata.select}</td>
    </tr>
            )
        })
    }
 
  </tbody>
</table>

    )
}