import React from 'react'
import styles from './Header.module.css'
import logo from '../../img/logo.svg'
import buyed from '../../img/buyed.svg'
import bg from '../../img/hero-4e005342.png'


function Header() {
  return (
    <div className={styles.header}>
        <nav>
            <img src={logo} alt="" />
            <img src={buyed} alt="Buyed" />
        </nav>
        <img src={bg} alt="" />
    </div>
  )
}

export default Header