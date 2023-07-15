/*
 * File: book.service.tsx
 * Project: <<Blog>>
 * File Created: Saturday, 15th July 2023 2:35:36 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 15th July 2023 2:57:21 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

import axios from "../core/axios"
import { ApiConstants } from "./api-constants"

export class BookService {
    static getBookList = async():Promise<any> => {
        return(
            await axios.get(ApiConstants.BOOKS_API.LIST_BOOKS.URL())
        )
    }
}