const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const wrap = document.querySelectorAll(".wrap");

//clicking open button will add visible class and creating the css effect
openBtn.addEventListener("click", function(){
  for (let x = 0; x < wrap.length; x++){
    wrap[x].classList.add("visible");
  }
})
//clicking open button will remove visible class and creating the css effect
closeBtn.addEventListener("click", function(){
  for (let x = 0; x <wrap.length; x++){
    wrap[x].classList.remove("visible");
  }
})

