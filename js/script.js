
let img = document.createElement('img');
img.src = "./images/up-arrow.svg";
img.alt = "An Arrow Icon indicating back";
img.setAttribute('class', '.arrowIcon');

let firstPageNavigationIcon = document.querySelector('li');
let hamburgerIcon = document.querySelector('.hamburger');
console.log(hamburgerIcon);
let returnNavigationIcon = document.querySelector('.arrowIcon');
let allOfDropDown = document.querySelector("#myDropdown");
let allOfHomepage = document.querySelector("#homepage");
let unorderedList = document.querySelector('ul');
console.log(unorderedList[0]);
let outerCourtOne = document.querySelector('.outer-court:nth-child(1)');
let outerCourtTwo = document.querySelector('.outer-court:nth-child(2)');
let outerCourtThree = document.querySelector('.outer-court:nth-child(3)');
let outerCourtFour = document.querySelector('.outer-court:nth-child(4)');
let outerCourtFive = document.querySelector('.outer-court:nth-child(5)');
let outerCourtSix = document.querySelector('.outer-court:nth-child(6)');



const programOfDropDown = () => {
    allOfHomepage.style.zIndex = "-1";
    console.log(allOfDropDown.classList);
    allOfDropDown.classList.remove('hide');
    allOfDropDown.classList.add('show');
    outerCourtOne.classList.add('.outer-court:nth-child(1)');
    outerCourtTwo.classList.add('.outer-court:nth-child(2)');
    outerCourtThree.classList.add('.outer-court:nth-child(3)');
    outerCourtFour.classList.add('.outer-court:nth-child(4)');
    outerCourtFive.classList.add('.outer-court:nth-child(5)');
    outerCourtSix.classList.add('.outer-court:nth-child(6)');
    unorderedList.replaceChild(img, hamburgerIcon);
}
hamburgerIcon.addEventListener("click", programOfDropDown)

const returnProgram = () => {
    allOfHomepage.style.zIndex = "1";
    allOfDropDown.classList.remove('show');
    allOfDropDown.classList.add('hide');
    unorderedList.replaceChild(hamburgerIcon, img);
 }

 img.addEventListener("click", returnProgram)

     // outerCourtOne.classList.add('.animation-one');
    // outerCourtTwo.classList.add('.animation-two');
    // outerCourtThree.classList.add('.animation-three');
    // outerCourtFour.classList.add('.animation-four');
    // outerCourtFive.classList.add('.animation-five');
    // outerCourtSix.classList.add('.animation-six');
    // allOfHomepage.classList.remove('hide');
    // allOfHomepage.classList.add("show");

    // firstPageNavigationIcon.parentNode.removeChild(firstPageNavigationIcon);
    // unorederedList.appendChild(hamburgerIcon);

    // console.log(allOfHomepage.classList);
    // //allOfHomepage.classList.remove('show');
    // // allOfHomepage.classList.add('hide');
    // console.log(allOfHomepage.classList);