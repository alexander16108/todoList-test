const stringLength = (textString) => {
  if (typeof textString < 1 || typeof textString > 10) {
    throw Error;
  }
 return textString.length;
};
module.exports = stringLength;