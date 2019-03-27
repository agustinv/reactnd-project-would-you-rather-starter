import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <div className='container'>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' className='link-item' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' className='link-item' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' className='link-item' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
