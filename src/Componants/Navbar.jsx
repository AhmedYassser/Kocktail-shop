import React from 'react'
import { Link } from 'react-router-dom'
import img from '../logo.svg'

function Navbar() {
    
    return (
        <>
            <nav>
                <section className="Nav-section">
                    <Link to="/">
                        <img src={img} alt='coctail' className='img-logo'/>
                    </Link>
                    <div>
                        <ul className="Links-section">
                            <li>
                                <Link to='/'>home</Link>
                            </li>
                            <li>
                                <Link to='/about'>about</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar