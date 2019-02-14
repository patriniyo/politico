class Validator {
  containProperties(data, properties) {
    const emptyProperty = properties.find(property => {
      return data.hasOwnProperty(property);
    });
    return emptyProperty;
  }

  stringValidator() {

  }
}

export default new Validator();
