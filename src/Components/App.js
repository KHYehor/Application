import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react';
import {useAuth0} from '../react-auth0-spa.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
  // useHistory,
  // useLocation,
} from 'react-router-dom';

export default function MenuExampleSecondaryPointing() {
  const [activeItem, setActiveItem] = useState('home');
  const all = useAuth0();
  const {isAuthenticated, loginWithRedirect, logout, loading} = all;
  console.dir(all, {showHidden: true});

  const handleItemClick = (e, {name}) => setActiveItem(name);
  const LogIn = () => (isAuthenticated ? logout() : loginWithRedirect({}));

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Router>
        <Menu pointing secondary>
          <Link to="/home">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="messages">
            <Menu.Item
              name="messages"
              active={activeItem === 'messages'}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/friends">
            <Menu.Item
              name="friends"
              active={activeItem === 'friends'}
              onClick={handleItemClick}
            />
          </Link>
          <Menu.Menu position="right">
            <Link to="">
              <Menu.Item
                name={isAuthenticated ? 'Log out' : 'Log in'}
                active={activeItem === 'login'}
                onClick={LogIn}
              />
            </Link>
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route path="/home">
            <h1>Привет, подстригись</h1>
          </Route>
          <Route path="/messages">
            <h1>Привет, подстригись</h1>
          </Route>
          <Route path="/friends">
            <h1>Привет, подстригись</h1>
          </Route>
          <Route path="/login">
            <h1>Привет, авторизированный</h1>
          </Route>
          <Route path="/logout">
            <h1>Привет, авторизируйся снова)</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
