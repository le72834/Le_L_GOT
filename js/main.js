(() => {
  //variable stack here -> the elements you want to interact with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      closeButton = lightBox.querySelector(".close-button"),
      houseVideo = lightBox.querySelector("video"),
      currentHouseName = document.querySelector("h1"),
      houseDescription = document.querySelector(".house-info"),
      imageContainer = document.querySelector('#houseImages'),
      pauseButton = document.querySelector('#pause-play'),
      fullScreenButton = document.querySelector('#fullScreen'),
      timeBar = document.querySelector('#timeBar'),
      rewindButton = document.querySelector('#rewind'),
      muteButton = document.querySelector('#mute'),
      volumeBar = document.querySelector('#volume-bar');


// multidimensional array
  const houseData = [
    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

    ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`],

    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.

    The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

    ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.

    House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`],

    ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],

    ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. `],

    ["Targeryen", `House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.`],

    ["Frey", `House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after.`],

    ["Tyrell", `House Tyrell of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, and heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest.
    The Tyrell sigil is a golden rose on a pale green field. Their house words are "Growing Strong.`]

    ];

  //function go in the middle -> what do we want our app to do?

  function showLightBox() {
    setTimeout(() => {
    //show the lightbox
    //debugger;
    // retrieve the CSS class that matched the video name in the video folder
    let houseName = this.className.split(" ")[1];

    //capitalize the first letter of the house name with JavaScript
    //and then add the rest of the house name to it
    let newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);

    debugger;
    //show the lightbox on a click
    lightBox.classList.add("show-lightbox");
    //play the lightbox video when it opens
    let targetSource = `video/House-${newSource}.mp4`;

    houseVideo.src = targetSource;
    houseVideo.load();
    houseVideo.play();
    }, 3000);
  }

  function hideLightBox() {
    lightBox.classList.remove("show-lightbox");

    //stop and rewind the lightbox video when it closes
    houseVideo.pause();
    houseVideo.currentTime = 0;

  }

  function animateBanners() {

    //clicking on the shield should trigger an animation
    //figure out how far the banners should move with some simple match
    let offsetWidth = 600;

    let multiplier = this.dataset.offset;

    let newPosition = offsetWidth * multiplier;

    //debugger;
    //change the style right property to match the new position - where it needs to move to
    imageContainer.style.right = `${newPosition}px `;
    //imageContainer.style.right = newPosition + px;

    //use this variable to populate the h1 element on the page
    //change the house name
    currentHouseName.textContent = `House ${houseData[this.dataset.offset][0]}`;

    // this variable is pointing at the paragraph tag under the h1 -> this is the house description
    houseDescription.textContent = `${houseData[this.dataset.offset][1]}`;


  }



  function playPause() {

    if(houseVideo.paused == true) {
      houseVideo.play();
    }
    else {
      houseVideo.pause();
    }
  }
  function fullScreen() {
    if(houseVideo.requestFullScreen) {
      houseVideo.requestFullScreen();
    }
    else if (houseVideo.mozRequestFullScreen){
      houseVideo.mozRequestFullScreen(); //FireFox
    }
    else if (houseVideo.webkitRequestFullScreen){
      houseVideo.webkitRequestFullScreen(); //Chrome and Safari
    }
  }
  function rewind() {
    //the ! is a check for inequality (it means the condition is false)
   //also called a bang operator
   //if there is no matching audio element , then kill the function and do nothing
    //if(!houseVideo == ''){
    houseVideo.pause();
    houseVideo.currentTime = 0;
    houseVideo.play();
    //}
  }
  function muteUnmute() {
    if(houseVideo.muted) {
      houseVideo.muted = true;
      volumeBar.value = 0;
    }
    else {
      houseVideo.muted = false;
      houseVideo.volume = volumeBar.value;
    }
  }
  function volumeChange() {
    houseVideo.volume = volumeBar.value;
  }
  function timeSeek() {
    //Calculate the time
    var totalTime = houseVideo.duration * (timeBar.value / 100);

    //Update the video time
    houseVideo.currentTime = totalTime;
  }
  function timeUpdate() {
   var totalValue = houseVideo.currentTime * (100 / houseVideo.duration);
   timeBar.value = totalValue;
  }

  //event hadnling for our sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));
  // animate the banner on a click
  sigilButtons.forEach(button => button.addEventListener("click", animateBanners));


  //add some event handling for the lightbox close button
  houseVideo.addEventListener('ended', hideLightBox);
  closeButton.addEventListener('click', hideLightBox);

  //video event listeners

  pauseButton.addEventListener('click', playPause);
  houseVideo.addEventListener('click', playPause);
  fullScreenButton.addEventListener('click', fullScreen);
  rewindButton.addEventListener('click', rewind);
  muteButton.addEventListener('click', muteUnmute);
  volumeBar.addEventListener('change', volumeChange);
  timeBar.addEventListener('change', timeSeek);
  houseVideo.addEventListener('timeupdate', timeUpdate);




})();
