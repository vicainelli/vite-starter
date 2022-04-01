/**
 * @param {number} length
 * @returns {string}
 */
const hashid = (length = 8) => {
  return Math.random().toString(16).substr(2, length);
};

hashid(); // ?

export { hashid}