import './DashboardItem.css'

export default function DashboardItem()
{
  return (
    <div class="Dashboard-item Dashboard-panel rounded-corners">
      <div class="Dashboard-item-inner rounded-corners">
        <div class="flex justify-space-between">
          <h3>Work</h3>
          <h5>. . .</h5>
        </div>
        <div class="flex justify-space-between">
          <h2>32 hrs</h2>
          <h5>Last week - 36 hrs</h5>
        </div>
      </div>
    </div>
  )
}
