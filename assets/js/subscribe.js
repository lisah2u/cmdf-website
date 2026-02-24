(function () {
  'use strict';

  function showMessage(form, text, isSuccess) {
    var msgEl = form.querySelector('.subscribe-message');
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.style.display = 'block';
    msgEl.style.color = isSuccess ? '#86efac' : '#fca5a5'; // green-300 / red-300 (readable on dark bg)
  }

  function handleSubmit(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = form.querySelector('input[type="email"]');
      var honeyInput = form.querySelector('input[name="website"]');
      var btn = form.querySelector('button[type="submit"]');
      var formRow = form.querySelector('.footer-form-row');

      var email = emailInput ? emailInput.value.trim() : '';
      var website = honeyInput ? honeyInput.value : '';
      var originalText = btn ? btn.textContent : 'Stay Connected';

      if (btn) { btn.disabled = true; btn.textContent = 'Subscribing\u2026'; }

      fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, website: website }),
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.error) {
            showMessage(form, data.error, false);
            if (btn) { btn.disabled = false; btn.textContent = originalText; }
          } else if (data.message === 'already_subscribed') {
            if (formRow) formRow.style.display = 'none';
            showMessage(form, 'You\u2019re already on our list \u2014 thanks!', true);
          } else {
            if (formRow) formRow.style.display = 'none';
            showMessage(form, 'You\u2019re subscribed! Thanks for joining us.', true);
          }
        })
        .catch(function () {
          showMessage(form, 'Something went wrong. Please try again.', false);
          if (btn) { btn.disabled = false; btn.textContent = originalText; }
        });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.footer-subscribe-form').forEach(handleSubmit);
  });
})();
