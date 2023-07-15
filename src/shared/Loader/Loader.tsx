/*
 * File: Loader.tsx
 * Project: <<Book Corner>>
 * File Created: Saturday, 15th July 2023 9:05:19 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 15th July 2023 9:06:43 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */
import './Loader.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Loader = () => {
    return (
        <Box className='loaderBox'>
            <LinearProgress className='loader' />
        </Box>
    )
}

export default Loader;