// eslint-disable-next-line consistent-return
const validate = (obj, propName, componentName) => {
  if (obj) {
    const hasMap = Object.prototype.hasOwnProperty.call(obj, 'map');
    const hasName = Object.prototype.hasOwnProperty.call(obj, 'name');
    const hasNext = Object.prototype.hasOwnProperty.call(obj, 'next');
    const hasStyles = Object.prototype.hasOwnProperty.call(obj, 'styles');

    // validate if it is an emotion object
    if (!hasMap || !hasName || !hasNext || !hasStyles) {
      const message = `Invalid prop ${propName} supplied to ${componentName}`;
      return new Error(message);
    }
  }
};

// eslint-disable-next-line consistent-return
export default (props, propName, componentName) => {
  const styles = props[propName];

  if (Array.isArray(styles)) {
    // feeling a bit nostalgic
    for (let i = 0; i < styles.length; i += 1) {
      const validation = validate(styles[i], propName, componentName);
      if (validation) return validation;
    }
  } else {
    return validate(styles, propName, componentName);
  }
};
