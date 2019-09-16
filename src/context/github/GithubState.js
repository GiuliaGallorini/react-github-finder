import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

// The following initial state is a global state for anything that has to do with Github, it includes all your actions.
const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  // In order to dispatch your reducer (you call an action, it will make a request to Github, gets a response and then you dispatch a type back to your reducer) you need to use the useReducer Hook here.
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
