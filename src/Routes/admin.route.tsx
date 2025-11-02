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
import AdminAllTransaction from "../pages/Admin/AdminAllTransaction";
// import TermsOfService from "../pages/Common/settings/TermsOfService";
import ProfileSettingsPage from "../pages/Common/settings/Profile";
// import PrivacyAndPolicy from "../pages/Common/settings/PrivacyAndPolicy";
import AdminAllCvDispathc from "../pages/Admin/AdminAllCvDispathc";
import AdminAllPlacement from "../pages/Admin/AdminAllPlacement";
import AdminAllCandidates from "../pages/Admin/AdminAllCandidates";
import AdminAllJobBoard from "../pages/Admin/AdminAllJobBoard";
import AdminAllEmployer from "../pages/Admin/AdminAllEmployer";
// import CookiesPolicy from "../pages/Common/settings/CookiesPolicy";
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
    path: "all-employers",
    element: <AdminAllEmployer />,
    key: "all-employers",
    name: "Employers",
    icon: userLogo,
  },
  {
    path: "all-candidates",
    element: <AdminAllCandidates />,
    key: "all-candidates",
    name: "Candidates",
    icon: userLogo,
  },
  {
    path: "job-board",
    element: <AdminAllJobBoard />,
    key: "job-board",
    name: "Current Vancancies",
    icon: currentVacancies,
  },
  {
    path: "cv-dispatch",
    element: <AdminAllCvDispathc />,
    key: "cv-dispatch",
    name: "CV Dispatch",
    icon: cvDispatchLogo,
  },

  {
    path: "placement",
    element: <AdminAllPlacement />,
    key: "placement",
    name: "Placement",
    icon: placementLogo,
  },
  {
    path: "payment-received",
    element: <AdminAllTransaction />,
    key: "payment-received",
    name: "Payment Received",
    icon: earningLogo,
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
