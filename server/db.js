const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = {
  getDogs,
  addDog,
  patchDog,
  getOwners,
  getShows,
  addShow,
  getEvents,
  deleteShow,
  patchOwner,
}

function getDogs(db = connection) {
  return db('dogs').select()
}

function getOwners(db = connection) {
  return db('owners').select()
}

function getShows(db = connection) {
  return db('show').select()
}

function getEvents(db = connection) {
  return db('events').select()
}

function addDog(dog, db = connection) {
  return db('dogs').insert(dog)
}

function addShow(show, db = connection) {
  return db('show').insert(show)
}

function deleteShow(show_id, db = connection) {
  return db('show').del().where('show_id', show_id)
}

function patchDog(
  dog_id,
  dog_name,
  reg_name,
  owner_name,
  fly_num,
  DOB,
  active,
  height_mm,
  height_category,
  grade,
  beg_points,
  int_points,
  sen_points,
  adv_points,
  db = connection
) {
  return db('dogs').where('dog_id', dog_id).update({
    dog_name,
    reg_name,
    owner_name,
    fly_num,
    DOB,
    active,
    height_mm,
    height_category,
    grade,
    beg_points,
    int_points,
    sen_points,
    adv_points,
  })
}

function patchOwner(
  owner_id,
  firstname,
  lastname,
  email,
  cell,
  club,
  started,
  db = connection
) {
  return db('owners').where('owner_id', owner_id).update({
    firstname,
    lastname,
    email,
    cell,
    club,
    started,
  })
}
