import { Input, Avatar, Col, Row, Dropdown, Space, theme, Layout } from "antd";
import useAuth from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;
const userOptions = [
  {
    label: "Profile",
    key: "0",
  },
  {
    label: "Logout",
    key: "1",
  },
];

const Navbar = () => {
  const {setToken} = useAuth();
  const navigate = useNavigate();
  const onClick = () => {
    setToken();
    navigate("/", { replace: true });
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Row>
        <Col
          flex="auto"
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <Input placeholder="Search Books" bordered={false} />
        </Col>
        <Col flex="none">
          <Dropdown menu={{ items: userOptions, onClick }} trigger={["click"]}>
            <Space
              size="middle"
              style={{
                paddingRight: "20px",
                paddingLeft: "20px",
                cursor: "pointer",
              }}
            >
              <Avatar size="large">Giz</Avatar>
              Gizwanda Bill is a cat.
            </Space>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
