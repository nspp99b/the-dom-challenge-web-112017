const counter = document.getElementById('counter')
const minus = document.getElementById('-')
const plus = document.getElementById('+')
const like = document.getElementById('<3')
const likeList = document.getElementsByClassName('likes')[0]
const pause = document.getElementById('pause')
const likeStore = {}
const commentList = document.getElementById('list')
const form = document.getElementById('comment-form')
const input = document.querySelector('input[type=text]')


function pauser(e) {
  if (pause.innerText === 'pause') {
    pause.innerText = 'resume'
  } else {
    pause.innerText = 'pause'
  }
}

function incrementor(e) {
  if (pause.innerText === 'pause') {
    counter.innerText = parseInt(counter.innerText) + 1
  }
}

function decrementor(e) {
  if (pause.innerText === 'pause') {
    counter.innerText = parseInt(counter.innerText) - 1
  }
}

function likeCreator(el){
  let bullet = document.createElement('li')
  bullet.innerText = `${el} has ${likeStore[el]} likes`
  likeList.appendChild(bullet)
}

function liker(e) {
  if (pause.innerText === 'pause') {
    likeStore[counter.innerText] = likeStore[counter.innerText] || 0;
    likeStore[counter.innerText] += 1;
    while (likeList.hasChildNodes()){
      likeList.removeChild(likeList.lastChild);
    } // destroy children somehow
    for (el in likeStore) {
      likeCreator(el)
    }
  }
}

function commentor(e) {
  event.preventDefault()
  const value = input.value
  const newP = document.createElement('p')
  newP.innerText = `${value}`
  commentList.append(newP)
  input.value = ''
}

setInterval(incrementor, 1000)
minus.addEventListener('click', decrementor)
plus.addEventListener('click', incrementor)
like.addEventListener('click', liker)
pause.addEventListener('click', pauser)
form.addEventListener('submit', commentor)
// document.addEventListener('click', gatekeeper)
