function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function clear(){
    const div=document.getElementById("content");
    removeAllChildNodes(div);
}
export{clear};