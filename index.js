(function() {
  'use strict';

  // YOUR CODE HERE
  const stopBtn = document.querySelector('#stopButton');
  stopBtn.addEventListener('click', ()=>{
    stopLight.classList.toggle('stop');
  })
  const slowBtn = document.querySelector('#slowButton');
  slowBtn.addEventListener('click', ()=>{
    slowLight.classList.toggle('slow');
  })
  const goBtn = document.querySelector('#goButton');
  goBtn.addEventListener('click', ()=>{
    goLight.classList.toggle('go');
  })
  

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');
})();
