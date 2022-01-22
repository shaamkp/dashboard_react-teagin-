import React from "react";
import styled from "styled-components";
import chatImage from "../assets/images/userImage.png";

function Chatbox({ active }) {
  return (
    <>
      <Body className={active ? "small" : "window"}>
        <Left>
          <ChatList>
            <ChatUser>
              <ChatUserTop>
                <ImageContainer>
                  <ChatImage src={chatImage} alt="Image" />
                </ImageContainer>
                <ChatName>Lindsey Stroud</ChatName>
                <ChatDate>30 Dec 2018, 12.48</ChatDate>
              </ChatUserTop>
              <ChatUserBottom>
                <Chat>Your idea for this application is nice!</Chat>
                <ChatNum>1</ChatNum>
              </ChatUserBottom>
            </ChatUser>

            <ChatUser>
              <ChatUserTop>
                <ImageContainer>
                  <ChatImage src={chatImage} alt="Image" />
                </ImageContainer>
                <ChatName>Lindsey Stroud</ChatName>
                <ChatDate>30 Dec 2018, 12.48</ChatDate>
              </ChatUserTop>
              <ChatUserBottom>
                <Chat>Your idea for this application is nice!</Chat>
                <ChatNum>1</ChatNum>
              </ChatUserBottom>
            </ChatUser>

            <ChatUser>
              <ChatUserTop>
                <ImageContainer>
                  <ChatImage src={chatImage} alt="Image" />
                </ImageContainer>
                <ChatName>Lindsey Stroud</ChatName>
                <ChatDate>30 Dec 2018, 12.48</ChatDate>
              </ChatUserTop>
              <ChatUserBottom>
                <Chat>Your idea for this application is nice!</Chat>
                <ChatNum>1</ChatNum>
              </ChatUserBottom>
            </ChatUser>

            <ChatUser>
              <ChatUserTop>
                <ImageContainer>
                  <ChatImage src={chatImage} alt="Image" />
                </ImageContainer>
                <ChatName>Lindsey Stroud</ChatName>
                <ChatDate>30 Dec 2018, 12.48</ChatDate>
              </ChatUserTop>
              <ChatUserBottom>
                <Chat>Your idea for this application is nice!</Chat>
                <ChatNum>1</ChatNum>
              </ChatUserBottom>
            </ChatUser>

            <ChatUser>
              <ChatUserTop>
                <ImageContainer>
                  <ChatImage src={chatImage} alt="Image" />
                </ImageContainer>
                <ChatName>Lindsey Stroud</ChatName>
                <ChatDate>30 Dec 2018, 12.48</ChatDate>
              </ChatUserTop>
              <ChatUserBottom>
                <Chat>Your idea for this application is nice!</Chat>
                <ChatNum>1</ChatNum>
              </ChatUserBottom>
            </ChatUser>

            <ChatUser>
              <ChatUserTop>
                <ImageContainer>
                  <ChatImage src={chatImage} alt="Image" />
                </ImageContainer>
                <ChatName>Lindsey Stroud</ChatName>
                <ChatDate>30 Dec 2018, 12.48</ChatDate>
              </ChatUserTop>
              <ChatUserBottom>
                <Chat>Your idea for this application is nice!</Chat>
                <ChatNum>1</ChatNum>
              </ChatUserBottom>
            </ChatUser>

            <ChatUser>
              <ChatUserTop>
                <ImageContainer>
                  <ChatImage src={chatImage} alt="Image" />
                </ImageContainer>
                <ChatName>Lindsey Stroud</ChatName>
                <ChatDate>30 Dec 2018, 12.48</ChatDate>
              </ChatUserTop>
              <ChatUserBottom>
                <Chat>Your idea for this application is nice!</Chat>
                <ChatNum>1</ChatNum>
              </ChatUserBottom>
            </ChatUser>
          </ChatList>
        </Left>
        <Right>
          <ChatScreen>
                hello World
          </ChatScreen>
        </Right>
      </Body>
    </>
  );
}

const Body = styled.div`
  display: flex;

`;
const Left = styled.div``;
const Right = styled.div``;
const ChatScreen = styled.div`
  background: #fff;
  width: calc(100%-350px);
`;
const ChatList = styled.div`
  width: 350px;
  background: #fff;
  color: #000;
  cursor: pointer;
`;
const ChatUser = styled.div`
  border-bottom: 1px solid #ebeff2;
`;
const ChatUserTop = styled.div`
  padding: 0px 20px;
  display: flex;
  font-size: 11px;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;
const ImageContainer = styled.div`
  border: 1px solid blue;
  margin: 0 auto;
  border-radius: 50%;
  padding: 2px;
`;
const ChatImage = styled.img`
  border-radius: 50%;
  display: block;
  width: 100%;
  border: 1px solid #fff;
  width: 95%; 
`;
const ChatName = styled.div`
  font-size: 14px;
  margin-right: 76px;
  line-height: 21px;
  font-weight: 500;
`;
const ChatDate = styled.div`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  color: #90a0b7;
`;
const ChatUserBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-bottom: 15px;
`;
const Chat = styled.div`
  margin-left: 50px;
  margin-bottom: 5px;
  color: grey;
`;
const ChatNum = styled.div`
  width: 16px;
  margin-right: 20px;
  background: #109cf1;
  /* padding: 6px; */
  height: 17px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
`;

export default Chatbox;
