let toggleButton = document.querySelector("button");
let trafficLightItems = document.querySelectorAll(".traffic-light__color");
console.log(toggleButton);

let i = 0;

function toggleOpacity() {
    let previousItem = i - 1;
    if (i === 0) {
        previousItem = 2;
    }
    trafficLightItems[previousItem].removeAttribute("style");
    trafficLightItems[i].style.opacity = "100%";
    i++;
    console.log(i);
    if (i > 2) {
        i = 0;
    }
    console.log(trafficLightItems);
}

toggleButton.onclick = toggleOpacity;