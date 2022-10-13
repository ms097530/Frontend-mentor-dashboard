import DashboardAvatar from './DashboardAvatar/DashboardAvatar'
import DashboardItems from './DashboardItems/DashboardItems'
import './Dashboard.css'

export default function Dashboard()
{
    return (
        <div className='Dashboard'>
            <DashboardAvatar />
            <DashboardItems />
        </div>
    )
}
