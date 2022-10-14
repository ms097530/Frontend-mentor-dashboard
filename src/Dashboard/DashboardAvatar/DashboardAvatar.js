import './DashboardAvatar.css'

export default function DashboardAvatar()
{
    return (
        <div class="Dashboard-avatar-panel Dashboard-panel rounded-corners">
            <div class="Dashboard-avatar-header flex align-items-center rounded-corners">
                <img class="rounded" src="https://imgs.search.brave.com/ziZomiQ62UTZPtR5RII5N70oEQSYZsfQoNtzy674f_I/rs:fit:768:768:1/g:ce/aHR0cHM6Ly93d3cu/bXVycmF5Z2xhc3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzEwL2F2YXRh/ci03Njh4NzY4Lmpw/ZWc" alt="avatar" width="64px" height="64px" />
                <div>
                    <h6>Text</h6>
                    <h3>Robert Lawson</h3>
                </div>
            </div>
            <div class="flex justify-space-evenly">
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </div>
        </div>
    )
}
