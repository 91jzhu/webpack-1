import x from "./x"
import png from "/23.png"

const div=document.getElementById("app1")

div.innerHTML=`
<img src="${png}" alt="">
`

const button=document.createElement("button")
button.innerText="懒加载"
document.body.appendChild(button)
button.onclick=()=>{
    const lazy=import("./lazy")
    lazy.then((module)=>{
        module.default()
    },()=>{})
}