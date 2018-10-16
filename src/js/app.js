var Bubbles = function(options) {
  options = extend({
    bubblesWrapper: document.querySelector(".bubbles"),
    bubbleAmount: 20,
    sizeRange: {
      min: 5,
      max: 100
    },
    opacityRange: {
      min: 0.1,
      max: 0.9
    }
  }, options);

  var count = 0;

  this.init = function() {
    createBubble();
  };

  var interval = setInterval(createBubble, 500);

  function createBubble() {
    if (count < options.bubbleAmount) {
      var bubble = document.createElement("div");

      var size = randomNumber(options.sizeRange.min, options.sizeRange.max);
      var opacity = randomNumber(options.opacityRange.min, options.opacityRange.max);

      var style = `opacity: ${opacity}; width: ${size}px; height: ${size}px; left: ${randomNumber(1, options.bubblesWrapper.offsetWidth - (size + 4))}px;`;

      bubble.setAttribute("style", style);
      options.bubblesWrapper.appendChild(bubble);
      count++;
    } else {
      clearInterval(interval);
    }

    function randomNumber(n1, n2) {
      return Math.random() * n2 + n1;
    }
  }

  function extend(defaults, options) {
    var extended = {};
    var prop;
    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }
    return extended;
  }
};

!(function() {
  if (document.querySelector(".bubbles")) {
    var Shuppet = new Bubbles();

    Shuppet.init();
  }

  document.querySelector(".menu-trigger").addEventListener("click", function() {
    var menu = document.querySelector(".main-nav.hide-for-large");

    if (menu.classList.contains("open-menu")) {
      menu.classList.remove("open-menu");
    } else {
      menu.classList.add("open-menu");
    }
  });
})();
