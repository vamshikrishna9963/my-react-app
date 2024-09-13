import { Component, PureComponent } from "react";



export class Child extends PureComponent{
    render(){
        console.log("child............")
        return(
            <h1>hello</h1>
        )
    }
}