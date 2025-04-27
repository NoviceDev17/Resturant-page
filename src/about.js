import{clear} from "./clearContent.js";

function about(){
    clear();
    const div=document.getElementById("content");
    const text=document.createElement("h1");
    text.innerText="About"
    div.appendChild(text);
};
export{about};