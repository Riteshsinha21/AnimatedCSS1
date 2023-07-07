

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".orange", {
  scrollTrigger: {
    trigger: ".orange",
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "right center",
  ease: "none"
});
 

// --- PURPLE/GREEN PANEL ---
gsap.from(".purple", {
  scrollTrigger: {
    trigger: ".purple",
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});




// var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".purple",
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "+=100%",
//     }
//   });

// tl.from(".purple img", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
  // .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  // .to(".purple", {backgroundColor: "#28a92b"}, 0);


let links = gsap.utils.toArray("nav a");
links.forEach(a => {
  let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
          });
  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "bottom center",
    onToggle: self => self.isActive && setActive(a)
  });
  a.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
  });
});

function setActive(link) {
  links.forEach(el => el.classList.remove("active"));
  link.classList.add("active");
}