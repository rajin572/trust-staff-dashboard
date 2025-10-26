//* ------------------ICONS------------------
import dashboardLogo from "/images/dashboard-logo/dashboard.svg";
import userLogo from "/images/dashboard-logo/user.svg";
import earningLogo from "/images/dashboard-logo/earning.svg";
import currentVacancies from "/images/dashboard-logo/currentVacancies.svg";
import cvDispatchLogo from "/images/dashboard-logo/cvDispatch.svg";
import messageLogo from "/images/dashboard-logo/messageLogo.svg";
import placementLogo from "/images/dashboard-logo/placement.svg";
import settingsLogo from "/images/dashboard-logo/settings.svg";

//* ------------------IMPORT COMPONENTS------------------
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ProfileSettingsPage from "../pages/Common/settings/Profile";
import Notifications from "../pages/Common/Notifications";


export const adminPaths = [
  {
    path: "overview",
    element: <AdminDashboard />,
    key: "overview",
    name: "Dashboard",
    icon: dashboardLogo,
  },
  {
    path: "profile",
    element: <ProfileSettingsPage />,
    key: "profile",
    name: "Profile",
    icon: settingsLogo,
  },
  {
    path: "notifications",
    element: <Notifications />,
    key: "notifications",
  },
];
