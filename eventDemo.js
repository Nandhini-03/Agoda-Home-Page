/*Featured homes recommended for you*/

const element = document.getElementById('content')

const newDelhi_element = document.getElementById('newDelhi_element');
const bangalore_element = document.getElementById('bangalore_element');
const mumbai_element = document.getElementById('mumbai_element')
const goa_element = document.getElementById('goa_element')
const chennai_element = document.getElementById('chennai_element')

let current_location = window.location.href
let len = current_location.split("#")

if (len.length === 1) {

    let new_element = newDelhi_element;

    new_element.classList.remove('hide')
    new_element.classList.add('show')

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    element.append(new_element)
}

window.addEventListener('load', updateDom)
window.addEventListener('hashchange', updateDom)

function updateDom() {
    let current_location = window.location.href
    let path = current_location.split("#").pop()

    let new_element;
    if (path === 'newDelhi') {
        new_element = newDelhi_element
    }
    else if (path === 'bangalore') {
        new_element = bangalore_element
    }
    else if (path === 'mumbai') {
        new_element = mumbai_element
    }
    else if (path === 'goa') {
        new_element = goa_element
    }
    else if (path === 'chennai') {
        new_element = chennai_element
    }
    else new_element = null

    new_element.classList.remove('hide')
    new_element.classList.add('show')

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    element.append(new_element)
}


/*Search Boxes*/

const display_area = document.getElementById('search-content')

const hotels_homes = document.getElementById('hotels&homes');
const privateStays = document.getElementById('privateStays');
const flightsHotels = document.getElementById('flightsHotels');
const flights = document.getElementById('flights')
const longStays = document.getElementById('longStays')
const activities = document.getElementById('activities');

console.log(flights);
// let location = window.location.href
let ln= current_location.split("#")
console.log(ln);

if (ln.length === 1) {

    let new_element = hotels_homes;
    console.log(new_element);

    new_element.classList.remove('hide')
    // new_element.classList.add('list-options-name-active')

    while (display_area.firstChild) {
        display_area.removeChild(display_area.firstChild);
    }

    display_area.append(new_element)
}

window.addEventListener('load', searchUpdate)

window.addEventListener('hashchange', searchUpdate)

function searchUpdate() {
    let current_location = window.location.href
    let path = current_location.split("#").pop()

    let new_element;
    if (path === 'Hotels&Homes') {
        new_element = hotels_homes
    }
    else if (path === 'PrivateStays') {
        new_element = privateStays
    }
    else if (path === 'Flights&Hotels') {
        new_element = flightsHotels
    }
    else if (path === 'Flights') {
        new_element = flights
    }
    else if (path === 'LongStays') {
        new_element = longStays
    }
    else if (path === 'Activities') {
        new_element = activities
    }
    else new_element = null

    new_element.classList.remove('hide')
    // new_element.classList.add('list-options-name-active')

    while (display_area.firstChild) {
        display_area.removeChild(display_area.firstChild);
    }

    display_area.append(new_element)
}

/*Accommodation Promotion*/

// let carousel=document.querySelector('.carousel');
// firstImg=carousel.querySelectorAll("img")[0];
// arrowIcons=document.querySelectorAll(".accommodation-wrapper i")

// let isDragStart=false,isDragging=false,prevPageX,prevScrollLeft,positionDiff;
// let firstImgWidth=firstImg.clientWidth+14;
// let scrollWidth=carousel.scrollWidth-carousel.clientWidth;

// const showHideIcons=()=>
// { 
//     arrowIcons[0].style.display=carousel.scrollLeft==0?"none" : "block";
//     arrowIcons[1].style.display=carousel.scrollLeft==scrollWidth?"none" : "block";
// }
// arrowIcons.forEach(icon =>
//     {
//         icon.addEventListener("click",() =>
//         {
//             carousel.scrollLeft+= icon.id=="left" ? -firstImgWidth : firstImgWidth;
//             setTimeout(() =>showHideIcons(),60);
//         });
//     });



/*Flights and Activities Promotion*/

