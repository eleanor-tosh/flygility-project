import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDogs, patchDog } from '../apiClient'
import { getByDisplayValue } from '@testing-library/react'

function EditDog() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { dog_id } = useParams()
  const displayDog = useSelector((state) => state.dogDetails)
  const [dogDetails, setDogDetails] = useState(displayDog)

  // ({
  //   dog_name: '',
  //   reg_name: '',
  //   owner_name: '',
  //   fly_num: '',
  //   DOB: '',
  //   height_mm: '',
  //   height_category: '',
  //   grade: '',
  // })

  console.log(displayDog)

  const selectedDog = displayDog.find((dog) => dog_id == dog.dog_id)
  if (!selectedDog) {
    return <div></div>
  }

  function handleChange(event) {
    console.log(event.target.value)
    // const { name, value } = event.target
    // setDogDetails((result) => {
    //   return { ...result, [name]: value }
    // })
    setDogDetails(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // dispatch(patchDog(dogDetails))
    navigate('/mydogs')
  }

  return (
    <div>
      <form>
        <h1>Edit Dog Details Form for {selectedDog.dog_name}</h1>

        <label>Dogs Name: </label>
        <input
          type="text"
          required
          name="dog_name"
          value={selectedDog.dog_name}
          onChange={handleChange}
        />

        <label>Dogs Registered Name: </label>
        <input
          type="text"
          name="reg_name"
          value={selectedDog.reg_name}
          onChange={handleChange}
        />

        <label>Owner Name: </label>
        <input
          type="text"
          required
          name="owner_name"
          value={selectedDog.owner_name}
          onChange={handleChange}
        />

        <label>Flygility Number: </label>
        <input
          type="integer"
          name="fly_num"
          value={selectedDog.fly_num}
          onChange={handleChange}
        />
        {/* 
        <label>DOB: </label>
        <input
          type="date"
          name="DOB"
          value={dogDetails.DOB}
          onChange={handleChange}
        /> */}

        <label>Height in mm: </label>
        <input
          type="integer"
          name="height_mm"
          value={selectedDog.height_mm}
          onChange={handleChange}
        />

        <label>Height Category: </label>
        <select
          type="text"
          required
          name="height_category"
          value={selectedDog.height_category}
          onChange={handleChange}
        >
          <option value="micro">micro</option>
          <option value="mini">mini</option>
          <option value="midi">midi</option>
          <option value="maxi">maxi</option>
        </select>

        <label>Grade: </label>
        <select
          type="text"
          required
          name="grade"
          value={selectedDog.grade}
          onChange={handleChange}
        >
          <option value="Beg-Int">Beg-Int</option>
          <option value="Int-Sen">Int-Sen</option>
          <option value="Sen-Adv">Sen-Adv</option>
        </select>
      </form>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  )
}

export default EditDog
