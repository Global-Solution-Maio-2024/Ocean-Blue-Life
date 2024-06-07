document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("WDIQGlxjc6uJWOeE8");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_4ijrvv4", "template_6k7ia0n", formData).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("responseMessage").innerText =
          "Email enviado com sucesso!";
        document.getElementById("contactForm").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        document.getElementById("responseMessage").innerText =
          "Falha ao enviar o email.";
      }
    );
  });
