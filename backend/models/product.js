module.export = class Product {
  constructor (name, price, image) {
    this._image = image;
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }
  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }
}
