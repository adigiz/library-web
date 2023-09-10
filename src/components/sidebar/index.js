import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  FireOutlined,
  UserOutlined,
  SkinOutlined,
} from "@ant-design/icons";

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
  getItem("Home", "hom", <AppstoreOutlined />),
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
  return (
    <Sider
      width={250}
      theme="light"
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <p
        style={{
          marginBottom: "50px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 800,
        }}
      >
        Libraryz
      </p>
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
