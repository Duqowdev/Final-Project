import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
	<div>
			<header className={styles.header}>
			
				<ul>
					<li>
						<a className={styles.logo} href="#">
						<img src="images/Logo.jpeg" alt=""/> 
						</a>
					</li>
					<li className='manu'>
						<a href="#">Mawadin kusoo dhawoow codeyta madaxweynaha somalia</a>
					</li>
				</ul>
			
			
			
			</header>
	</div>
  )
}

export default Header

