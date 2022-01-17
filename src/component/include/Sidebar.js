import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../../assets/images/qr.svg";
import Tasks from "../../assets/images/tasks.svg";
import Email from "../../assets/images/email.svg";
import Contacts from "../../assets/images/user.svg";
import Deals from "../../assets/images/deals.svg";
import SettingsImg from "../../assets/images/settings.svg";
import Toggle from "../../assets/images/toggle.svg";
import Profileimg from "../../assets/images/image.jpg";
import Notification from "../../assets/images/notifications.svg";
import Search from "../../assets/images/search.svg";
import {
  Link,
  Outlet,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

export default function Sidebar({ active, setActive }) {
  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href="/auth/login"
  };

  console.log("IN SIDEBAR");
  return (
    <>
      <Container>
        <Aside className={active ? "active" : ""}>
          <TopSection>
            <TopTitle>
              SaaS{" "}
              <SubTopTitle className={active ? "remove" : ""}>Kit</SubTopTitle>
            </TopTitle>
          </TopSection>
          <User>
            <UserImageContainer>
              <UserImage src={Profileimg} alt="ProfileImage" />
            </UserImageContainer>
            <UserDetails className={active ? "remove" : ""}>
              <UserName>Sierra Ferguson</UserName>
              <UserEmail>s.ferguson@gmail.com</UserEmail>
            </UserDetails>
          </User>
          <Nav>
            <Ul>
              <List to="/dashboard">
                <ImageContainer className={active ? "imagewidth" : ""}>
                  <Image src={Dashboard} alt="Image" />
                </ImageContainer>
                <ItemName className={active ? "remove" : ""}>
                  Dashboard
                </ItemName>
              </List>
              <List to="/dashboard">
                <ImageContainer className={active ? "imagewidth" : ""}>
                  <Image src={Tasks} alt="Image" />
                </ImageContainer>
                <ItemName className={active ? "remove" : ""}>Tasks</ItemName>
              </List>
              <List to="/dashboard">
                <ImageContainer className={active ? "imagewidth" : ""}>
                  <Image src={Email} alt="Image" />
                </ImageContainer>
                <ItemName className={active ? "remove" : ""}>Email</ItemName>
              </List>
              <List to="/contact">
                <ImageContainer className={active ? "imagewidth" : ""}>
                  <Image src={Contacts} alt="Image" />
                </ImageContainer>
                <ItemName className={active ? "remove" : ""}>Contacts</ItemName>
              </List>
              <List to="/dashboard">
                <ImageContainer className={active ? "imagewidth" : ""}>
                  <Image src={Deals} alt="Image" />
                </ImageContainer>
                <ItemName className={active ? "remove" : ""}>Deals</ItemName>
              </List>
            </Ul>
          </Nav>
          <BottomNav>
            <Settings>
              <SettingsImageContainer>
                <SettingsImage src={SettingsImg} alt="Image" />
              </SettingsImageContainer>
              <SettingsText className={active ? "remove" : ""}>
                Settings
              </SettingsText>
            </Settings>
            <ToggleConatiner onClick={() => setActive(!active)}>
              <ToggleImageContainer>
                <ToggleImage src={Toggle} alt="Image" />
              </ToggleImageContainer>
              <ToggleText className={active ? "remove" : ""}>
                Toggle sidebar
              </ToggleText>
            </ToggleConatiner>
          </BottomNav>
        </Aside>
        <Header active={active}>
          <HeaderForm>
            <HeaderInput type="text" placeholder="Global search" />
          </HeaderForm>
          <NotificationContainer>
            <LoginButton onClick={() => handleLogout()}>Logout</LoginButton>
            <NotificationImage src={Notification} alt="" />
          </NotificationContainer>
        </Header>
      </Container>
      <Outlet />
      {/* <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes> */}
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
const Aside = styled.aside`
  width: 256px;
  height: 100vh;
  background: #fff;
  position: fixed;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  z-index: 10;
  /* transition: width 0.4s ease;? */
  &.active {
    width: 80px;
    transition: width 0.4s ease;
  }
`;
const TopSection = styled.div`
  padding: 16px 10px;
  border-bottom: 1px solid #ebeff2;
  display: flex;
`;
const TopTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  color: #109cf1;
  z-index: 2;
`;
const SubTopTitle = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  color: #109cf1;
  z-index: 1;
  transition: width 0.4s ease;
  &.remove {
    display: none;
    transform: translateX(30px);
  }
`;
const User = styled.div`
  padding: 16px 15px;
  display: flex;
  align-items: center;
`;
const UserImageContainer = styled.div``;
const UserImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
`;
const UserDetails = styled.div`
  /* margin-left: 12px; */
  position: absolute;
  left: 70px;
  /* transition: width 0.4s ease; */
  &.remove {
    display: none;
    /* transition: width 0.4s ease; */
  }
`;
const UserName = styled.div`
  font-size: 14px;
  color: #192a3e;
  font-weight: 600;
`;
const UserEmail = styled.div`
  font-size: 11px;
  color: #90a0b7;
`;
const Nav = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #ebeff2;
`;
const Ul = styled.div``;
const List = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
`;
const ImageContainer = styled.div`
  width: 20px;
  height: 20px;
  &.imagewidth {
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const ItemName = styled.div`
  margin-left: 15px;
  font-size: 13px;
  font-weight: 600;
  transition: width 0.4s ease;
  &.remove {
    display: none;
    transition: width 0.4s ease;
  }
`;
const BottomNav = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35%;
`;
const Settings = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SettingsImageContainer = styled.div``;
const SettingsImage = styled.img``;
const SettingsText = styled.div`
  margin-left: 15px;
  font-size: 13px;
  font-weight: 600;
  &.remove {
    display: none;
  }
`;
const ToggleConatiner = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ToggleImageContainer = styled.div``;
const ToggleImage = styled.img``;
const ToggleText = styled.div`
  margin-left: 15px;
  font-size: 11px;
  font-weight: 400;
  color: #90a0b7;
  transition: width 0.4s ease;
  &.remove {
    display: none;
    transition: width 0.4s ease;
  }
`;
const Header = styled.div`
  height: 57px;
  /* width: calc(100% - 256px); */
  width: ${({ active }) =>
    active ? "calc(100% - 80px)" : "calc(100% - 256px)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebeff2;
  position: fixed;
  /* margin-left: 19%; */
  margin-left: ${({ active }) => (active ? "6%" : "19%")};
  background: #fff;
  z-index: 5;
`;
const HeaderForm = styled.form`
  padding: 21px 68px;
`;
const HeaderInput = styled.input`
  width: 500px;
  height: 25px;
  padding: 15px 25px;
  border: none;
  background: url(${Search});
  background-repeat: no-repeat;
  background-position: left 2px center;
  &::placeholder {
    color: #90a0b7;
  }
`;
const NotificationContainer = styled.div`
  padding-right: 15px;
  display: flex;
  align-items: center;
`;

const LoginButton = styled.button`
  margin-right: 10px;
  padding: 6px 20px;
  background: #0575e6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
const NotificationImage = styled.img``;
