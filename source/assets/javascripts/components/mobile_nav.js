// eslint-disable-next-line no-use-before-define
newFunction();

function newFunction() {
  $(document).ready(function() {
    $('#nav-icon').click(function() {
      $(this).toggleClass('open');
    });
  });
}
// const sidenavInner = document.querySelector('.sidenav');
// const { body } = document;

// function toggleNav() {
//   sidenavInner.classList.toggle('show-sidenav');
//   if (sidenavInner.classList.contains('show-sidenav')) {
//     body.classList.add('freezePage');
//   } else {
//     body.classList.remove('freezePage');
//   }
// }

// export { toggleNav };

// const hamburgerEffect = document.querySelector('')
