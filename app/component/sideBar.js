import Link from "next/link";

export default function SideBar() {

    return(
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">

                    {/* SideBar Menu items */}
                    <div className="sb-sidenav-menu">
                        <div className="nav">

                            <div className="sb-sidenav-menu-heading">Write</div>

                            <Link className="nav-link" href="/write">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                기사 작성
                            </Link>

                            <div className="sb-sidenav-menu-heading">views</div>

                            <Link className="nav-link collapsed" href="/article/internal" data-bs-toggle="collapse"
                               data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Article Guide 기사
                            </Link>

                            <Link className="nav-link collapsed" href="/article/external" data-bs-toggle="collapse"
                               data-bs-target="#collapseLayouts" aria-expanded="false"
                               aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                외부 언론사 기사
                            </Link>

                            <div className="sb-sidenav-menu-heading">my page</div>

                            <Link className="nav-link" href="/user/statistics">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-chart-area"></i>
                                </div>
                                내 통계
                            </Link>

                            <Link className="nav-link" href="/user/info">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-table"></i>
                                </div>
                                내 정보
                            </Link>
                        </div>
                    </div>


                    <div className="sb-sidenav-footer">
                        <div className="small">Support by :</div>
                        Yun Hwan
                    </div>
                </nav>
            </div>


        </>
    )
};