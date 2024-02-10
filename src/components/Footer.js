import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {GitHub} from '@material-ui/icons';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
              <a href="https://www.linkedin.com/in/datphann/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
              </a>
              <a href="https://github.com/Datcomx2" target="_blank" rel="noopener noreferrer">
                  <GitHub />
              </a>
        </div>
        <p>&copy; 2024 DatPhan.com</p>
    </div>
  )
}

export default Footer