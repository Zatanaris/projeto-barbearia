AOS.init();
const whatsappBtn = document.querySelector(".btn--whatsapp");

document.addEventListener("scroll", function () {
   window.scrollY >= 120
      ? whatsappBtn.classList.add("active")
      : whatsappBtn.classList.remove("active");
});
