const sidenavInner = document.querySelector('.sidenav');
const { body } = document;

function toggleNav() {
  sidenavInner.classList.toggle('show-sidenav');
  if (sidenavInner.classList.contains('show-sidenav')) {
    body.classList.add('freezePage');
  } else {
    body.classList.remove('freezePage');
  }
}

export { toggleNav };
