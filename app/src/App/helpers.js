export const sortBy = (key, order='asc') => {
  return function(a, b) {
    // if property doesn't exist on either object
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0; 
    }

    const varA = (typeof a[key] === 'string') ? 
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? 
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (order === 'desc') ? (comparison * -1) : comparison;
  };
};


export const uniqBy = (accumulator, current) => {
  const length = accumulator.length;
  if (length === 0 || accumulator[length - 1].id !== current.id) {
    accumulator.push(current);
  }
  return accumulator;
};


export const flattenArray = (array, property) => {
  return [].concat.apply([], array.map(obj => obj[property]));
};


/**
 * CustomEvent polyfill for IE
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
 * @param {String} event - Event name
 * @param {Object} params - CustomEvent options
 */

export const customEventPolyfill = () => {
  if (typeof window.CustomEvent === 'function') return false;

  function CustomEvent( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
};


// export const generateArrFromObjectKeys = obj => {
//   const array = [];
//   Object.values(obj).forEach(value => {
//     if (value) {
//       choices.push(value);
//     }
//   });
//   return array;
// };
