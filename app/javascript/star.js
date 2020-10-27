export default function clickStar() {
  const starDiv = document.querySelector('.star');
  if (starDiv) {
    starDiv.addEventListener('click', () => {
      document.querySelector('.suite-list .active i').classList.toggle('selected');
      console.log(starDiv)
      starDiv.firstElementChild.classList.toggle('d-none');
      starDiv.lastElementChild.classList.toggle('d-none');
    })
  }
}
