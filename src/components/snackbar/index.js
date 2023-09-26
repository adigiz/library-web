import React from "react";
import { Alert, Space } from "antd";

const Snackbar = ({ message, type }) => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
  >
    <Alert description={message} type={type} closable />
  </Space>
);

export default Snackbar;
