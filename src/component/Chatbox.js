import React, { useContext, useState } from "react";
import "../../src/App.css";
import styled from "styled-components";
import Lindsey from "../assets/images/lindsey.png";
import Nicci from "../assets/images/nicci.png";
import Word from "../assets/images/word.png";
import Rebecca from "../assets/images/rebecca.png";
import Jane from "../assets/images/jane.png";
import Jones from "../assets/images/jones.png";
import Martin from "../assets/images/martin.png";
import Franz from "../assets/images/franz.png";
import Judith from "../assets/images/judith.png";
import John from "../assets/images/judith.png";
import Green from "../assets/images/green.png";
import Error from "../assets/images/error.png";
import Sent from "../assets/images/sent.png";
import Dot from "../assets/images/Vector.png";
import ActiveImgDot from "../assets/images/Ellipse.png";
import ImojIcon from "../assets/images/imoji.png";
import AttachmentIcon from "../assets/images/attachment.png";

const Chatbox = ({ active }) => {
  const data = [
    {
      id: 1,
      name: "Lindsey",
      profile: Lindsey,
      inbox: "Your idea for this application is nice !",
      date: "30 Dec 2018, 12:34",
      textCount: "1",
    },
    {
      id: 2,
      name: "Lindsey",
      profile: Lindsey,
      inbox: "Your idea for this application is nice !",
      date: "30 Dec 2018, 12:34",
      textCount: "2",
    },
    {
      id: 3,
      name: "WordPress conferesion",
      profile: Word,
      inbox: "You : Sure!",
      date: "29 Dec 2018, 18:05",
      textCount: "3",
    },
    {
      id: 4,
      name: "Jane Doe",
      profile: Jane,
      inbox: "It should be pretty simple.",
      date: "29 Dec 2018, 16:45",
      textCount: "3",
    },
    {
      id: 5,
      name: "Jane Doe",
      profile: Jane,
      inbox: "It should be pretty simple.",
      date: "29 Dec 2018, 16:45",
      textCount: "5",
    },
    {
      id: 6,
      name: "Jones Dermot",
      profile: Jones,
      inbox: "I have a new feature for this project.",
      date: "29 Dec 2018, 13:37",
      textCount: "5",
    },
    {
      id: 7,
      name: "Martin Merces",
      profile: Martin,
      inbox: "Martin is typing a message...",
      date: "29 Dec 2018, 12:48",
      textCount: "2",
    },
    {
      id: 8,
      name: "Franz Ferdinand",
      profile: Franz,
      inbox: "Can we schedule an online meeting? Thanks! ",
      date: "28 Dec 2018, 15:27",
      textCount: "6",
    },
    {
      id: 9,
      name: "Judith Williams",
      profile: Judith,
      inbox: "Thank you. See you later!",
      date: "28 Dec 2018, 13:19",
      textCount: "6",
    },
    {
      id: 10,
      name: "John Smith",
      profile: John,
      inbox: "It’s fine",
      date: "27 Dec 2018, 21:22",
      textCount: "6",
    },
  ];
  const [activate, setActivate] = useState("");
  return (
    <>
      <Body className={active ? "small" : "window"}>
        <Container>
          <Screens>
            <ScreenLeft>
              {data.map((item) => (
                <Ul>
                  <ChatList
                    className={activate === item.id ? "acttive" : "top"}
                    onClick={() => setActivate(item.id)}
                  >
                    <Top>
                      <TopLeft>
                        <TopImageContainer
                          className={activate === item.id && "border"}
                        >
                          <UserImage src={item.profile} alt="Image  " />
                        </TopImageContainer>
                        <UserName
                          className={activate === item.id && "active"}
                          activate={activate}
                        >
                          {item.name}
                        </UserName>
                      </TopLeft>
                      <TopRight>
                        <Date>{item.date}</Date>
                      </TopRight>
                    </Top>
                    <Bottom>
                      <Message>{item.inbox}</Message>
                      <Count textCount={item.textCount}>
                        {item.textCount === "1" ? (
                          "1"
                        ) : item.textCount === "2" ? (
                          "2"
                        ) : item.textCount === "3" ? (
                          <img src={Green} alt="" />
                        ) : item.textCount === "4" ? (
                          <img src={Error} alt="image" />
                        ) : item.textCount === "5" ? (
                          <img src={Sent} alt="image" />
                        ) : (
                          ""
                        )}
                      </Count>
                    </Bottom>
                  </ChatList>
                </Ul>
              ))}
            </ScreenLeft>
            <ScreenRight>
              <ChatBoxScreen active={active}>
                <HeaderBar>
                  <HeaderRight>
                    <UserImageContainer>
                      <UserImg src={Lindsey} alt="Image" />
                    </UserImageContainer>
                    <ActiveImageContainer>
                      <ActiveImg src={ActiveImgDot} alt="Image" />
                    </ActiveImageContainer>
                  </HeaderRight>
                  <HeaderLeft>
                    <DotContainer>
                      <DotImage src={Dot} alt="Image" />
                    </DotContainer>
                  </HeaderLeft>
                </HeaderBar>
                <MainScreen>
                  <Chats>
                    <UserDetails>
                      <UserimgContainer>
                        <UserImgIcon src={Lindsey} alt="Image" />
                      </UserimgContainer>
                      <ChatName>Lindsey Stroud</ChatName>
                      <ChatTime>11:12</ChatTime>
                    </UserDetails>
                    <UserMessage>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Id aliquet lectus proin nibh nisl. Suspendisse
                      faucibus interdum posuere lorem ipsum dolor sit amet
                      consecteturg.
                    </UserMessage>
                  </Chats>
                  <Chats className="Nobackground">
                    <UserDetails className="details">
                      <UserimgContainer>
                        <UserImgIcon src="" alt="" />
                      </UserimgContainer>
                      <ChatName>You</ChatName>
                      <ChatTime>11:12</ChatTime>
                    </UserDetails>
                    <UserMessage className="message">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Id aliquet lectus proin nibh nisl. Suspendisse
                      faucibus interdum posuere lorem ipsum dolor sit amet
                      consecteturg.
                    </UserMessage>
                  </Chats>
                  <Chats>
                    <UserDetails>
                      <UserimgContainer>
                        <UserImgIcon src={Lindsey} alt="Image" />
                      </UserimgContainer>
                      <ChatName>Lindsey Stroud</ChatName>
                      <ChatTime>11:12</ChatTime>
                    </UserDetails>
                    <UserMessage>
                      Your idea for this application is nice!
                    </UserMessage>
                  </Chats>
                  <Chats>
                    <UserDetails>
                      <UserimgContainer>
                        <UserImgIcon src={Lindsey} alt="Image" />
                      </UserimgContainer>
                      <ChatName>Lindsey Stroud</ChatName>
                      <ChatTime>11:12</ChatTime>
                    </UserDetails>
                    <UserStatus>Typing a message...</UserStatus>
                  </Chats>
                </MainScreen>
                <ScreenBottom>
                  <ChatForm className="form">
                    <Search type="text" placeholder="Type a message..." />
                  </ChatForm>
                  <Attachments>
                    <AttachmentImoji src={ImojIcon} alt="Icon" />
                    <Attachment src={AttachmentIcon} alt="Icon" />
                  </Attachments>
                </ScreenBottom>
              </ChatBoxScreen>
            </ScreenRight>
          </Screens>
        </Container>
      </Body>
    </>
  );
};

