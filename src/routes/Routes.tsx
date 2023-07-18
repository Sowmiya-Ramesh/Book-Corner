/*
 * File: Routes.tsx
 * Project: <<Book Corner>>
 * File Created: Saturday, 15th July 2023 12:29:21 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Sunday, 16th July 2023 11:55:28 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

import { ReactElement } from "react"
import Books from "../components/Books/Books"
import { Route, Routes } from "react-router-dom"
import AddBooks from "../components/AddBook/AddBooks"
import UpdateBook from "../components/UpdateBook/UpdateBook"
import HomePage from "../components/HomePage/HomePage"
import ListBooks from "../components/ListBooks/ListBooks"

export default (): ReactElement => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/books'} element={<Books />} />
            <Route path={'/list-books'} element={<ListBooks />} />
            <Route path={'/add-book'} element={<AddBooks />} />
            <Route path={'/update-book'} element={<UpdateBook />} />
        </Routes>
    )
} 