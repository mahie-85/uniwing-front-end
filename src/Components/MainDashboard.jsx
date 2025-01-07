import Sidebarleft from './Sidebarleft'
import Dashboard from './Dashboard'
import Sidebarrirght from './Sidebarright'

const MainDashboard = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "20vw" }}>
                <Sidebarleft />
            </div>
                <Dashboard />
            <div style={{ width: "20vw" }}>
                <Sidebarrirght />
            </div>
        </div>
    )
}

export default MainDashboard