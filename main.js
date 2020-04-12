// Global Variables
const tag = document.querySelector('.tag');
const tagDescription = document.querySelector('.description');
const tagSample = document.querySelector('.sample');
const privBtn = document.querySelector('.priv');
const startOverBtn = document.querySelector('.start-over');
const nextBtn = document.querySelector('.next');

// App init
let currentIndex = 0;

const infoArr = [
  {tagName: '<h2></h2>', tagDescription: 'Heading level 2', tagSample: '<h2>Heading 2</h2>'},
  {tagName: '<h4></h4>', tagDescription: 'Heading level 4', tagSample: '<h4>Heading 4</h4>'},
  {tagName: '<p></p>', tagDescription: 'Paragraph', tagSample: '<p>paragraph 3</p>'},
  {tagName: '<a></a>', tagDescription: 'Set internal/external links', tagSample: '<a href="http://google.com">'},
  {tagName: '<button></button>', tagDescription: 'Create a button', tagSample: '<button>Click Me</button>'},
  {tagName: '<code></code>', tagDescription: 'Sets your text as a code snippet', tagSample: '<code>Code Snippet</code>'},
  {tagName: '<nav></nav>', tagDescription: 'Use for navigation items', tagSample: '<nav><p>Item1</p><p>Item2</p></nav>'},
  {tagName: '<image>', tagDescription: 'Sets image in your project', tagSample: '<image src="/image_path">'},
  {tagName: '<script></script>', tagDescription: 'Adds JavaScript to your project', tagSample: '<script src="main.js"></script>'}
];

// Events
privBtn.addEventListener('click', privBtnHandler);
startOverBtn.addEventListener('click', startOverHandler);
nextBtn.addEventListener('click', nextBtnHandler);


function init() {

  startOverBtn.style.visibility = 'hidden';
  privBtn.style.visibility = 'hidden';

  tag.textContent = infoArr[currentIndex].tagName;
  tagDescription.textContent = infoArr[currentIndex].tagDescription;
  tagSample.textContent = infoArr[currentIndex].tagSample;
}

init();


// EventHandlers 
function privBtnHandler(event) {

  event.preventDefault();
  currentIndex--;
  setInfo(currentIndex);
  privBtnVisability();
}

function startOverHandler(event) {

  event.preventDefault();
  setInfo(0);
  currentIndex = 0;
  setBtnVisibility('hidden', 'hidden', 'visible');
}

function nextBtnHandler(event) {

  event.preventDefault();
  currentIndex++;
  setInfo(currentIndex);
  startOver();
  privBtnVisability(); 
}

// Sub functions

function setInfo(index) {
  tag.textContent = infoArr[index].tagName;
  tagDescription.textContent = infoArr[index].tagDescription;
  tagSample.textContent = infoArr[index].tagSample;
}

function startOver() {

  if(currentIndex === infoArr.length - 1){
    currentIndex = 0;
    setBtnVisibility('hidden', 'visible', 'hidden');
  }
}

function setBtnVisibility(privBtnVisbl, startOverBtnVisbl, nextBtnVisbl) {
  privBtn.style.visibility = privBtnVisbl;
  startOverBtn.style.visibility = startOverBtnVisbl;
  nextBtn.style.visibility = nextBtnVisbl;
}

function privBtnVisability() {

  if (currentIndex > 0){
    privBtn.style.visibility = 'visible';
  } else {
    privBtn.style.visibility = 'hidden';
  }
  console.log('privBtnVisability');
}
