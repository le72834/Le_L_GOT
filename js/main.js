(() => {
  //variable stack here -> the elements you want to interact with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      closeButton = lightBox.querySelector(".close-button"),
      houseVideo = lightBox.querySelector("video");

  //function go in the middle -> what do we want our app to do?

  function showLightBox() {
    //show the lightbox
    //debugger;
    lightBox.classList.add("show-lightbox");
    //play the lightbox video when it opens
    houseVideo.play();
  }

  function hideLightBox() {
    lightBox.classList.remove("show-lightbox");

    //sopt and rewind the lightbox video when it closes
    houseVideo.pause();
    houseVideo.currentTime = 0;

  }

  //event hadnling for our sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

  //add some event handling for the lightbox close button
  closeButton.addEventListener("click", hideLightBox);







})();
