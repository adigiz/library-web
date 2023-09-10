import { Input, Avatar, Col, Row, Dropdown, Space, theme, Layout } from "antd";
const { Header } = Layout;
const userOptions = [
  {
    label: <a href="https://www.antgroup.com">Profile</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Logout</a>,
    key: "1",
  },
];

const Navbar = () => {
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
          <Input placeholder="Search Books" bordered={false} sty />
        </Col>
        <Col flex="none">
          <Dropdown menu={{ items: userOptions }} trigger={["click"]}>
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
