window.onload = function () {
  const firstLayer = document.getElementById('first-layer');
  const secondLayer = document.getElementById('second-layer');
  const thirdLayer = document.getElementById('third-layer');
  const headingOne = document.getElementById('heading-one');
  const headingTwo = document.getElementById('heading-two');
  const headingThree = document.getElementById('heading-three');
  const headingFour = document.getElementById('heading-four');
  const headingFive = document.getElementById('heading-five');
  const headingSix = document.getElementById('heading-six');

  const headings = [];
  headings.push(headingOne, headingTwo, headingThree, headingFour, headingFive, headingSix);


  function moveThirdLayer() {
    let x = event.clientX;
    let y = event.clientY;
    thirdLayer.style.left = -x/10 + 'px';
    thirdLayer.style.top = -y/10 + 'px';
  }

  function moveSeconddLayer() {
    let x = event.clientX;
    let y = event.clientY;
    secondLayer.style.left = -x/70 + 'px';
    secondLayer.style.top = -y/70 + 'px';
  }

  function moveLayers() {
    moveSeconddLayer();
    moveThirdLayer();
  }

  let count = 0;

  function changeHeading() {
    console.log(count);
    headings[count].classList.add('heading-hidden');
    headings[count+1].classList.remove('heading-hidden');
    count++;
  }

  window.addEventListener('mousemove', moveLayers);
  window.addEventListener('ontouchmove', moveLayers);

  window.addEventListener('click', changeHeading);
  window.addEventListener('wheel', changeHeading);
  window.addEventListener('ontouchstart', changeHeading);
}
