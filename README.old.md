# react-github-finder

[UDEMY - React front to back 2019](https://www.udemy.com/modern-react-front-to-back/learn/lecture/14969756#bookmarks)
Brad Traversy

## My Notes

### PROPS are basically properties you can pass into a component from outside.

PROPTYPES is basically type checking. It will tell you if your prop should be a string, number, object, array, anything.<br>
Component Level State means that your state is contained within a single component. So, you create a component, you add a state to it, which later will be App Level State because you pass it in as props. <br><br>

### STATE is just a JS object.

Destructuring = pulling stuff out from that object

```
const { login, avatar_url, html_url } = this.state;
```

To add state to Class-based components, you can use a constructor (but not recommended) basically it is a function that will run when the component runs.

Create the Users Component that wraps all the UserItem Components, then the State will be within the Users Component and you will loop through all the users because it will be an array of users, and then output a UserItem for each one.
The way that you get the data into the UserItem is through props

### PASSING STATE THROUGH PROPS

map() is a high-order array method, it takes a function, a callback function. This function has a parameter that represents each user, then an arrow and for each user you want to render the UserItems component. The variable state (user) represents the entire single user object, and then you pass it as a prop to UserItem.

```
<UserItem key={user.id} user={user} />
```

KEY = whenever you have a list you also need to have a unique key to get rid of the wanring "Each child in a list should have a unique key prop".<br>

### STYLE

With JSX you can add inline style or you can set a variable to a styled object. You are going to write a variable userStyle inline, in this case you do not need double curly brackets.<br>

```
<div style={userStyle}></div>
```

Below the class you set the variable.

```
const userStyle = { ex. display: 'grid' }
```

to fetch = to retrieve = prendere, andare a prendere, riportare<br>
ex. Before fetching the actual data from GitHub...

### FUNCTIONAL COMPONENT: STATELESS

At the end of the project you will have all functional components, because after the introduction of hooks you can have state within functional components.<br>
But traditionally, before hooks, functional components were used for stateless components (if there was no state). While with class-based components you needed yo use state or lifecycle methods.<br>
Since UserItem and Navbar have no state, there is no reason for these components to be classes.<br>

ex. function UserItem {} || const UserItem = () => {}

Without using Class Component, you do not neet the "this" keyword, props are going to be passed as paramenter to the Function Component.

### HTTP requests & Updating State

At the beginning you have the users hard-coded as state inside the User component. But you want to address the User's state, to fetch the real users from the GitHub API, and to store them at App level state, in App.js, so you can easily sent state down to components through props.<br>
In the App's state you have 'users: []', that is an array of objects. You want to pass this state down, to Users Component, through props.

```
<Users loading={this.state.loading} users={this.state.users}/>
export class Users extends Component { render() { return (
  <div style={userStyle}> {this.props.users.map(user => ( <UserItem key={user.id} user={user} /> ))}
  </div> );}}
```

** FAST NOTES <br>
App has state, it is a class-based component. It passes its state to Users through props.<br>
Navbar has props, but no state: it is a functional component.<br>
UserItem has props, but no state: it is a functional component.<br>
Users has state, it is a class-based component. It passes its state to UserItem as props.<br>
Later, with hook, it will be possible to transform also Users in a functional component.<br> **

You declare the state in the App.js Class Component:

```
class App extends Component {
  state = { users: [] };
```

You pass the state as props to Users.js Component:

```
<Users users={this.state.users} />
```

In Users.js Component, you can use this state as props:

```
const Users = ({ users }) => {}
```

Then use componentDidMount() and axios.get('url')

## Spinner Component

LOADING: FALSE/TRUE and SPINNER - In the App's state you also have 'loading: false' because there is a moment in time before you actually get the data back. So while this is happening, while basically it is fetching and before, you want loading to be true, and then, as soon as it is fetched, you change it back to false. In your UI you can say: if this data is not loaded, then show us a spinner, if it is loaded, show the data. To change this state, you need "setState". <br>
You create a Spinner Component for the time in which the users' data have not been fetched yet. It is a functional component, an arrow function component

## Search Component and Events (onSubmit, onChange)

Create a Search Class Component for the searchbar. Use a <form> and two <input>:<br>

- one for the typed text<br>
- one for the Submit, styled like a button<br>
  When you have a form, you need to attach a state to the input:

```
state = { text: '' };
<input value={this.state.text} />
```

Since it is a controlled component, you should have an onChange event for when you type something:

```
<input name='text' onChange={this.onChange} />
onChange = e => this.setState({ [e.target.name]: e.target.value });
```

When you have forms, _ your form inputs are component level state _. <br>

```
<form onSubmit={this.onSubmit}>
  onSubmit = e => { e.preventDefault(); };
```

## Code & Resources

The final code for this project can be found in this Github repo:

https://github.com/bradtraversy/github-finder

Docs for the Github API:

https://developer.github.com/v3/

To Register Your Github App & Get Keys:

https://github.com/settings/applications/new

API Endpoints We Will Be Working With:

https://api.github.com/users

https://api.github.com/search/users?q=brad

https://api.github.com/users/bradtraversy

https://api.github.com/users/bradtraversy/repos
