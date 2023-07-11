import { Container, Card, Row, Avatar, Input, Spacer, Button, Text } from "@nextui-org/react";
import React from "react";

export default function () {
  const CenterRow: React.FC<any> = ({ children }) => (
    <Row justify="center" align="center">
      {children}
      <Spacer y={3} />
    </Row>
  );

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center" }}>
      <Container xs alignItems="center" justify="center">
        <Card>
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
            {/* <CenterRow>
              <Avatar size="xl" src="https://i.pravatar.cc/150?u=a042581f4e25056704b" color="warning" bordered />
            </CenterRow> */}
            {/* <Spacer y={1} /> */}
            <CenterRow>
              <Input placeholder="USERNAME" />
            </CenterRow>
            <CenterRow>
              <Input placeholder="PASSWORD" />
            </CenterRow>
          </Card.Body>
          <Card.Footer isBlurred="{true}">
            <Row justify="space-around">
              <Button color="secondary">登录</Button>
              <Button color="success">注册</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}
