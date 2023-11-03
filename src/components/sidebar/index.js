import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  FireOutlined,
  UserOutlined,
  SkinOutlined,
} from "@ant-design/icons";
import logo from "assets/library-logo.png";
import icon from "assets/library-icon.png";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  {
    key: "dis",
    icon: null,
    children: null,
    label: "Discover",
    disabled: true,
  },
  getItem("Home", "hom", <Link to={"/"}><AppstoreOutlined /></Link>),
  getItem("Recently Added", "rec", <FireOutlined />),
  {
    type: "divider",
  },
  {
    key: "lib",
    icon: null,
    children: null,
    label: "Library",
    disabled: true,
  },
  getItem("Authors", "aut", <UserOutlined />),
  getItem("Genres", "gen", <SkinOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const logoSrc = collapsed ? icon : logo;
  const logoWidth = collapsed ? "40px" : "150px";
  const logoStyle = collapsed ? null : { marginLeft: "20px" };
  return (
    <Sider
      style={{ zIndex: 999 }}
      zeroWidthTriggerStyle={{ top: "50px"}}
      width={250}
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: collapsed ? "center" : "left",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Link to="/">
          <img src={logoSrc} width={logoWidth} style={logoStyle} />
        </Link>
      </div>
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
