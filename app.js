const pics = document.querySelectorAll(".wrapper_image");
const gallery = document.querySelector(".gallery");
const iconClose = document.querySelector(".gallery_close i");
const galleryImg = document.querySelector(".gallery .gallery_img img");
const galleryNext = document.querySelector(".gallery_next i");
const galleryPre = document.querySelector(".gallery_pre i");
const currentPage = document.querySelector(".gallery_page");
let currentIndex = 0;

function toggleImage(imgSrc, index) {
    console.log(imgSrc)
    console.log(index)
  if (index|| index===0) {
    currentIndex = index;
    galleryImg.setAttribute("src", imgSrc);
    currentPage.innerHTML = `${index + 1}/${pics.length}`;
  }

  gallery.classList.toggle("show");
}

function control(type) {
  if (type === "next") {
    currentIndex = (currentIndex + 1) % pics.length;
  } else {
    currentIndex =
      currentIndex - 1 === -1
        ? pics.length - 1
        : (currentIndex - 1) % pics.length;
  }

  const imgSrc =
    pics[currentIndex % pics.length].childNodes[1].getAttribute("src");
  galleryImg.setAttribute("src", imgSrc);
  currentPage.innerHTML = `${currentIndex + 1}/${pics.length}`;
}

pics.forEach((pic, index) => {
  const imgSrc = pic.childNodes[1].getAttribute("src");
  pic.addEventListener("click", () => toggleImage(imgSrc, index));
});

iconClose.addEventListener("click", toggleImage);
galleryNext.addEventListener("click", () => control("next"));
galleryPre.addEventListener("click", () => control("pre"));
document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 27){
        toggleImage()
    }
})
