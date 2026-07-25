const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const message=document.getElementById("message").value.trim();
    const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

    if(name==="" || email==="" || phone==="" || message===""){
        alert("Please fill all fields.");
        return;
    }

    alert("Thank you! Your message has been received.");

    form.reset();

});