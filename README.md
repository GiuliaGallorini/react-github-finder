# react-github-finder

[UDEMY - React front to back 2019](https://www.udemy.com/modern-react-front-to-back/learn/lecture/14969756#bookmarks)<br>
by Brad Traversy

## My Notes

### COMPONENTS

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.<br>
Conceptually, components are like JavaScript **functions**.<br>
They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.<br>

### PROPS

In React props is short for **properties**.<br>
They are single **values** or **objects** containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes.<br>

### STATE

The heart of every React component is its “state”, an object that determines how that component renders & behaves.<br>
In other words, “state” is what allows you to create components that are dynamic and interactive.

### LIFECYCLE METHODS

You can declare special methods on the component class to run some code when a component mounts and unmounts.<br>
These methods are called **“lifecycle methods”**.<br>
The **componentDidMount()** method runs after the component output has been rendered to the DOM. <br>

### What is the difference between state and props?

**props (short for “properties”) and state are both plain JavaScript objects**.<br>
While both hold information that influences the output of render, they are different in one important way:

- **props** get passed to the component (similar to function **parameters**)
- whereas **state** is managed within the component (similar to **variables** declared within a function).

### => Read also

- [Props vs State](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)<br>
- [React state vs props](https://lucybain.com/blog/2016/react-state-vs-pros/)<br>

### What does setState do?
**setState()** schedules an update to a component’s state object.<br>
When state changes, the component responds by re-rendering.

### STATE is just a JS object

Component Level State means that your state is contained within a single component. So, you create a component, you add a state to it, which later will be App Level State because you pass it in as props. <br>

To add state to Class-based components, you can use a constructor (but not recommended): basically it is a function that will run when the component runs.<br>

Create the Users Component that wraps all the UserItem Components, then the State will be within the Users Component and you will loop through all the users because it will be an array of users, and then output a UserItem for each one.<br>

The way that you get the data into the UserItem is through props.<br>

### PROPS are basically properties you can pass into a component from outside.

While PropType is basically type checking. It will tell you if your prop should be a string, number, object, array, anything.<br>

Destructuring = pulling stuff out from that object:<br>

```
const { login, avatar_url, html_url } = this.state;
```

### PASSING STATE THROUGH PROPS

map() is a high-order array method, it takes a function, a callback function. This function has a parameter that represents each user, then an arrow and for each user you want to render the UserItems component. The variable state (user) represents the entire single user object, and then you pass it as a prop to UserItem.<br>

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

### FUNCTIONAL COMPONENT: STATELESS

At the end of the project you will have all functional components, because after the introduction of hooks you can have state within functional components.<br>
But traditionally, before hooks, functional components were used for stateless components (if there was no state). While with class-based components you needed to use state or lifecycle methods.<br>
Since UserItem and Navbar have no state, there is no reason for these components to be classes.<br>

ex. function UserItem {} || const UserItem = () => {}

Without using Class Component, you do not need the "this" keyword, props are going to be passed as paramenter to the Function Component.

### HTTP requests & Updating State

At the beginning you have the users hard-coded as state inside the User component. But you want to address the User's state, to fetch the real users from the GitHub API, and to store them at App level state, in App.js, so you can easily send state down to components through props.<br>
In the App's state you have 'users: []', that is an array of objects. You want to pass this state down, to Users Component, through props.

```
<Users loading={this.state.loading} users={this.state.users}/>
export class Users extends Component { render() { return (
  <div style={userStyle}> {this.props.users.map(user => ( <UserItem key={user.id} user={user} /> ))}
  </div> );}}
```

## FAST NOTES <br>

**App has state, it is a class-based component. It passes its state to Users through props.**<br>
**Navbar has props, but no state: it is a functional component.**<br>
**UserItem has props, but no state: it is a functional component.**<br>
**Users has state, it is a class-based component. It passes its state to UserItem as props.**<br>
**Later, with hook, it will be possible to transform also Users in a functional component.**<br>

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

LOADING: FALSE/TRUE and SPINNER - In the App's state you also have 'loading: false' because there is a moment in time before you actually get the data back.<br>
So while this is happening, while basically it is fetching and before, you want loading to be true, and then, as soon as it is fetched, you change it back to false. In your UI you can say: if this data is not loaded, then show us a spinner, if it is loaded, show the data. To change this state, you need "setState". <br>
You create a Spinner Component for the time in which the users' data have not been fetched yet. It is a functional component, an arrow function component.<br>

to fetch = to retrieve = prendere, andare a prendere, riportare<br>
ex. Before fetching the actual data from GitHub...

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

When you have forms, your form inputs are component level state. <br>

```
<form onSubmit={this.onSubmit}>
  onSubmit = e => { e.preventDefault(); };
```

## react-router-dom

```
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<Switch>
  <Route exact path='/' render={props => (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
    )}
    />
  <Route exact path='/about' component={About} />
</Switch>
```

## Menu for Navbar Component

You do not want to use an <a> tag, because when you go ahead and the back, it clears the state. Instead, you want to use <Link> from react-router-dom:

```
import { Link } from 'react-router-dom';
<Link to='/'>Home</Link>
```

instead of

```
<a href='/'>Home</a>
```

## Hooks

Functions that let you "hook" into react state and lifecycle features from a function component.
Hooks allow you to use functional components that are slimmer, cleaner and easier to use.

- **useState** allows you to have states in functional components
- **useEffect** allows you to mimic lifecycle methods like componentDidMount or componentDidUpdate, allows to have side effects in your component
- **useContext** used with the context API, it makes very easy to bring in your context into any component
- **useReducer** used with the context API, it allows you to create a really nice Redux-like reducer without having to use something like Redux, basically it is a function that you can dispatch actions to manipulate your app level state and then it sends that state down to your components that need it.
- **useRef...** you will see later
- you can also create **custom hooks**!

## Implementing Context

**Redux** is needed for very large application, but the context API gives you a really nice solution for small to medium sized apps.<br>

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

## REACT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
