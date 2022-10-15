import './DashboardAvatar.css'

export default function DashboardAvatar({ avatarSrc, username })
{
    return (
        <div className="Dashboard-avatar-panel Dashboard-panel rounded-corners">
            <div className="Dashboard-avatar-header flex-max-1440 align-items-center rounded-corners">
                <img className="avatar-img rounded mb-3-xl" src={avatarSrc} alt="avatar" width="64px" height="64px" />
                <div>
                    <h6 className="Dashboard-avatar-preface opacity-light spacing-1 m-block-1 weight-light ">Report for</h6>
                    <h3 className="weight-light spacing-1 m-block-1 font-big-xl">{username}</h3>
                </div>
            </div>
            <div className="flex-max-1440 justify-space-evenly ms-3">
                <p className="opacity-light weight-light">Daily</p>
                <p className="weight-light">Weekly</p>
                <p className="opacity-light weight-light">Monthly</p>
            </div>
        </div>
    )
}
