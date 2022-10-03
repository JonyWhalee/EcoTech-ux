const d = document;

function contactFormValidations() {
  const $form = d.querySelector(".contact-form");
  d.addEventListener("submit", e => {
    e.preventDefault();
    swal("Muy Bien!", "El formulario ha sido enviado exitosamente!", "success");

    fetch("https://formsubmit.co/ajax/eco.tech.vm@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(res => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => {
        console.log(json);
        $form.reset();
      });
  });
}

d.addEventListener("DOMContentLoaded", contactFormValidations());
