/* GIMS website interactions — enrollment form + mobile nav */
(function () {
  'use strict';

  /* Enrollment form: submit → thank-you state, reset → back to form */
  var form = document.getElementById('enroll-form');
  var success = document.getElementById('enroll-success');
  var resetBtn = document.getElementById('enroll-reset');
  var reference = document.getElementById('enroll-reference');

  function makeReference() {
    var year = new Date().getFullYear();
    var num = String(Math.floor(1 + Math.random() * 9999)).padStart(4, '0');
    return 'GIMS-' + year + '-' + num;
  }

  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (reference) reference.textContent = makeReference();
      form.hidden = true;
      success.hidden = false;
      window.location.hash = '#enroll';
    });
  }

  if (resetBtn && form && success) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      success.hidden = true;
      form.hidden = false;
    });
  }

  /* Mobile navigation */
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
