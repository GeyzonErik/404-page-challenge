import React from "react";
import {
  Button,
  Container,
  Creator,
  Content,
  Image,
  MainText,
  PageTitle,
  Text,
  Trademark,
  TextArea,
} from "../assets/UI/PageComponents";

function Error404Page() {
  return (
    <Container>
      <PageTitle> 404 not found </PageTitle>

      <Content>
        <Image src={require("../assets/Image/Scarecrow.png")} />
        <TextArea>
          <MainText>I have bad news for you</MainText>
          <Text>
            The page you are looking for might be removed or is temporarily
            unavailable
          </Text>
          <Button>Back to homepage</Button>
        </TextArea>
      </Content>

      <Trademark>
        created by{" "}
        <Creator href={"https://github.com/GeyzonErik"} taget="_blank">
          username
        </Creator>
        - devChallenges.io
      </Trademark>
    </Container>
  );
}

export default Error404Page;
