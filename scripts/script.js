document.addEventListener("DOMContentLoaded", function () {
  const guitarContainer = document.getElementById("guitar-container-1");
  const musicPlayer = document.getElementById("music-player");

  if (!guitarContainer || !musicPlayer || typeof SC === "undefined") {
    return;
  }

  const widget = SC.Widget(musicPlayer);
  let widgetIsReady = false;

  widget.bind(SC.Widget.Events.READY, function () {
    widgetIsReady = true;
    widget.setVolume(40);
  });

  guitarContainer.addEventListener("click", function () {
    if (!widgetIsReady) {
      return;
    }

    widget.toggle();
  });
});
