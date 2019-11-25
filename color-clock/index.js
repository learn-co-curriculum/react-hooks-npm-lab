//No need to do any work here.  
//If package.json and the proper modules are installed in the correct location, this should display correctly in the browser.

function displayTime() {
  let clock = document.querySelector('#clock')
  clock.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
  setInterval(function() {
      clock.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
      clock.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
      clock.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }, 1000)


}

window.onload = displayTime()
