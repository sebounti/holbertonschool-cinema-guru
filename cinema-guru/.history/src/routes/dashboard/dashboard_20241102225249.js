import "./dashboard.css";
import SideBar from "../../components/navigation/SideBar";
import Header from "../../components/navigation/Header";
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard-container">
      <Router>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div>
          <SideBar />
          <main>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/favorites" element={<Favorites />} />
              <Route exact path="/watchlater" element={<WatchLater />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
