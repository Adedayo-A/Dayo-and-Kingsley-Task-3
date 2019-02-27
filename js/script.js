let body = document.querySelector('body');
let firstPageNavigationIcon = document.querySelector('li');
let hamburgerIcon = document.querySelector('.hamburger');

let returnNavigationIcon = document.querySelector('.arrowIcon');
let allOfDropDown = document.querySelector("#myDropdown");
let allOfHomepage = document.querySelector("#homepage");
let unorderedList = document.querySelector('ul');
let hamburgerMenu = document.querySelector("#nav-toggle");
console.log(hamburgerMenu);

 const programOfDropDown = () => {
    console.log(hamburgerMenu.className)
    hamburgerMenu.classList.toggle('active');
    if (allOfHomepage.className === 'homepage') {
       allOfHomepage.className = 'homepage-index';
       allOfDropDown.classList.remove('hide');
       allOfDropDown.classList.add('show');
    } else if (allOfHomepage.className === 'homepage-index') {
        allOfHomepage.className = 'homepage';
        allOfDropDown.classList.remove('show');
        allOfDropDown.classList.add('hide');
    }
}
hamburgerMenu.addEventListener("click", programOfDropDown);



// const defaultBody = () => {
//     allOfDropDown.classList.add('hide')
// }
// window.addEventListener('load', defaultBody);
//  let outerCourtOne = document.querySelector('.outer-court:nth-child(1)');
// let outerCourtTwo = document.querySelector('.outer-court:nth-child(2)');
// let outerCourtThree = document.querySelector('.outer-court:nth-child(3)');
// let outerCourtFour = document.querySelector('.outer-court:nth-child(4)');
// let outerCourtFive = document.querySelector('.outer-court:nth-child(5)');
// let outerCourtSix = document.querySelector('.outer-court:nth-child(6)');




        // outerCourtOne.classList.add('.outer-court:nth-child(1)');
    // outerCourtTwo.classList.add('.outer-court:nth-child(2)');
    // outerCourtThree.classList.add('.outer-court:nth-child(3)');
    // outerCourtFour.classList.add('.outer-court:nth-child(4)');
    // outerCourtFive.classList.add('.outer-court:nth-child(5)');
    // outerCourtSix.classList.add('.outer-court:nth-child(6)');

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
    // unorderedList.replaceChild(img, hamburgerIcon);    
    // let img = document.createElement('img');
    // img.src = "./images/up-arrow.svg";
    // img.alt = "An Arrow Icon indicating back";
    // img.setAttribute('class', '.arrowIcon');
    // unorderedList.replaceChild(hamburgerIcon, img)