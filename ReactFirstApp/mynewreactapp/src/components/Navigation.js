import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import DefaultPage from './DefaultPage'
import User from './User'

const Navigation = () => {

    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className='navbar-brand' to='/' element={<DefaultPage/>}>DefaulPage</Link>
                                <Link className='nav-link active' to='/Home' element={<Home />}>Home</Link>
                                <Link className='nav-link ' to='/About'>About</Link>
                                <Link className='nav-link ' to='/User'>User</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/Home' element={<Home />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/User' element={<User />}></Route>
                    <Route path='/User/:id' element={<User />}></Route>
                </Routes>
            </BrowserRouter>

            
            
        </>

    )
}

export default Navigation
