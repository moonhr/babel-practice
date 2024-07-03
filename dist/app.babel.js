"use strict";

function a() {
  var result = (arguments.length <= 0 ? undefined : arguments[0]) + (arguments.length <= 1 ? undefined : arguments[1]);
  var onemore = function onemore() {
    return result + 10;
  };
  return onemore();
}
