import DashboardItem from './DashboardItem/DashboardItem'
import './DashboardItems.css'
import workIcon from '../../images/icon-work.svg'
import playIcon from '../../images/icon-play.svg'
import studyIcon from '../../images/icon-study.svg'
import exerciseIcon from '../../images/icon-exercise.svg'
import socialIcon from '../../images/icon-social.svg'
import selfCareIcon from '../../images/icon-self-care.svg'


export default function DashboardItems()
{
  return (
    <div className='Dashboard-items-grid'>
      <DashboardItem activityType={'Work'} icon={workIcon} currTime={32} prevTime={36} />
      <DashboardItem activityType={'Play'} icon={playIcon} currTime={10} prevTime={8} />
      <DashboardItem activityType={'Study'} icon={studyIcon} currTime={4} prevTime={7} />
      <DashboardItem activityType={'Exercise'} icon={exerciseIcon} currTime={4} prevTime={5} />
      <DashboardItem activityType={'Social'} icon={socialIcon} currTime={5} prevTime={10} />
      <DashboardItem activityType={'Self Care'} icon={selfCareIcon} currTime={2} prevTime={2} />
    </div>
  )
}
