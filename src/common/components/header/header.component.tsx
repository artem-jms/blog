import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";
import clsx from "clsx";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {

    const navLinkClasses = ({isActive}: { isActive: boolean }) => clsx(
        'py-navItem', {
        'text-black/30 hover:text-black/60': !isActive,
        'text-black/80 hover:text-black/80': isActive
    })

    return (
        <header className={''}>
            <nav className={'px-4 py-4'}>
                <div className={'max-w-screen-xl flex justify-between mx-auto items-center'}>
                    <Link className={'font-titillium text-2xl mr-8 text-conduit-green'} to={'/'}>conduit</Link>
                    <ul className={'flex gap-x-4'}>
                        <li><NavLink className={navLinkClasses({isActive: true})} to={'/'}>Home</NavLink></li>
                        <li><NavLink className={navLinkClasses({isActive: false})} to={'/sign-in'}>Sign in</NavLink></li>
                        <li><NavLink className={navLinkClasses({isActive: false})} to={'/sign-up'}>Sign up</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};