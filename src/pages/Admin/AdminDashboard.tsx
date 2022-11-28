import React, { useEffect, useState } from "react"
import { RiDashboardFill, RiRegisteredLine } from "react-icons/ri"
import { FiSettings } from "react-icons/fi"
import { Dropdown } from "react-bootstrap";
import { authentication } from "../../redux/users/userSlicer";
import { useAppDispatch } from "../../hooks";
import { useAppSelector } from "../../app/hooks";
const AdminDashboard = () => {

  const {Users: {loggedUser }} = useAppSelector((state)=> ({Users: state.Users}))
  const [configIsOpen, setConfigIsOpen] = useState<boolean>(false);

  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);

  const toggleProfile = () => setProfileIsOpen((prevState) => !prevState);
  const toggleSettings = () => setConfigIsOpen((prevState) => !prevState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!loggedUser || loggedUser === undefined)
    dispatch(authentication());
  }, [dispatch])

  const year = new Date().getFullYear();
  return (
    <>
      <div className="wrapper">
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
        <div className="main-panel">
          <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle d-inline">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <a className="navbar-brand" href="">
                  Dashboard
                </a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
              </button>
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ml-auto">
               
                  <li className={`dropdown nav-item ${profileIsOpen ? 'show' : ''}`}>
                    <a onClick={toggleProfile} className="dropdown-toggle nav-link" data-toggle="dropdown">
                      <div className="photo">
                        <img src="../assets/img/anime3.png" alt="Profile Photo" />
                      </div>
                      <b className="caret d-none d-lg-block d-xl-block"></b>
                      <p className="d-lg-none">
                        Log out
                      </p>
                    </a>
                    <ul className="dropdown-menu dropdown-navbar">
                      <li className="nav-link"><a href="" className="nav-item dropdown-item">Profile</a></li>
                      <li className="nav-link"><a href="" className="nav-item dropdown-item">Settings</a></li>
                      <li className="dropdown-divider"></li>
                      <li className="nav-link"><a href="" className="nav-item dropdown-item">Log out</a></li>
                    </ul>
                  </li>
                  <li className="separator d-lg-none"></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="modal modal-search fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="tim-icons icon-simple-remove"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-12">
                <div className="card card-chart">
                  <div className="card-header ">
                    <div className="row">
                      <div className="col-sm-6 text-left">
                        <h5 className="card-category">Total Shipments</h5>
                        <h2 className="card-title">Performance</h2>
                      </div>
                      <div className="col-sm-6">
                        <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
                          <label className="btn btn-sm btn-primary btn-simple active" id="0">
                            <input type="radio" name="options" />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Accounts</span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-single-02"></i>
                            </span>
                          </label>
                          <label className="btn btn-sm btn-primary btn-simple" id="1">
                            <input type="radio" className="d-none d-sm-none" name="options" />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Purchases</span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-gift-2"></i>
                            </span>
                          </label>
                          <label className="btn btn-sm btn-primary btn-simple" id="2">
                            <input type="radio" className="d-none" name="options" />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Sessions</span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-tap-02"></i>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <canvas id="chartBig1"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card card-chart">
                  <div className="card-header">
                    <h5 className="card-category">Total Shipments</h5>
                    <h3 className="card-title"><i className="tim-icons icon-bell-55 text-primary"></i> 763,215</h3>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <canvas id="chartLinePurple"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-chart">
                  <div className="card-header">
                    <h5 className="card-category">Daily Sales</h5>
                    <h3 className="card-title"><i className="tim-icons icon-delivery-fast text-info"></i> 3,500€</h3>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <canvas id="CountryChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-chart">
                  <div className="card-header">
                    <h5 className="card-category">Completed Tasks</h5>
                    <h3 className="card-title"><i className="tim-icons icon-send text-success"></i> 12,100K</h3>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <canvas id="chartLineGreen"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card card-tasks">
                  <div className="card-header ">
                    <h6 className="title d-inline">Tasks(5)</h6>
                    <p className="card-category d-inline">today</p>
                    <div className="dropdown">
                      <button type="button" className="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                        <i className="tim-icons icon-settings-gear-63"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#pablo">Action</a>
                        <a className="dropdown-item" href="#pablo">Another action</a>
                        <a className="dropdown-item" href="#pablo">Something else</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body ">
                    <div className="table-full-width table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Update the Documentation</p>
                              <p className="text-muted">Dwuamish Head, Seattle, WA 8:47 AM</p>
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" title="" className="btn btn-link" data-original-title="Edit Task">
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">GDPR Compliance</p>
                              <p className="text-muted">The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.</p>
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" title="" className="btn btn-link" data-original-title="Edit Task">
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Solve the issues</p>
                              <p className="text-muted">Fifty percent of all respondents said they would be more likely to shop at a company </p>
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" title="" className="btn btn-link" data-original-title="Edit Task">
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Release v2.0.0</p>
                              <p className="text-muted">Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM</p>
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" title="" className="btn btn-link" data-original-title="Edit Task">
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Export the processed files</p>
                              <p className="text-muted">The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs. </p>
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" title="" className="btn btn-link" data-original-title="Edit Task">
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <p className="title">Arival at export process</p>
                              <p className="text-muted">Capitol Hill, Seattle, WA 12:34 AM</p>
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" title="" className="btn btn-link" data-original-title="Edit Task">
                                <i className="tim-icons icon-pencil"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card ">
                  <div className="card-header">
                    <h4 className="card-title"> Simple Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table tablesorter " id="">
                        <thead className=" text-primary">
                          <tr>
                            <th>
                              Name
                            </th>
                            <th>
                              Country
                            </th>
                            <th>
                              City
                            </th>
                            <th className="text-center">
                              Salary
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Dakota Rice
                            </td>
                            <td>
                              Niger
                            </td>
                            <td>
                              Oud-Turnhout
                            </td>
                            <td className="text-center">
                              $36,738
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Minerva Hooper
                            </td>
                            <td>
                              Curaçao
                            </td>
                            <td>
                              Sinaai-Waas
                            </td>
                            <td className="text-center">
                              $23,789
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Sage Rodriguez
                            </td>
                            <td>
                              Netherlands
                            </td>
                            <td>
                              Baileux
                            </td>
                            <td className="text-center">
                              $56,142
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Philip Chaney
                            </td>
                            <td>
                              Korea, South
                            </td>
                            <td>
                              Overland Park
                            </td>
                            <td className="text-center">
                              $38,735
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Doris Greene
                            </td>
                            <td>
                              Malawi
                            </td>
                            <td>
                              Feldkirchen in Kärnten
                            </td>
                            <td className="text-center">
                              $63,542
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Mason Porter
                            </td>
                            <td>
                              Chile
                            </td>
                            <td>
                              Gloucester
                            </td>
                            <td className="text-center">
                              $78,615
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Jon Porter
                            </td>
                            <td>
                              Portugal
                            </td>
                            <td>
                              Gloucester
                            </td>
                            <td className="text-center">
                              $98,615
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
             
              <div className="copyright">
                <RiRegisteredLine />  {year} <i className="tim-icons icon-heart-2"></i> Powered by
                <a href="" target="_blank"> Salvioni</a> v2.0
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div className="fixed-plugin">
        <div className={`dropdown show-dropdown ${configIsOpen ? 'show' : ''} p-2`}>
          <a onClick={toggleSettings} data-toggle="dropdown" className="pe-auto">
            <FiSettings className="font-size-2" />
          </a>
          <ul className="dropdown-menu">
            <li className="header-title"> Sidebar Background</li>
            <li className="adjustments-line">
              <a href="" className="switch-trigger background-color">
                <div className="badge-colors text-center">
                  <span className="badge filter badge-primary active" data-color="primary"></span>
                  <span className="badge filter badge-info" data-color="blue"></span>
                  <span className="badge filter badge-success" data-color="green"></span>
                </div>
                <div className="clearfix"></div>
              </a>
            </li>
            <li className="adjustments-line text-center color-change">
              <span className="color-label">LIGHT MODE</span>
              <span className="badge light-badge mr-2"></span>
              <span className="badge dark-badge ml-2"></span>
              <span className="color-label">DARK MODE</span>
            </li>          
          </ul>
        </div>
      </div>
      <script src="../assets/js/core/jquery.min.js"></script>
      <script src="../assets/js/core/popper.min.js"></script>
      <script src="../assets/js/core/bootstrap.min.js"></script>
      <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
      <script src="../assets/js/plugins/chartjs.min.js"></script>
      <script src="../assets/js/plugins/bootstrap-notify.js"></script>
      <script src="../assets/js/black-dashboard.min.js?v=1.0.0"></script>
      <script src="../assets/demo/demo.js"></script>
      {/* <script>
                $(document).ready(function() {
                    $().ready(function () {
                        $sidebar = $('.sidebar');
                        $navbar = $('.navbar');
                        $main_panel = $('.main-panel');

                        $full_page = $('.full-page');

                        $sidebar_responsive = $('body > .navbar-collapse');
                        sidebar_mini_active = true;
                        white_color = false;

                        window_width = $(window).width();

                        fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();



                        $('.fixed-plugin a').click(function (event) {
                            if ($(this).hasClass('switch-trigger')) {
                                if (event.stopPropagation) {
                                    event.stopPropagation();
                                } else if (window.event) {
                                    window.event.cancelBubble = true;
                                }
                            }
                        });

                        $('.fixed-plugin .background-color span').click(function () {
                            $(this).siblings().removeClass('active');
                            $(this).addClass('active');

                            var new_color = $(this).data('color');

                            if ($sidebar.length != 0) {
                                $sidebar.attr('data', new_color);
                            }

                            if ($main_panel.length != 0) {
                                $main_panel.attr('data', new_color);
                            }

                            if ($full_page.length != 0) {
                                $full_page.attr('filter-color', new_color);
                            }

                            if ($sidebar_responsive.length != 0) {
                                $sidebar_responsive.attr('data', new_color);
                            }
                        });

                        $('.switch-sidebar-mini input').on("switchChange.bootstrapSwitch", function () {
                            var $btn = $(this);

                            if (sidebar_mini_active == true) {
                                $('body').removeClass('sidebar-mini');
                                sidebar_mini_active = false;
                                blackDashboard.showSidebarMessage('Sidebar mini deactivated...');
                            } else {
                                $('body').addClass('sidebar-mini');
                                sidebar_mini_active = true;
                                blackDashboard.showSidebarMessage('Sidebar mini activated...');
                            }

                            // we simulate the window Resize so the charts will get updated in realtime.
                            var simulateWindowResize = setInterval(function () {
                                window.dispatchEvent(new Event('resize'));
                            }, 180);

                            // we stop the simulation of Window Resize after the animations are completed
                            setTimeout(function () {
                                clearInterval(simulateWindowResize);
                            }, 1000);
                        });

                        $('.switch-change-color input').on("switchChange.bootstrapSwitch", function () {
                            var $btn = $(this);

                            if (white_color == true) {

                                $('body').addClass('change-background');
                                setTimeout(function () {
                                    $('body').removeClass('change-background');
                                    $('body').removeClass('white-content');
                                }, 900);
                                white_color = false;
                            } else {

                                $('body').addClass('change-background');
                                setTimeout(function () {
                                    $('body').removeClass('change-background');
                                    $('body').addClass('white-content');
                                }, 900);

                                white_color = true;
                            }


                        });

                        $('.light-badge').click(function () {
                            $('body').addClass('white-content');
                        });

                        $('.dark-badge').click(function () {
                            $('body').removeClass('white-content');
                        });
                    });
    });
            </script>
            <script>
                $(document).ready(function() {
                    // Javascript method's body can be found in assets/js/demos.js
                    demo.initDashboardPageCharts();

    });
            </script>
            <script src="https://cdn.trackjs.com/agent/v3/latest/t.js"></script>
            <script>
                window.TrackJS &&
                TrackJS.install({
                    token: "ee6fab19c5a04ac1a32a645abde4613a",
                application: "black-dashboard-free"
      });
            </script> */}

    </>
  )
}

export default AdminDashboard