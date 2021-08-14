import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../services/firebase/config";

const { Title } = Typography;

const fbProvider = firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFBLogin = () => {
    auth.signInWithPopup(fbProvider);
  };
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={2}>
            Simple Chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Facebook
          </Button>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleFBLogin}
          >
            Đăng nhập bằng Google
          </Button>
        </Col>
      </Row>
    </div>
  );
}
