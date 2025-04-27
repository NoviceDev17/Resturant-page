import "./styles.css";
import{about} from "./about.js";
import{menu} from "./menu.js";
import{clear} from "./clearContent.js";
import chefImage from './images/chef.png';
function homePage(){
    clear();
    //text
    const text1=document.createElement("div");
    text1.innerText="text1"
    const text2=document.createElement("div");
    text2.innerText="text2"
    const text3=document.createElement("div");
    text3.innerText="text3"
    //image
    const img=document.createElement("img");
    img.id="chef-img";
    img.src=chefImage;
    //apend kids
    const div=document.getElementById("content");
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(img);
    div.appendChild(text3);
};
homePage();
//iventlisteners
const menuButton=document.getElementById("menu");
const aboutButton=document.getElementById("about");
const homeButton=document.getElementById("home");
menuButton.addEventListener("click",()=>{
    menu();
});
aboutButton.addEventListener("click",()=>{
    about();
});
homeButton.addEventListener("click",()=>{
    homePage();
})