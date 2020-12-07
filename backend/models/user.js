module.exports = class User {
  constructor (email) {
    this.email = email
  }

  set isAdmin (isAdmin) {
    this.isAdmin = isAdmin
  }

  get isAdmin () {
    return this.isAdmin
  }

  get id () {
    return this.id
  }

  set id (id) {
    this.id = id
  }

  get email () {
    return this.email
  }

  set email (email) {
    this.email = email
  }

  get password () {
    return this.password
  }

  // TODO: Encyption logic
  set password (password) {
    this.password = password
  }
}