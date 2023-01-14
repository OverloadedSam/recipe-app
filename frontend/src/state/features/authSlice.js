import { createSlice, combineReducers } from '@reduxjs/toolkit';
import auth from '../../services/auth';

const loggedInUser = auth.getCurrentUser();

const initialAuthState = {
  isLoggedIn: !!loggedInUser,
  user: loggedInUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
});

export default combineReducers({
  userLogin: authSlice.reducer,
});

/* SELECTORS */
export const isUserLoggedIn = (state) => state.auth.userLogin.isLoggedIn;
