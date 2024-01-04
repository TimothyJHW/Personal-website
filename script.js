const beforeTech = document.getElementById("card1")
const tech = document.getElementById("card2")
const contact = document.getElementById("card3")
const homePageButton = document.getElementById("homepagebtn")


// navbar element event handlers

beforeTech.addEventListener("click",()=> {
    document.location.href = "#page-1";});
homePageButton.addEventListener("click",()=> {
    document.location.href = "#page-2";});
tech.addEventListener("click",()=> {
    document.location.href = "#page-3";});
contact.addEventListener("click", ()=> {
    document.location.href = "#page-4";})
