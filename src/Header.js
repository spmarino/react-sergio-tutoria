import React from 'react'
import Nav from './Nav'

function Header() {
    const links = [
        "Familiar", "Coupe", "Camioneta"
    ]
    return (
        <div>
        <Nav links ={links} />
    </div>
    )
}

export default Header
