const controll = gsap.fromTo(".square",{
    x: 1000,
    y:300,
    duration:6,
    rotation:3600,
    stagger: .5,
}
)
gsap.to(target, {
    duration:2.5,
    ease: "bounce.out",
    y: -250
    });

document.querySelector("#play").onclick = () => controll.play();
document.querySelector("#pause").onclick = () => controll.pause();
document.querySelector("#resume").onclick = () => controll.resume();
document.querySelector("#reverse").onclick = () => controll.reverse();
document.querySelector("#restart").onclick = () => controll.restart();