import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ot from '../assets/ot.jpg'
import campnou from '../assets/campnou.jpg'
import etihad from '../assets/etihad.jpg'
import anfield from '../assets/anfield.jpeg'
import santiago from '../assets/santiago.jpeg'
import klopp from '../assets/klop.jpeg'
import ole from '../assets/ole.jpg'
import pep from '../assets/pep.jpg'
import zidane from '../assets/zidane.jpg'
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

const items = [
  {
    name: 'Bruno Fernandez',
    hero: ot,
    coach: 'Ole gunner',
    picture: ole
  },
  {
    name: 'Leo Messi',
    hero: campnou,
    coach: 'Pep Guadiola',
    picture: pep
  },
  {
    name: 'Christiano Ronaldo',
    hero: santiago,
    coach: 'Zinedine Zidane',
    picture: zidane
  },
  {
    name: 'Mo Salah',
    hero: anfield,
    coach: 'Jurgen Klopp',
    picture: klopp
  },
  {
    name: 'Kevin Debryne',
    hero: etihad,
    coach: 'Pep Guadiola',
    picture: pep
  },
]

function CardContentainer() {
  const classes = useStyles();

  return (
    <div>
        <Container className={classes.blogsContainer} maxWidth="lg">
            <Typography variant="h4" className={classes.blogTitle}>
                Articles
            </Typography>
            <Grid container spacing={3}>
                {items.map(item => {
                    return (
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={item.hero}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    { item.name }
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={item.picture} />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                    {item.coach}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                );
            })}
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} />
            </Box>
        </Container>
    </div>
  );
}

export default CardContentainer;
