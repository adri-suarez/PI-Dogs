import React from 'react'
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.container}>
    <input type='text' placeholder='Search a breed' onChange={(e) => console.log(e)} className={styles.input} />
    <button type='submit' onClick={(e) => console.log(e)} className={styles.button}>🐶🔍</button>
</div>
  )
}

export default SearchBar