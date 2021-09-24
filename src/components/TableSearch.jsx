import React, { useState } from 'react'
import styles from './TableSearch.module.css'

const TableSearch = ({ searchHandler }) => {
  const [value, setValue] = useState()

  const onValueChanged = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input className={styles.search} type='text' value={value} onChange={onValueChanged} placeholder='Search by name' onKeyDown={searchHandler} />
    </div>
  )
}

export default TableSearch