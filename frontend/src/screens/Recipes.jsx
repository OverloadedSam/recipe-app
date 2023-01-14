import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import RecipeCard from '../components/RecipeCard';
import { useGetRecipesQuery } from '../state/features/apiSlice';

const Recipes = () => {
  const { isLoading, data, error } = useGetRecipesQuery();

  return (
    <Container>
      <Typography my={4} variant='h2' component='h1' textAlign='center'>
        Recipes
      </Typography>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert message={error?.data?.message || error.message} />
      ) : !data?.data?.length ? (
        <Alert message='There are currently no recipes to show' />
      ) : (
        <Grid container justifyContent='center' spacing={3} mb={5}>
          {data.data.map((recipe) => (
            <Grid item>
              <RecipeCard key={recipe._id} recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Recipes;
