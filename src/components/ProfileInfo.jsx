import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = ({ rowData }) => {
  return (
    <div className={styles.container}>
      <p>Profile info:</p>
      <p>Selected profile: <i>{rowData.firstName + ' ' + rowData.lastName}</i></p>
      <p>Description: <i>{rowData.description}</i></p>
      <p>Address: <i>{rowData.adress.streetAddress}</i></p>
      <p>City: <i>{rowData.adress.city}</i></p>
      <p>State: <i>{rowData.adress.state}</i></p>
      <p>Index: <i>{rowData.adress.zip}</i></p>
    </div>
  )
}

export default ProfileInfo