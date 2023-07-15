/*
 * File: axios.tsx
 * Project: <<Book Corner>>
 * File Created: Saturday, 15th July 2023 2:39:34 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 15th July 2023 5:37:06 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

import axios from "axios";

const instance = axios.create({
    baseURL: 'https://60fcdb7a1fa9e90017c70cd7.mockapi.io/',
    headers: { 'Content-Type': 'application/json'},
});

export default instance;
