/*
 * File: Books.tsx
 * Project: <<Blog>>
 * File Created: Saturday, 15th July 2023 12:26:38 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Saturday, 15th July 2023 2:53:30 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

import { useEffect } from "react";
import { BookService } from "../../service/book.service";

const Books = () =>{
    const listBooks = async() =>{
        try{
            const response = await BookService.getBookList();
            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        listBooks()
    },[])
    return(
        <>Books list here</>
    )
}

export default Books;