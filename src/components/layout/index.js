import { Layout } from "antd";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        <Navbar />
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
