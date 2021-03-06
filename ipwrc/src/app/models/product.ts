class Product {
    private _name: string
    private _description: string
    private _price: number
    private _image: string
    private _slug: string
    private _id: string

    constructor(name: string, description: string, image: string, price: number, slug: string, id: string) {
        this._name = name
        this._description = description
        this._image = image
        this._price = price
        this._slug = slug
        this._id = id
    }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}

export { Product }
