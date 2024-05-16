import { headerMenu, snsLink, searchKeyword } from "../../data/header";
import { Link } from 'react-router-dom';
import { AiFillShop } from "react-icons/ai";


const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em><AiFillShop /></em>
                    <span>what<br /> to wear<br /><i>youtube</i></span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenu.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='keyword'>
                    {searchKeyword.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href="{sns.url}" target="_blank" rel="noopener noreferrer" aria-label="{sns.title}">
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header >
    )
}

export default Header