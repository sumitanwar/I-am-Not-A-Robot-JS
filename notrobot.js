const container = document.getElementById("container");
const verify = document.getElementById("btn");
const reset = document.getElementById("reset");
const message = document.getElementById("para");
let imageArr = [
  "imgs/img1.jpg",
  "imgs/img2.jpg",
  "imgs/img3.jpg",
  "imgs/img4.jpg",
  "imgs/img5.jpg",
];
let set = new Set();
let image = 0;
function randomImage() {
  let counter = 0;
  let flag = false;
  for (let i = 0; i < imageArr.length; i++) {
    random = Math.floor(Math.random() * imageArr.length);
    if (!set.has(imageArr[random])) {
      counter++;
      set.add(imageArr[random]);
      image = document.createElement("img");
      image.src = "/" + imageArr[random];
      container.appendChild(image);
      image.classList.add("images_class");
      image.id = `img${random + 1}`;
    } else {
      if (i == imageArr.length) {
        break;
      }
      --i;
    }
  }
  let random1 = Math.floor(Math.random() * imageArr.length);
  let resultImage = document.createElement("img");
  resultImage.src = "/" + imageArr[random1];
  container.appendChild(resultImage);
  resultImage.classList.add("images_class");
  resultImage.id = "img6";
  const image1 = document.getElementById("img1");
  const image2 = document.getElementById("img2");
  const image3 = document.getElementById("img3");
  const image4 = document.getElementById("img4");
  const image5 = document.getElementById("img5");
  const image6 = document.getElementById("img6");
  let selectioncount = 0;
  let value = 0;
  function click1() {
    value = 0;
    selectioncount++;
    image1.classList.add("imgclass");
    resetAppear();
  }
  function click2() {
    selectioncount++;
    value = 1;
    image2.classList.add("imgclass");
    resetAppear();
  }
  function click3() {
    selectioncount++;
    value = 2;
    image3.classList.add("imgclass");
    resetAppear();
  }
  function click4() {
    value = 3;
    selectioncount++;
    image4.classList.add("imgclass");
    resetAppear();
  }
  function click5() {
    selectioncount++;
    value = 4;
    image5.classList.add("imgclass");
    resetAppear();
  }
  function click6() {
    selectioncount++;
    flag = true;
    image6.classList.add("imgclass");
    resetAppear();
  }
  function resetAppear() {
    if (selectioncount > 0) {
      reset.style.visibility = "visible";
    }
    if (selectioncount > 1) {
      verifyAppear();
    }
  }
  function verification() {
    message.style.visibility = "visible";
    if (random1 == value && selectioncount == 2 && flag == true) {
      message.innerText = "You are a human. Congratulations!";
    } else {
      message.innerText =
        "We can't verify you as a human. You selected the non-identical tiles";
    }
  }
  function verifyAppear() {
    if (selectioncount == 2) {
      verify.style.visibility = "visible";
    }
    if (selectioncount > 2) {
      verify.style.visibility = "hidden";
    }
  }
  function resetselection() {
    message.style.visibility = "hidden";
    verify.style.visibility = "hidden";
    image1.classList.remove("imgclass");
    image2.classList.remove("imgclass");
    image3.classList.remove("imgclass");
    image4.classList.remove("imgclass");
    image5.classList.remove("imgclass");
    image6.classList.remove("imgclass");
    message.innerText = "";
    selectioncount = 0;
    reset.style.visibility = "hidden";
  }
  image1.addEventListener("click", click1);
  image2.addEventListener("click", click2);
  image3.addEventListener("click", click3);
  image4.addEventListener("click", click4);
  image5.addEventListener("click", click5);
  image6.addEventListener("click", click6);
  verify.addEventListener("click", verification);
  reset.addEventListener("click", resetselection);
}

window.onload = randomImage;
