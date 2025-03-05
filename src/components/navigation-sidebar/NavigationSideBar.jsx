import { HiOutlineStar } from "react-icons/hi";
import { MdOutlineFolderOpen, MdOutlineCheckBox } from "react-icons/md";
import { IoCaretDown } from "react-icons/io5";

import "./NavigationSideBar.css";

export default function NavigationSideBar() {
  return (
    <nav className="navigation-sidebar">
      <div className="sidebar-menu-box">
        <div className="sidebar-menu-header">
          <div className="sidebar-menu-title">
            <HiOutlineStar className="sidebar-menu-icon" />
            <h4 className="sidebar-menu-name poppins-bold">Favorites</h4>
          </div>
          <IoCaretDown className="caret-down" />
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item poppins-regular">My projects</li>
          <li className="sidebar-menu-item poppins-regular">My tasks</li>
          <li className="sidebar-menu-item poppins-regular">My teams tasks</li>
        </ul>
      </div>
      <div className="sidebar-menu-box">
        <div className="sidebar-menu-header">
          <div className="sidebar-menu-title">
            <MdOutlineFolderOpen className="sidebar-menu-icon" />
            <h4 className="sidebar-menu-name poppins-bold">Projects</h4>
          </div>
          <IoCaretDown className="caret-down" />
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item poppins-regular">Create new</li>
          <li className="sidebar-menu-item poppins-regular">All projects</li>
          <li className="sidebar-menu-item poppins-regular">Not started</li>
          <li className="sidebar-menu-item poppins-regular">In progress</li>
          <li className="sidebar-menu-item poppins-regular">Completed</li>
        </ul>
      </div>
      <div className="sidebar-menu-box">
        <div className="sidebar-menu-header">
          <div className="sidebar-menu-title">
            <MdOutlineCheckBox className="sidebar-menu-icon" />
            <h4 className="sidebar-menu-name poppins-bold">Tasks</h4>
          </div>
          <IoCaretDown className="caret-down" />
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item poppins-regular">Create new</li>
          <li className="sidebar-menu-item poppins-regular">All tasks</li>
          <li className="sidebar-menu-item poppins-regular">To do</li>
          <li className="sidebar-menu-item poppins-regular">Doing</li>
          <li className="sidebar-menu-item poppins-regular">Done</li>
        </ul>
      </div>
    </nav>
  );
}
