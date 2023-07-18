/*
 * File: Books.tsx
 * Project: <<Book Corner>>
 * File Created: Saturday, 15th July 2023 12:26:38 pm
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Sunday, 16th July 2023 12:07:58 pm
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */

import { useEffect, useState } from 'react';
import { BookService } from '../../service/book.service';
import { Tooltip, makeStyles } from '@material-ui/core';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Books.css';
import Loader from '../../shared/Loader/Loader';

// TODO: Tool tip
//TODO: type
//snackbar, sorting, import name sorting,pagination
const useStyles = makeStyles(() => ({
  toolTip: {
    color: '#776d5a',
  },
}));

const Books = () => {
  const classes = useStyles();
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
  console.log(booksList?.map((e) => e.bookName))

  console.log(booksList)
  return (
    <>
      {loader && <Loader />}
      {!loader && <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {booksList?.map((e) => {
          return (
            <Grid item key={e.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }} key={e.id}>
                <CardHeader
                  title={e.bookName}
                  subheader={e.author}
                />
                <CardMedia
                  component='img'
                  height='194'
                  image={e.image}
                  alt='book'
                />
                <CardContent className='cardContent'>
                  <Tooltip title={e.description} arrow classes={{ tooltip: classes.customTooltip }}>
                    <Typography variant='body2'>
                      {e.description}
                    </Typography>
                  </Tooltip>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>)
        })}
      </Grid>}
    </>
  )
}

export default Books;