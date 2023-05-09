import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '@/assets/react.svg'

const Welcome = () => {
    return (
        <div>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1> Destructors </h1> <br />
            <Link to="/about"><h4>About us ...</h4></Link>
        </div>
    )
}

export default Welcome