const showLink = "http://lanapirsl.com/wordpress/wp-json/wp/v2/show";
const merchLink = "http://lanapirsl.com/wordpress/wp-json/wp/v2/merch";
const someLink = "http://lanapirsl.com/wordpress/wp-json/wp/v2/social";
const bioLink = "http://lanapirsl.com/wordpress/wp-json/wp/v2/bio";

window.addEventListener("DOMContentLoaded",startLoading());

function startLoading(){
    getShows();
    getMerch();
    getSome();
    getBio();
}
function getShows(data){
    fetch(showLink)
        .then(res=>res.json())
    .then(handleShows);
}
function handleShows(data){
    const myShows=data;
    myShows.forEach(showShows);
}
function showShows(singleObject){
    const template=document.querySelector("#showTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".date").textContent=singleObject.time;
    copy.querySelector(".venue").textContent=singleObject.venue;
    copy.querySelector(".city").textContent=singleObject.city;
    copy.querySelector("a").href=singleObject.link;
    document.querySelector("#showList").prepend(copy, document.querySelector("#showList").firstChild);
}


function getMerch(data){
    fetch(merchLink)
        .then(res=>res.json())
    .then(handleMerch);
}
function handleMerch(data){
    const myMerch=data;
    myMerch.forEach(showMerch);
}
function showMerch(singleObject){
    const template=document.querySelector("#merchTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("img").src=singleObject.img.guid;
    copy.querySelector("h4").textContent=singleObject.product;
    copy.querySelector("p").textContent=singleObject.price+" kr";
    copy.querySelector("a").href=singleObject.link;
    document.querySelector("#merchGrid").appendChild(copy);
}


function getSome(data){
    fetch(someLink)
        .then(res=>res.json())
    .then(handleSome);
}
function handleSome(data){
    const mySome=data;
    mySome.forEach(showSome);
}
function showSome(singleObject){
    const template=document.querySelector("#someTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("img").src=singleObject.img.guid;
    copy.querySelector("a").href=singleObject.link;
    document.querySelector("footer").appendChild(copy);
}

function getBio(data){
    fetch(bioLink)
        .then(res=>res.json())
    .then(handleBio);
}
function handleBio(data){
    const myBio=data;
    myBio.forEach(showBio);
}
function showBio(singleObject){
    const template=document.querySelector("#bioTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("#bio-img").src=singleObject.img.guid;
    copy.querySelector("#bio-desc").textContent=singleObject.description;
    document.querySelector("#appendBio").appendChild(copy);
}
