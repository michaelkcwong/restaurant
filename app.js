let left = document.getElementsByClassName('bi-caret-left-fill')[0]
let right = document.getElementsByClassName('bi-caret-right-fill')[0]
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () => {
  cards.scrollLeft -= 140;
})

right.addEventListener('click', () => {
  cards.scrollLeft += 140;
})

let poster = document.getElementById('poster');