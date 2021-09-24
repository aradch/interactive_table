import React from 'react'
import styles from './FilterState.module.css'

const FilterState = ({ filterStateHandler }) => {
  return (
    <select onChange={filterStateHandler} className={styles.select} >
      <option disabled selected>Filter by state</option>
      <option value='WI'>WI</option>
      <option value='TN'>TN</option>
      <option value='FL'>FL</option>
      <option value='NE'>NE</option>
    </select>
  )
}

export default FilterState