'use strict';

{
  const open = document.querySelector('.menu-open');
  const menu = document.querySelector('.down-menu');
  const close = document.querySelector('.menu-close');

  open.addEventListener('click', () => {
    menu.classList.add('show');
    open.classList.add('none');
    close.classList.remove('none');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('show');
    open.classList.remove('none');
    close.classList.add('none');
  });
}