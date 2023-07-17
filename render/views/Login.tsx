import { IcCount } from "@/icons";
import { Container, Card, Row, Input, Spacer, Button, Text } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

export default function () {
  const CenterRow: React.FC<any> = ({ children }) => (
    <Row justify="center" align="center">
      {children}
      <Spacer y={3} />
    </Row>
  );

  return (
    <Card css={{ height: "calc(100vh - 24px)", width: "100vw", borderRadius: "unset" }}>
      <Container justify="center" alignItems="center">
        <Card.Header>
          <CenterRow>
            <Text
              size={30}
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              Folder Concept
            </Text>
          </CenterRow>
        </Card.Header>
        <Card.Body>
          <CenterRow>
            <Input clearable bordered placeholder="USERNAME" contentRight={<IcCount />} />
          </CenterRow>
          <CenterRow>
            <Input.Password clearable bordered placeholder="PASSWORD" />
          </CenterRow>
        </Card.Body>
        <Card.Footer isBlurred="{true}">
          <Row justify="space-around">
            <Link to={"/test"}>
              <Button color="primary" auto>
                登录
              </Button>
            </Link>
            <Button color="secondary" auto>
              注册
            </Button>
          </Row>
        </Card.Footer>
      </Container>
    </Card>
  );
}
