import './_sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import { Link } from 'react-router-dom'

import { useContext} from 'react'
import { DarkModeContext } from '../../context/darkModeContext'



const Sidebar = () => {

	const {dispatch} = useContext(DarkModeContext)
	
	return (
		<div className='sidebar'>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<div className='top'>
					<span className='logo'>VangAdmin</span>
				</div>
			</Link>

			<hr />
			<div className='center'>
				<ul>
					<p className='title'>Main</p>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<li>
							<DashboardIcon className='icon' />
							<span>Dashboard</span>
						</li>
					</Link>

					<p className='title'>Lists</p>
					<Link to='/users' style={{ textDecoration: 'none' }}>
						<li>
							<PersonOutlineOutlinedIcon className='icon' />
							<span>Users</span>
						</li>
					</Link>

					<Link to='/products' style={{ textDecoration: 'none' }}>
						<li>
							<StoreIcon className='icon' />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<CreditCardIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className='icon' />
						<span>Delivery</span>
					</li>

					<p className='title'>Useful</p>
					<li>
						<InsertChartIcon className='icon' />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsActiveIcon className='icon' />
						<span>Notifications</span>
					</li>

					<p className='title'>Service</p>
					<li>
						<SettingsSystemDaydreamIcon className='icon' />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className='icon' />
						<span>Logs</span>
					</li>
					<li>
						<SettingsApplicationsIcon className='icon' />
						<span>Settings</span>
					</li>

					<p className='title'>User</p>
					<li>
						<AccountCircleOutlinedIcon className='icon' />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppIcon className='icon' />
						<span>Log out</span>
					</li>
				</ul>
			</div>

			<div className='bottom'>
				<div className='colorOption' onClick={() => dispatch({type:"LIGHT"})}></div>
				<div className='colorOption' onClick={() => dispatch({type:"DARK"})}></div>
			</div>
		</div>
	)
}

export default Sidebar
