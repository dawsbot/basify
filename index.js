/* eslint no-else-return:0 */
'use strict';
module.exports = function () {
  const argLength = arguments.length;
  const arg1 = arguments[0];
  const isArray = Array.isArray(arg1);

  if (typeof arg1 !== 'string' && !isArray) {
    throw new TypeError(`Expected a string or array, got ${typeof arg1}`);
  }
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }

  if (isArray) {
    return arg1.map(elem => {
      return `${elem.replace(/\.[^/.]+$/, '')}`;
    });
  } else {
    return `${arg1.replace(/\.[^/.]+$/, '')}`;
  }
};
