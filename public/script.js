const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const loginSvg = document.getElementById('login-svg');
const signUpSvg = document.getElementById('sign-up-svg');
const timeline1 = gsap.timeline();
const timeline2 = gsap.timeline();
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3'); 
const loginContainer = document.getElementById('login-container'); 
const signUpContainer = document.getElementById('sign-up-container'); 

let vh = window.innerHeight;
let vw = window.innerWidth;
let circleRadius = Math.sqrt(vh**2+vw**2)*2;

window.addEventListener("resize",()=>{
    vh = window.innerHeight;
    vw = window.innerWidth;
    circleRadius = Math.sqrt(vh**2+vw**2)*2;
});

registerBtn.addEventListener('click', (e)=>{

    loginContainer.classList.add("pointer-events-none"); 

    circle1.style.backgroundColor = '#82828D';
    circle2.style.backgroundColor = '#595867';
    circle3.style.backgroundColor = '#2F2E41';
    
    timeline1
    .fromTo('.circle',{width:'0'},{duration: 1.10, width: `${circleRadius}`, ease: "power1.inOut", stagger: 0.20})
    .call(hide,[loginContainer,loginSvg],">")
    .set('body',{backgroundColor:'#2F2E41'})
    .to('.circle',{width: '0',duration:0})
    .call(show,[signUpContainer,signUpSvg],">")
    .add('start')
    .to(".sign-up-container",{zIndex:20, opacity:1, duration:.75, ease: "power4.in"},'start')
    .to(".sign-up-svg",{zIndex:20, opacity:1, duration:.75, ease: "power4.in"},'start')
    .to([".sign-up-container",".sign-up-svg"],{zIndex:0})
});


loginBtn.addEventListener('click', (e)=>{   
    
    signUpContainer.classList.add("pointer-events-none"); 

    circle1.style.backgroundColor = '#C7C4C0';
    circle2.style.backgroundColor = '#E0DDD8';
    circle3.style.backgroundColor = '#F9F5F0';


    timeline2
    .fromTo('.circle',{width: '0'},{duration: 1.10, width: `${circleRadius}`, ease: "power1.inOut", stagger: 0.20})
    .call(hide,[signUpContainer,signUpSvg],">")
    .set('body',{backgroundColor:'#F9F5F0'})
    .to('.circle',{width: '0',duration:0})
    .call(show,[loginContainer,loginSvg],">")
    .add('start')
    .to(".login-container",{zIndex:20, opacity:1, duration:.75, ease: "power4.in"},'start')
    .to(".login-svg",{zIndex:20, opacity:1, duration:.75, ease: "power4.in"},'start')
    .to([".login-container",".login-svg"],{zIndex:0})

});

function hide(container,svg){
    svg.classList.remove("lg:block"); 
    svg.classList.add("lg:hidden");
    svg.style.opacity="0";
    container.classList.remove("flex");
    container.classList.add("hidden");
    container.style.opacity="0";
    container.classList.remove("pointer-events-none"); 
    window.scrollBy({ top: 0, behavior: 'instant' });
}

function show(container,svg)
{
    svg.classList.remove("lg:hidden");
    svg.classList.add("lg:block");
    svg.style.opacity="0";
    container.classList.remove("hidden");
    container.classList.add("flex");
    container.style.opacity="0";
}