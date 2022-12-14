import { getDogs, addDog, patchDog } from '../apiClient.js'

export const SET_DOGS = 'SET_DOGS'
export const ADD_DOG = 'ADD_DOG'
export const UPDATE_DOG = ' UPDATE_DOG'

export function setDogs(dogs) {
  return {
    type: SET_DOGS,
    payload: dogs,
  }
}

export function fetchDogs() {
  return (dispatch) => {
    return getDogs().then((dogs) => {
      dispatch(setDogs(dogs))
    })
  }
}

//ADD
export function submitDog(dogs) {
  return (dispatch) => {
    return addDog(dogs).then((dogs) => {
      dispatch(setDogs(dogs))
    })
  }
}

//EDIT DOG
export function updateDogDetails(dog) {
  return (dispatch) => {
    return patchDog(dog.dog_id, dog).then((dog) => {
      dispatch(patchDogDetails(dog))
    })
  }
}

export function patchDogDetails(dog) {
  return {
    type: UPDATE_DOG,
    payload: dog,
  }
}
