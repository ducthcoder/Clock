let second = document.querySelector('#second');
let minute = document.querySelector('#minute');
let hour = document.querySelector('#hour');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    hour.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;
});

// digital clock
let sc = document.querySelector('#sc');
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');
let ampm = document.querySelector('#ampm');

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >=12 ? "PM" : "AM";

    if(h>12) {
        h = h-12;
    }

    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;

    hr.innerHTML = h;
    mn.innerHTML = m;
    sc.innerHTML = s;
    ampm.innerHTML = ap;
});