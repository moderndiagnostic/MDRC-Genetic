import { Outlet } from "react-router-dom";

const PageLayout = () => (
  <div className="page-mobile-layout overflow-x-hidden pt-28 lg:pt-0">
    <Outlet />
  </div>
);

export default PageLayout;
