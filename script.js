// type = "text/javascript";
// src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
// (function () {
//   emailjs.init({
//     publicKey: "service_8y1sl0t", // استبدل هذا بالمفتاح العام الخاص بك من حساب EmailJS
//   });
// })();
// type = "text/javascript"(function () {
//   emailjs.init({
//     publicKey: "service_8y1sl0t",
//   });
// })();

function sendEmail(event) {
    event.preventDefault();
  const Data = {
    to_email: "ghgj99241@gmail.com",
    from_name: document.getElementById("name").value,
    from_email: "ghgj99241@gmail.com",
    subject: "Support",
    message: `
name : ${document.getElementById("name").value}
phone : ${document.getElementById("phone").value}
email : ${document.getElementById("email").value}
date : ${document.getElementById("date").value}
message : ${document.getElementById("message").value}
    `,
  };
  emailjs
    .send("service_8y1sl0t", "template_7zbdhym", Data)
    .then((response) => {
      alert("success");
        document.getElementById("contact-form").reset();
        
    })
    .catch((error) => {
      alert("فشل الاتصال" + error);
    });
}

