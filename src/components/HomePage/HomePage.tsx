/*
 * File: HomePage.tsx
 * Project: <<Book Corner>>
 * File Created: Saturday, 15th July 2023 6:38:26 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 15th July 2023 7:59:39 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */
import { Typography } from '@mui/material';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () =>{

    return(
      <div className='homePage'>
      <Link to={'/books'} style={{ color: 'black', textDecoration: 'none' }}> <Typography className='title' variant='h3'>Book Corner</Typography></Link>     
      </div>
    )
}

export default HomePage;