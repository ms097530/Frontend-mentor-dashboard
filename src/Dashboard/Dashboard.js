import DashboardAvatar from './DashboardAvatar/DashboardAvatar'
import DashboardItems from './DashboardItems/DashboardItems'
import JRavatar from '../images/image-jeremy.png'
import './Dashboard.css'

export default function Dashboard()
{
    return (
        <div className='Dashboard'>
            <DashboardAvatar avatarSrc={JRavatar} username={'Jeremy Robson'} />
            <DashboardItems />
        </div>
    )
}
