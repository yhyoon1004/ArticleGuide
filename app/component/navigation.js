'use client'
import {useState} from "react";

export default function Navigation({title}) {

    const [toggleActive, setToggleActive] = useState(false);
    const [userToggleActive, setUserToggleActive] = useState(false);
    const pageToggleHandler = (e) => {
        if(toggleActive){
            document.body.className ='sb-nav-fixed';
            setToggleActive(!toggleActive);
        }
        else{
            document.body.className = 'sb-nav-fixed sb-sidenav-toggled';
            setToggleActive(!toggleActive);
        }
    };
    const userToggleHandler = (e) => {
        if (userToggleActive) {
            document.querySelector('#navbarDropdown').classList.remove('show');
            document.querySelector('#userDropdown').classList.remove('show');;
            setUserToggleActive(!userToggleActive)
        } else {
            document.querySelector('#navbarDropdown').classList.add('show');
            document.querySelector('#userDropdown').classList.add('show');
            setUserToggleActive(!userToggleActive)
        }
    };

    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" href="/">
                    {title}
                </a>
                {/*Page SideBar Toggle*/}
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                        onClick={pageToggleHandler}
                        id="sidebarToggle"
                        href="#!">
                    <i className="fas fa-bars"></i>
                </button>

                {/*search bar*/}
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..."
                               aria-label="Search for..."
                               aria-describedby="btnNavbarSearch"/>
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i
                            className="fas fa-search"></i></button>
                    </div>
                </form>

                {/*login user form*/}
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4"
                    onClick={userToggleHandler}
                >
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end"id="userDropdown" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item"  href="#!">Settings</a></li>
                            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>

            </nav>
        </>
    )
}