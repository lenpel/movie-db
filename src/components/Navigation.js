import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
          <NavLink to='/'>Search</NavLink>
          <NavLink to='/detail'>MovieDetail</NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
        </div>
    )
}

export default Navigation
