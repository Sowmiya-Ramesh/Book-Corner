/*
 * File: Routes.tsx
 * Project: <<Blog>>
 * File Created: Saturday, 15th July 2023 12:29:21 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 15th July 2023 2:21:39 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

import { ReactElement } from "react"
import Books from "../components/Books/Books"
import { Route, Routes } from "react-router-dom"
import AddBooks from "../components/AddBook/AddBooks"
import UpdateBook from "../components/UpdateBook/UpdateBook"

export default (): ReactElement => {
    return (
        <Routes>
            <Route path={'/books'} element={<Books />} />
            <Route path={'/add-book'} element={<AddBooks />} />
            <Route path={'/update-book'} element={<UpdateBook />} />
        </Routes>
    )
}