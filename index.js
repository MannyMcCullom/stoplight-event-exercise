(function() {
  'use strict';

  // YOUR CODE HERE
// Part 1
// Add DOM event listeners and handlers to toggle the on/off state of three bulbs.
  const stopBtn = document.querySelector('#stopButton');
  const slowBtn = document.querySelector('#slowButton');
  const goBtn = document.querySelector('#goButton');

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');

  stopBtn.addEventListener('click', ()=>{
    stopLight.classList.toggle('stop');
  })

  slowBtn.addEventListener('click', ()=>{
    slowLight.classList.toggle('slow');
  })

  goBtn.addEventListener('click', ()=>{
    goLight.classList.toggle('go');
  })

// Part 2
// Add new DOM event listeners and handlers to log the mouse state of each button.
  
stopBtn.addEventListener('mouseenter', (event)=>{
  console.log(`Entered ${event.target.textContent} button`)
})

stopBtn.addEventListener('mouseleave', (event)=>{
  console.log(`Left ${event.target.textContent} button`)
})

slowBtn.addEventListener('mouseenter', (event)=>{
  console.log(`Entered ${event.target.textContent} button`)
})

slowBtn.addEventListener('mouseleave', (event)=>{
  console.log(`Left ${event.target.textContent} button`)
})

goBtn.addEventListener('mouseenter', (event)=>{
  console.log(`Entered ${event.target.textContent} button`)
})

goBtn.addEventListener('mouseleave', (event)=>{
  console.log(`Left ${event.target.textContent} button`)
})

// Bonus
// Add one DOM event listener and one handler to log the state of each bulb.
  const controls = document.querySelector('#controls');
  controls.addEventListener('click', (event)=>{
    if (event.target.textContent === 'Stop') {
      if (stopLight.classList.contains('stop')) {
        console.log(`${event.target.textContent} bulb on`);
      } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }

    if (event.target.textContent === 'Slow') {
      if (slowLight.classList.contains('slow')) {
        console.log(`${event.target.textContent} bulb on`);
      } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }

    if (event.target.textContent === 'Go') {
      if (goLight.classList.contains('go')) {
        console.log(`${event.target.textContent} bulb on`);
      } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }

})

})();
