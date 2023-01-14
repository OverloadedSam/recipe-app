import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const RecipeCard = ({ recipe }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={recipe.imageUrl}
          alt='green iguana'
        />
        <CardContent>
          <Typography variant='h5' color='secondary' component='div'>
            {recipe.name}
          </Typography>
          <Typography
            gutterBottom
            variant='subtitle2'
            color='secondary'
            component='div'
          >
            - By {recipe.creator.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {recipe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <Link
            to={`/recipe/${recipe._id}`}
            style={{
              display: 'inline-block',
              width: '100%',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            View
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
