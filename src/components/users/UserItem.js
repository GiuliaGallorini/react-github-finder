import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;

// PROPS are basically properties you can pass into a component from outside
// PROPTYPES is basically type checking. It will tell you if your prop should be a string, number, object, array, anything.
// Component Level State means that your state is contained within a single component. So, you create a component, you add a state to it, which later will be App Level State because you pass it in as props.
// STATE is just a JS object
// Destructuring = pulling stuff out from that object
// const { login, avatar_url, html_url } = this.state;

// To add state to Class-based components, you can use a constructor (but not recommended) basically it is a function that will run when the component runs

// Create the Users Component that wraps all the UserItem Components, then the State will be within the Users Component and you will loop through all the users because it will be an array of users, and then output a UserItem for each one.
// The way that you get the data into the UserItem is through props

// PASSING STATE THROUGH PROPS
