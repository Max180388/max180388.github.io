const nav=document.querySelector(".nav"),navToggle=document.querySelector(".nav__toggle"),sliderControl=document.querySelector(".slider__control"),slider=document.querySelector(".slider");if(nav.classList.add("nav--closed"),navToggle.addEventListener("click",(()=>{nav.classList.toggle("nav--closed"),nav.classList.toggle("nav--opened")})),sliderControl){let e=!1;sliderControl.addEventListener("click",(l=>{e?(slider.classList.toggle("slider--before"),slider.classList.toggle("slider--after")):(slider.classList.add("slider--after"),e=!0)}))}