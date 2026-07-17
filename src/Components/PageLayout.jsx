import { Outlet } from "react-router-dom";

const PageLayout = () => (
  <div className="page-mobile-layout overflow-x-hidden pt-[6.25rem] lg:pt-0">
    <Outlet />
  </div>
);

export default PageLayout;
