import React from 'react'

const MultiList = props => {
  return (
    <div key={props.id} className="">
      <h1>{props.val.firstName}</h1>
      <h2>{props.val.lastName}</h2>
    </div>
  )
}
export default MultiList
