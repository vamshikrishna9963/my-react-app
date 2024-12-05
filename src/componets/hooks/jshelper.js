

 export const Customtodo=()=>{
    let todos=[]
    for(let i=1;i<=10;i++){
        const myobj={
            id:i,
            text:`item ${i}`,
        }
        todos.push(myobj)
    }
    console.log(todos)
    return todos;
};
Customtodo()
