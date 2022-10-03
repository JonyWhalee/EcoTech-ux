const d = document;

function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");
  $inputs.forEach(input => {
    d.addEventListener(
      "submit",
      e => {
        swal("Muy Bien!", "El formulario ha sido enviado!", "success");
        e.preventDefault();
        fetch("https://formsubmit.co/ajax/eco.tech.vm@gmail.com", {
          method: "POST",
          body: new FormData(e.target),
        })
          .then(res => (res.ok ? res.json() : Promise.reject(res)))
          .then(json => {
            console.log(json);
            $form.reset();
          })
          .catch(err => {
            console.log(err);
            let menssage =
              err.statusText ||
              "Ocurrió un error al enviar el email, intenta nuevamente";
            $response.innerHTML = `<p>${err.status}: ${menssage} </p>`;
          });
      }
      // );
    );
  });
}

d.addEventListener("DOMContentLoaded", contactFormValidations());
