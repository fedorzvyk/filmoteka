import { refs } from './refs/refs';
import { preload } from './helpers/preloader';
window.onload = preload();

refs.btnWatched.addEventListener('click', onBtnWatched);
refs.btnQueue.addEventListener('click', onBtnQueue);

function onBtnQueue(evt) {
  evt.preventDefault();
  refs.btnWatched.classList.remove('button--active');
  evt.target.classList.add('button--active');
}

function onBtnWatched(evt) {
  evt.preventDefault();
  refs.btnQueue.classList.remove('button--active');
  evt.target.classList.add('button--active');
}
