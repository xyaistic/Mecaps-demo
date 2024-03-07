import React from 'react'
import { useParams } from 'react-router-dom'
import UseRefConcept from './UseRefConcept'
import ClassComp from './ClassComp'

const User = () => {

    const {id}=useParams()
    // console.log(id)
  return (
    <div>
      {/* <h1>User Page {id}</h1> */}

      {/* <UseRefConcept/> */}
      <ClassComp/>
    </div>
  )
}

export default User
