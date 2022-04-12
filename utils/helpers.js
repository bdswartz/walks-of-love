module.exports = {
  getPetCardID: (event) => {
    const id = event.target.getAttribute("data-value");
    return id;
  },
};
