//No need to do any work here.
//If package.json and the proper modules are installed in the correct location, this should display correctly in the browser.
import format from "./node_modules/date-fns/esm/format/index.js";

function displayTime() {
  const clock = document.querySelector("#clock");
  clock.textContent = format(new Date(), "MMMM do yyyy, h:mm:ss a");
  setInterval(function () {
    clock.textContent = format(new Date(), "MMMM do yyyy, h:mm:ss a");
    clock.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    clock.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, 1000);
}

displayTime();
