import { toggleNav } from './components/mobile_nav';

// Sidenav
const sidenavTriggers = document.querySelectorAll('.sidenav-trigger');
const sideNavLinks = document.querySelectorAll('.sidenav-link');

sidenavTriggers.forEach(function(trigger) {
  trigger.addEventListener('click', () => {
    toggleNav();
  });
});

sideNavLinks.forEach(function(link) {
  link.addEventListener('click', () => {
    toggleNav();
  });
});