export default Chatbox;

const Body = styled.div`
  padding-top: 0px;
`;
const Container = styled.div`
  transition: 0.4s ease;
  margin-top: 100px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  display: flex;
`;
const Screens = styled.div`
  display: flex;
  width: 100%;
`;
const ScreenLeft = styled.div`
  width: ${({ active }) => (active ? "55%" : "90%")};
  margin-right: 20px;
  &.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    div {
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;
const ScreenRight = styled.div``;
const Ul = styled.ul``;
const ChatList = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ebeff2;
  cursor: pointer;
  background: #fff;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div`
  display: flex;
`;
const TopRight = styled.div``;
const TopImageContainer = styled.div`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  &.border {
    border: 2px solid #109cf1;
  }
`;
const UserImage = styled.img`
  width: 100%;
  display: block;
`;
const UserName = styled.h3`
  font-family: "Poppins";
  font-weight: 600;
  color: #192a3e;
  font-size: 14px;
  margin-right: 67px;
  &.active {
    color: #109cf1;
  }
`;
const Date = styled.h3`
  font-family: "Poppins";
  font-weight: 400;
  color: #90a0b7;
  font-size: 12px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Message = styled.h4`
  margin-left: 34px;
  font-family: "Poppins";
  color: #90a0b7;
  font-weight: 500;
  font-size: 12px;
`;
const Count = styled.div`
   border-radius: 4px;
  color: #fff;
  padding: 2px 6px;
  font-size: 11px;
  background: ${({ textCount }) =>
    textCount === "3"
      ? "none"
      : textCount === "4"
      ? "none"
      : textCount === "5"
      ? "none"
      : textCount === "6"
      ? "none"
      : "#109cf1"};
`;
const ChatBoxScreen = styled.div`
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  width: ${({ active }) => (active ? "95%" : "97%")};
  transition: 0.4s ease;
  background: #fff;
  border-radius: 4px;
`;
const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 26px;
  border-bottom: 1px solid #ebeff2;
`;
const HeaderRight = styled.div`
  display: flex;
`;
const HeaderLeft = styled.div``;
const UserImageContainer = styled.div`
  margin-right: 10px;
`;
const UserImg = styled.img`
  border-radius: 50%;
`;
const ActiveImageContainer = styled.div`
  margin-left: 10px;
`;
const ActiveImg = styled.img``;
const DotContainer = styled.div``;
const DotImage = styled.img``;
const MainScreen = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;
const Chats = styled.div`
  text-align: left;
  margin-top: 40px;
  &:last-child {
    margin-bottom: 20px;
  }
`;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;
const UserimgContainer = styled.div`
  margin-right: 10px;
`;
const UserImgIcon = styled.img`
  border-radius: 50%;
`;
const ChatName = styled.h4`
  color: #192a3e;
  font-size: 12px;
  font-family: "Poppins";
  margin-right: 10px;
  font-weight: 600;
`;
const ChatTime = styled.div`
  color: #90a0b7;
  font-weight: 400;
  font-family: "Poppins";
  font-size: 11px;
`;
const UserMessage = styled.h4`
  background: #109cf1;
  color: #fff;
  padding: 16px 26px;
  border-radius: 0px 8px 8px 8px;
  width: 72%;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 12px;
  line-height: 21.5px;
`;
const UserStatus = styled.h4`
  font-style: italic;
  font-family: "Poppins";
  color: #90a0b7a6;
  font-size: 11px;
  font-weight: 300;
`;
const ScreenBottom = styled.div`
  display: flex;
  padding: 8px;
  border-top: 1px solid #ebeff2;
  align-items: center;
`;
const ChatForm = styled.form`
  width: 94%;
`;
const Search = styled.input`
  border: none;
  
  width: 98%;
  padding: 12px;
`;
const Attachments = styled.div``;
const AttachmentImoji = styled.img`
  margin-right: 15px;
`;
const Attachment = styled.img``;
