const scriptURL = 'https://script.google.com/macros/s/AKfycbxt1DcNuEKJdSb3fvufAy9R0Up67FJrdeFAMT2hYplwcIxR1F1F3BhdA3tyyDGGrarT/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
