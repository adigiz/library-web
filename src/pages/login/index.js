import React from "react";
import logo from "assets/library-logo.png";
import { Layout, Image, Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import axios from "axios";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_SITE}/auth/login`, data)
      .then((res) => {
        setToken(res.data.accessToken);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ display: "flex", flexBasis: 0 }}>
      <Layout style={{ width: "100%", overflow: "hidden", height: "100vh" }}>
        <Image
          height="auto"
          preview={false}
          src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
        />
      </Layout>
      <Layout
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ width: "500px", padding: "2rem" }}>
          <div style={{ marginBottom: "5rem" }}>
            <img src={logo} width={300}></img>
          </div>
          <Form
            size="large"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "black" }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Layout>
    </div>
  );
};
export default Login;
