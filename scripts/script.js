document.addEventListener("DOMContentLoaded", function () {
  const pianoContainer = document.getElementById("piano-container-1");
  const musicPlayer = document.getElementById("music-player");

  if (!pianoContainer || !musicPlayer || typeof SC === "undefined") {
    return;
  }

  const widget = SC.Widget(musicPlayer);
  let widgetIsReady = false;

  widget.bind(SC.Widget.Events.READY, function () {
    widgetIsReady = true;
    widget.setVolume(40);
  });

  pianoContainer.addEventListener("click", function () {
    if (!widgetIsReady) {
      return;
    }

    widget.toggle();
  });
});
