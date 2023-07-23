/*
 * File: axios.tsx
 * Project: <<Book Corner>>
 * File Created: Saturday, 15th July 2023 2:39:34 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Sunday, 23rd July 2023 10:50:09 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_PATH,
    headers: { 'Content-Type': 'application/json' },
});

export default instance;
