const getElementIndex = (element) => {
  if (element.parentNode) {
    const children = element.parentNode.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i] === element) {
        console.log(i);
      }
    }
  }
};

export default getElementIndex;
