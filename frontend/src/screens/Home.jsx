import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { isUserLoggedIn } from '../state/features/authSlice';

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isUserLoggedIn);

  return (
    <Hero className='hero'>
      <HeroContainer className='container'>
        <Typography variant='h2' component='h1' gutterBottom>
          Unleash Your Inner Chef
        </Typography>
        <Typography variant='body1' mb={4}>
          Unlock the Flavor of Cooking - with our delicious and easy-to-follow
          recipes. Discover delicious recipes, step by step instructions, and
          culinary inspiration
        </Typography>
        <Stack direction='row' spacing={2}>
          {isLoggedIn ? (
            <Button
              variant='contained'
              color='primary'
              onClick={() => navigate('/recipes')}
            >
              See Recipes
            </Button>
          ) : (
            <>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => navigate('login')}
              >
                Log In
              </Button>
              <Button variant='contained' onClick={() => navigate('register')}>
                Register
              </Button>
            </>
          )}
        </Stack>
      </HeroContainer>
    </Hero>
  );
};

export default Home;

const Hero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url('/assets/images/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  text-shadow: 0px 5px 10px 000000;
  height: 90vh;
  display: flex;
  align-items: center;
`;

const HeroContainer = styled(Container)`
  max-width: 50rem;
`;
