function toFixedNumber(num, decimalPlaces, base) {
  let pow = Math.pow(base || 10, decimalPlaces);
  return Math.round(num * pow) / pow;
}

function Stopwatch() {
  let duration = 0;
  let start = 0;
  let end = 0;
  let counting = false;

  this.start = function () {
    if (!counting) {
      start = new Date().getTime();
      counting = true;
    } else {
      throw new Error("Stopwatch has already started.");
    }
  };

  this.stop = function () {
    if (counting) {
      end = new Date().getTime();
      duration += (end - start) / 1000;
      counting = false;
    } else {
      throw new Error("Stopwtach is not started.");
    }
  };

  this.reset = function () {
    duration = 0;
    start = 0;
    end = 0;
    counting = false;
  };

  Object.defineProperty(this, "duration", {
    get() {
      if (counting) {
        end = new Date().getTime();
        duration += (end - start) / 1000;
        start = end;
      }

      // return  Math.round(duration * 1e3) / 1e3;
      return toFixedNumber(duration, 3);
    },
  });
}
