import { clear } from "./clearContent";
function menu(){
    clear();
    const div=document.getElementById("content");
    const text=document.createElement("h1");
    text.innerText="Menu"
    div.appendChild(text);
};
export{menu};
