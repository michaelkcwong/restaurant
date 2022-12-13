let left = document.getElementsByClassName('bi-caret-left-fill')
let right = document.getElementsByClassName('bi-caret-right-fill')
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () => {
  cards.scrollLeft -= 140;
})

right.addEventListener('click', () => {
  cards.scrollLeft += 140;
})