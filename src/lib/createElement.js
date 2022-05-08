const createElement = (tag, attrs) => {
  const element = document.createElement(tag);

  if (attrs) {
    Object.keys(attrs).forEach((key) => {
      element.setAttribute(key, attrs[key]);
    });
  }

  return element;
};

export default createElement;
