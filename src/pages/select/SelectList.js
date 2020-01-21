import React from 'react'

const SelectList = props => {
  return (
    <div key={props.id}  style={styles.container}>
      <h1>Flavor:{props.val.flavor}</h1>
      <h2>Number:{props.val.num}</h2>
      <h3>Color:{props.val.color}</h3>
    </div>
  )
}
export default SelectList

const styles = {
  container: {
    padding: '2%',
    background: 'lightgrey',
    width: '40%',
    marginBottom: '2%',
    marginLeft: '2%'
  },
  navLi: {
    paddingRight: '2%'
  }
}