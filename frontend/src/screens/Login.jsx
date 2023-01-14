import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoginIcon from '@mui/icons-material/LockPersonRounded';
import Input from '../common/Input';
import auth from '../services/auth';
import schema from '../validations/login';
import { useLoginUserMutation } from '../state/features/apiSlice';
import { isUserLoggedIn } from '../state/features/authSlice';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isAlreadyLoggedIn = useSelector(isUserLoggedIn);
  const [loginUser, { isLoading, data, error }] = useLoginUserMutation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      userId: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isAlreadyLoggedIn) navigate('/');

    if (data) {
      auth.saveAuthToken(data.data.token);
      auth.saveUser(data.data);
      window.location = '/recipes';
    }
  }, [data, isAlreadyLoggedIn]);

  const onSubmit = (data) => loginUser(data);

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LoginIcon />
        </Avatar>
        <Typography component='h1' variant='h4'>
          Log In
        </Typography>
        {error && (
          <Typography
            color='red'
            variant='body1'
            textAlign='center'
            fontWeight={500}
            my={2}
          >
            {error.data?.message || error.error}
          </Typography>
        )}
        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Input
            control={control}
            error={errors?.userId?.message}
            disabled={isLoading}
            label='User ID'
            name='userId'
            autoComplete='username'
          />
          <Input
            control={control}
            error={errors?.password?.message}
            disabled={isLoading}
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            disabled={isLoading}
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? 'Please wait...' : 'Log in'}
          </Button>
          <Grid container>
            <Grid item xs>
              <MuiLink href='#' variant='body2'>
                Forgot password?
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink
                as={Link}
                to='/register'
                variant='body2'
                color={theme.palette.primary.main}
              >
                Don't have an account? Register
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