let carouselFlight=document.querySelector('.flight-carousel');
let firstImg=carouselFlight.querySelectorAll("img")[0];
let arrowIconsFlight=document.querySelectorAll(".flight-wrapper i")

const showHideIconsFlight=()=>
{ 
    let scrollWidthFlight=carouselFlight.scrollWidth-carouselFlight.clientWidth;
    arrowIconsFlight[0].style.display=carouselFlight.scrollLeft==0?"none" : "block";
    arrowIconsFlight[1].style.display=carouselFlight.scrollLeft==scrollWidthFlight?"none" : "block";
}
arrowIconsFlight.forEach(icon =>
        {
            let flightFirstImgWidth=firstImg.clientWidth+14;
            icon.addEventListener("click",() =>
            {
                carouselFlight.scrollLeft+= icon.id=="leftFlight" ? -flightFirstImgWidth : flightFirstImgWidth;
                setTimeout(() =>showHideIconsFlight(),60);
            });
        });

/*Accommodation Promotion*/

let carousel=document.querySelector('.accommodation-carousel');
let firstImgAcc=carousel.querySelectorAll("img")[0];
let arrowIconsAcc=document.querySelectorAll(".accommodation-wrapper i");


const showHideIconsAcc=()=>
{ 
    let scrollWidth=carousel.scrollWidth-carousel.clientWidth;
    arrowIconsAcc[0].style.display=carousel.scrollLeft==0?"none" : "block";
    arrowIconsAcc[1].style.display=carousel.scrollLeft==scrollWidth?"none" : "block";
}
arrowIconsAcc.forEach(icon =>
    {
        icon.addEventListener("click",() =>
        {
            let firstImgWidth=firstImgAcc.clientWidth+14;
            carousel.scrollLeft+= icon.id=="leftAccommodation" ? -firstImgWidth : firstImgWidth;
            setTimeout(() =>showHideIconsAcc(),60);
        });
    });


/*Top Destinations in India*/


let carouselTop=document.querySelector('.allignment-style');
let firstImgTop=carousel.querySelectorAll("img")[0];
let arrowIcons=document.querySelectorAll(".Top-destination-India i");


const showHideIconsTop=()=>
{ 
    let scrollWidth=carouselTop.scrollWidth-carouselTop.clientWidth;
    arrowIcons[0].style.display=carouselTop.scrollLeft==0?"none" : "block";
    arrowIcons[1].style.display=carouselTop.scrollLeft==scrollWidth?"none" : "block";
}
arrowIcons.forEach(icon =>
    {
        icon.addEventListener("click",() =>
        {
            let firstImgWidth=firstImgTop.clientWidth+14;
            carouselTop.scrollLeft+= icon.id=="leftTop" ? -firstImgWidth : firstImgWidth;
            setTimeout(() =>showHideIconsTop(),60);
        });
    });


/*Popular destinations In India*/

let carouselPopular=document.querySelector('.popular-destinations-scrolling');
let firstImgPopular=carousel.querySelectorAll("img")[0];
let arrowIconsPopular=document.querySelectorAll(".Popular_destinations_outside_India i");


const showHideIconsPopular=()=>
{ 
    let scrollWidth=carouselPopular.scrollWidth-carouselPopular.clientWidth;
    arrowIconsPopular[0].style.display=carouselPopular.scrollLeft==0?"none" : "block";
    arrowIconsPopular[1].style.display=carouselPopular.scrollLeft==scrollWidth?"none" : "block";
}
arrowIconsPopular.forEach(icon =>
    {
        icon.addEventListener("click",() =>
        {
            let firstImgWidth=firstImgPopular.clientWidth+14;
            carouselPopular.scrollLeft+= icon.id=="leftPopular" ? -firstImgWidth : firstImgWidth;
            setTimeout(() =>showHideIconsPopular(),60);
        });
    });

    
/*Transparent of button*/

const boxElement = document.getElementById('homes-button');

boxElement.addEventListener('mouseenter', function () {
  boxElement.classList.add('transparent');
});

boxElement.addEventListener('mouseleave', function () {
  boxElement.classList.remove('transparent');
});
