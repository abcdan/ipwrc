module.exports = class Customer {
  constructor (firstName, lastName, phoneNumber, street, streetNumber, postalCode, province, user) {
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.street = street
    this.streetNumber = streetNumber
    this.postalCode = postalCode
    this.province = province
    this.user = user // Credits to lukas for this idea
  }

  get id () {
    return this.id
  }

  set id (id) {
    this.id = id
  }

  get user () {
    return this.user
  }

  set user (user) {
    this.user = user
  }

  get street () {
    return this.street
  }

  set street (street) {
    this.street = street
  }

  get streetNumber () {
    return this.streetNumber
  }

  set streetNumber (streetNumber) {
    this.streetNumber = streetNumber
  }

  get postalCode () {
    return this.postalCode
  }

  set postalCode (postalCode) {
    this.postalCode = postalCode
  }

  get firstName () {
    return this.firstName
  }

  set firstName (firstName) {
    this.firstName = firstName
  }

  get lastName () {
    return this.lastName
  }

  set lastName (lastName) {
    this.lastName = lastName
  }

  get email () {
    return this.email
  }

  set email (email) {
    this.email = email
  }

  get creationDate () {
    return this.creationDate
  }

  set creationDate (creationDate) {
    this.creationDate = creationDate
  }

  get phoneNumber () {
    return this.phoneNumber
  }

  set phoneNumber (phoneNumber) {
    this.phoneNumber = phoneNumber
  }

  get province () {
    return this.province
  }

  set province (province) {
    this.province = province
  }
}
