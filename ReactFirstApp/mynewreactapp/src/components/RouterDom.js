import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

const RouterDom = () => {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Link className='m-5' to='/Home'>Home Link</Link>
                    <Link className='m-5' to='/About'>About Link</Link>
                    <Routes>
                        <Route path='/Home' element={<Home />}>J</Route>
                        <Route path='/About' element={<About />}>K</Route>
                    </Routes>
                </BrowserRouter >
            </div >


        </>
    )
}

export default RouterDom
