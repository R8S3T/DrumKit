

/* This works when adding id to audio tag (source eloquentjavascript.net)*/
  window.addEventListener("keydown", event => {
    if (event.key == "a") {
      document.getElementById("65").play();
    } else if (event.key == "s") {
        document.getElementById("83").play();
    } else if (event.key == "d") {
        document.getElementById("68").play();
    }
  });


