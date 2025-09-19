document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger-btn").addEventListener("click", function()
    {
       document.querySelector(".header").classList.toggle("open-menu")
    })
})