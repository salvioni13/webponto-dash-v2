import React, { useEffect, useState } from "react"
import { RiDashboardFill, RiRegisteredLine } from "react-icons/ri"
import { FiSettings } from "react-icons/fi"
import { authentication } from "../../redux/users/userSlicer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Sidebar from "../../components/Sidebar";
import  Topbar  from "../../components/Topbar";
import CSelector from "../../components/ComponentSelector";
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
    <div className="h-screen dark:bg-gray-900 relative flex">
      <Sidebar key="sidebar-nav"/>
      <Topbar key="topbar-profile"/>
      <CSelector />
    </div>
  )
}

export default AdminDashboard