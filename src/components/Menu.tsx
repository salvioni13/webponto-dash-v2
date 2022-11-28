import { RiDashboardFill } from "react-icons/ri"

export const Menu = () => {

    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="" className="simple-text logo-mini">
                        @SG
                    </a>
                    <a href="" className="simple-text logo-normal">
                        System
                    </a>
                </div> 
                <ul className="nav">
                    <li className="active d-flex align-items-center">
                        <a className="d-flex align-items-center gap-2">

                            <RiDashboardFill className="font-size-1" />
                            <p className="m-0 p-0 font-size-1">Dashboard</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}



