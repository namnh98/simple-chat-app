import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../services/firebase/config";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const history = useHistory();
  const handleFBLogin = () => {
    auth.signInWithPopup(fbProvider);
  };
  auth.onAuthStateChanged((user) => {
    console.log("user", user);
    if (user) {
      history.push("/chat");
    }
  });
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={2}>
            Simple Chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleFBLogin}
          >
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
