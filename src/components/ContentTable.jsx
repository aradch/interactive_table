import React from 'react'
import styles from './Table.module.css'

const ContentTable = (props) => {
  return (
    <>{props.data && props.data.map(item => (
      <tr className={styles.row} key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.adress.state}</td>
      </tr>
    ))}
    </>
  )
}

export default ContentTable