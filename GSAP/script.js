


var allh1 = document.querySelectorAll("h1");
allh1.forEach((e) => {
  let content = "";
  let h1Text = e.textContent.split("");
  h1Text.forEach((e) => {
    content += `<span>${e}</span>`;
  });
  e.innerHTML = content;
});



gsap.to(".page2 h1 span", {
    color: "#e3e3c4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".page2 h1 ",
      scroll: ".main",
    //   markers:true,
      start: "top 60%",
      end: "top -20%",
      scrub: 2,
    },
  });


