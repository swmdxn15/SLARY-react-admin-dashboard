import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">slaryadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <li><PersonOutlineOutlinedIcon className="icon"/><span>Users</span></li>
          <li><StoreMallDirectoryOutlinedIcon className="icon"/><span>Products</span></li>
          <li><Inventory2OutlinedIcon className="icon"/><span>Orders</span></li>
          <li><LocalShippingOutlinedIcon className="icon"/><span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><AnalyticsOutlinedIcon className="icon"/><span>Stats</span></li>
          <li><NotificationsNoneOutlinedIcon className="icon"/><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><SettingsSystemDaydreamOutlinedIcon className="icon"/><span>System Health</span></li>
          <li><PsychologyOutlinedIcon className="icon"/><span>Logs</span></li>
          <li><SettingsApplicationsOutlinedIcon className="icon"/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className="icon"/><span>Profile</span></li>
          <li><LogoutOutlinedIcon className="icon"/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar;