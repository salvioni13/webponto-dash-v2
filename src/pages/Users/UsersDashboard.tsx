import React, { useState } from "react"
import { RiDashboardFill, RiRegisteredLine } from "react-icons/ri"
import { FiSettings } from "react-icons/fi"
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import CSelector from "../../components/ComponentSelector";
const UsersDashboard = () => {
  const [configIsOpen, setConfigIsOpen] = useState<boolean>(false);

  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);

  const toggleProfile = () => setProfileIsOpen((prevState) => !prevState);
  const toggleSettings = () => setConfigIsOpen((prevState) => !prevState);

  const year = new Date().getFullYear();
  return (
    <div className="h-screen dark:bg-gray-900 relative flex">
      <Sidebar key="sidebar-nav" />
      <Topbar key="topbar-profile" />
      <CSelector />
    </div>
  )
}

export default UsersDashboard