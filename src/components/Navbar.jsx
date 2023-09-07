import react_icon from '../assets/logo_niki.png'

export default function Navbar() {
    return(
        <nav>
            <img src={react_icon} className='nav--logo'/>
            <li className='nav--item1'>Niki's Facts</li>
            <li className='nav--item2'>React Project - 2</li>
        </nav>
    )
}