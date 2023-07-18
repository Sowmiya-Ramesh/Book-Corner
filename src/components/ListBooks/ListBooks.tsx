/*
 * File: ListBooks.tsx
 * Project: <<Book Corner>>
 * File Created: Sunday, 16th July 2023 11:53:51 am
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Tuesday, 18th July 2023 1:02:01 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './ListBooks.css'
import { useEffect, useState } from 'react';
import { BookService } from '../../service/book.service';
import Loader from '../../shared/Loader/Loader';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'black',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return { name, calories, fat, carbs, protein };
}

const tableHeading = [{ id: '1', label: 'Image' }, { id: '2', label: 'Book Name' }, { id: '3', label: 'Author' }, { id: '4', label: 'Available' }, { id: '5', label: 'Delete' }]

const ListBooks = () => {

    const [booksList, setBooksList] = useState<any>();
    const [loader, setLoader] = useState<boolean>(false);
    const listBooks = async () => {
        setLoader(true);
        try {
            const response = await BookService.getBookList();
            console.log(response.data.map((e) => e.bookName))
            setBooksList(response.data)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        listBooks()
    }, [])
    return (
        <>
            {loader && <Loader />}
            {
                !loader &&
                <TableContainer component={Paper} sx={{ margin: '24px', width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Table aria-label='customized table' className='tableContainer'>
                        <TableHead>
                            <TableRow>
                                {tableHeading.map((e) => {
                                    return (
                                        <StyledTableCell >{e.label}</StyledTableCell>)
                                })}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {booksList?.map((row) => {
                                return (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell scope='row'>
                                            <CardMedia
                                                component='img'
                                                height='35'
                                                style={{ borderRadius: '50%', width: '35px' }}
                                                image={row.image}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>{row.bookName}</StyledTableCell>
                                        <StyledTableCell>{row.author}</StyledTableCell>
                                        <StyledTableCell>{row.availability ? 'Yes' : 'No'}</StyledTableCell>
                                        <StyledTableCell> <Button variant='text'>Delete</Button></StyledTableCell>
                                    </StyledTableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            }</>
    );
}
export default ListBooks;