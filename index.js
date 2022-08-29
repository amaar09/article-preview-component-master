
const show = document.getElementById("show-on-clicking-btn")
const popup = document.getElementById("display-none-id")
show.addEventListener("click", displayNONE);

function displayNONE() {
  // console.log("you have clicked share")
  popup.classList.remove("display-none");

}
// This will close the PopUp when clicked outside it
window.addEventListener("mouseup", function (event) {
  if (event.target != popup && event.target.parentNode != popup) {
    // console.log("clicked outside")
    popup.classList.add("display-none")
  }
})








// **********below code will close only when clicked on class="close" element

// the code below is for closing the share-box if clicked on any element with class close
// const container = document.querySelectorAll(".close")
// container.forEach(function (conts) {
//   conts.addEventListener("click", closeTheShare)
// })
// function closeTheShare() {
//   console.log("WTF!")
//   const popup = document.getElementById("display-none-id")
//   popup.classList.add("display-none")
// }


//************ this is without using for.each
// const container = document.getElementsByClassName("close")
// for (var i = 0; i < container.length; i++) {
// container[i].addEventListener("click", closeTheShare)
// }
// function closeTheShare(){
//   const popup = document.getElementById("display-none-id")
//   popup.classList.add("display-none")
// }