import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CreatorIcon from '@mui/icons-material/Face5';
import TimeIcon from '@mui/icons-material/HistoryToggleOff';
import TickIcon from '@mui/icons-material/TaskAltOutlined';
import StepIcon from '@mui/icons-material/HubOutlined';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import { useParams } from 'react-router-dom';
import { useGetRecipeDetailsQuery } from '../state/features/apiSlice';

const RecipeDetails = () => {
  const { id } = useParams();

  const { isLoading, data, error } = useGetRecipeDetailsQuery(id);
  const { data: recipe } = data || {};

  return (
    <Container>
      {isLoading ? (
        <Loader mt={8} />
      ) : error ? (
        <Alert mt={8} message={error.data?.message || error.message} />
      ) : recipe ? (
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='center'
          spacing={3}
          mb={5}
          py={5}
        >
          <Paper sx={{ padding: 4, alignSelf: 'flex-start' }}>
            <Box
              mx='auto'
              borderRadius='10px'
              overflow='hidden'
              maxWidth='500px'
              mb={3}
            >
              <img
                width='100%'
                style={{ display: 'block', maxWidth: '500px' }}
                src={recipe.imageUrl}
                alt={recipe.name}
              />
            </Box>
            <Typography
              variant='h4'
              textAlign='center'
              color='secondary'
              component='div'
            >
              {recipe.name}
            </Typography>
            <Stack spacing={1} mt={2}>
              <Stack direction='row' spacing={2} color='grey'>
                <CreatorIcon color='primary' />
                <Typography variant='body1'>{recipe.creator.name}</Typography>
              </Stack>
              <Stack direction='row' spacing={2} color='grey'>
                <TimeIcon color='primary' />
                <Typography variant='body1'>
                  {new Date(recipe.createdAt).toLocaleString('en-IN')}
                </Typography>
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ padding: 4, alignSelf: 'flex-start' }}>
            <Typography
              variant='h4'
              component='div'
              color='secondary'
              gutterBottom
            >
              Description
            </Typography>
            <Typography variant='body1' mb={3}>
              {recipe.description}
            </Typography>

            <Typography
              variant='h4'
              component='div'
              color='secondary'
              gutterBottom
            >
              Ingredients
            </Typography>
            {recipe.ingredients.map((ingredient) => (
              <Stack
                key={ingredient._id}
                direction='row'
                spacing={2}
                color='grey'
                mb={1}
              >
                <TickIcon color='primary' />
                <Typography variant='body1' color='primary'>
                  {ingredient.item}
                </Typography>
                <Typography variant='body1'>
                  ({ingredient.amount} {ingredient.unit})
                </Typography>
              </Stack>
            ))}

            <Typography
              variant='h4'
              mt={3}
              component='div'
              color='secondary'
              gutterBottom
            >
              Preparation
            </Typography>
            {recipe.process.map((step, idx) => (
              <Stack
                id={step._id}
                direction='row'
                spacing={2}
                color='grey'
                mb={2}
              >
                <StepIcon color='primary' />
                <Typography variant='body1'>
                  <Box display='inline' fontWeight={500} color='primary.main'>
                    Step {idx + 1}
                  </Box>
                  - {step.step}
                </Typography>
              </Stack>
            ))}
          </Paper>
        </Stack>
      ) : null}
    </Container>
  );
};

export default RecipeDetails;
