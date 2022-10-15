import './DashboardItem.css'

export default function DashboardItem({ activityType, icon, currTime, prevTime })
{
  return (
    // adds className determined by activityType - enables using props to determine styling, all that is needed to change or add style is add/change appropriate className in DashboardItem.css
    <div className={"Dashboard-item Dashboard-panel rounded-corners " + activityType.toLowerCase().split(' ').join('-')}>
      <img className="Dashboard-item-icon" src={icon} alt={activityType + 'icon'} />
      <div className="Dashboard-item-inner rounded-corners">
        <div className="Dashboard-item-top flex justify-space-between">
          <h3 className='Dashboard-item-title weight-hvy'>{activityType}</h3>
          <h5 className="hoverable weight-bold">. . .</h5>
        </div>
        <div className="flex-max-1440 justify-space-between align-items-center">
          <h2 className='weight-light Dashboard-item-curr m-block-1 mt-3-xl'>{currTime}hrs</h2>
          <h5 className='opacity-light spacing-1 weight-md m-block-1'>Last Week - {prevTime}hrs</h5>
        </div>
      </div>
    </div>
  )
}
