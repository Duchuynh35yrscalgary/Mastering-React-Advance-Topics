import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import Login from './context/Login';
import CartContext from './context/cartContext';

export default class App extends Component {
  handleLoggedin = (username) => {
    console.log('Getting the user: ' + username);
    const user = { name: 'Hector Valerio' };
    this.setState({ currentUser: user });
  };
  state = { currentUser: { name: null } };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedin,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}
