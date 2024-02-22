const scriptURL = 'https://script.google.com/macros/s/AKfycbw2Sbu2-Kfh3EW35SsS42jbIDDNHqv6K-MKy99uYzl_HPs4MGw_DgA11MX3ZNxE5Orx/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
