import { Input, Avatar, Col, Row, Dropdown, Space, theme, Layout } from "antd";
import useAuth from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./index.css"
const { Header } = Layout;
const userOptions = [
  {
    label: "Logout",
    key: "0",
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
        </Col>
        <Col flex="none" >
          <Dropdown menu={{ items: userOptions, onClick }} trigger={["click"]}>
            <Space
              size="middle"
              className="avatar-container"
            >
              Gizwanda
              <Avatar size="large">Giz</Avatar>
            </Space>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
