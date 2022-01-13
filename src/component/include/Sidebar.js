import React from 'react';
import styled from 'styled-components'
import Dashboard from '../../assets/images/qr.svg'
import Tasks from '../../assets/images/tasks.svg'
import Email from '../../assets/images/email.svg'
import Contacts from '../../assets/images/user.svg'
import Deals from '../../assets/images/deals.svg'
import SettingsImg from '../../assets/images/settings.svg'
import Toggle from '../../assets/images/toggle.svg'
import Profileimg from '../../assets/images/image.jpg'
import Notification from '../../assets/images/notifications.svg'
import Search from '../../assets/images/search.svg'


export default function Sidebar() {
    return (
      <>
        <Container>
          <Aside>
            <TopSection>
              <TopTitle>SaaS Kit</TopTitle>
            </TopSection>
            <User>
              <UserImageContainer>
                <UserImage src={Profileimg} alt="ProfileImage" />
              </UserImageContainer>
              <UserDetails>
                <UserName>Sierra Ferguson</UserName>
                <UserEmail>s.ferguson@gmail.com</UserEmail>
              </UserDetails>
            </User>
            <Nav>
              <Ul>
                <List>
                  <ImageContainer>
                    <Image src={Dashboard} alt="Image" />
                  </ImageContainer>
                  <ItemName>Dashboard</ItemName>
                </List>
                <List>
                  <ImageContainer>
                    <Image src={Tasks} alt="Image" />
                  </ImageContainer>
                  <ItemName>Tasks</ItemName>
                </List>
                <List>
                  <ImageContainer>
                    <Image src={Email} alt="Image" />
                  </ImageContainer>
                  <ItemName>Email</ItemName>
                </List>
                <List>
                  <ImageContainer>
                    <Image src={Contacts} alt="Image" />
                  </ImageContainer>
                  <ItemName>Contacts</ItemName>
                </List>
                <List>
                  <ImageContainer>
                    <Image src={Deals} alt="Image" />
                  </ImageContainer>
                  <ItemName>Deals</ItemName>
                </List>
              </Ul>
            </Nav>
            <BottomNav>
              <Settings>
                <SettingsImageContainer>
                  <SettingsImage src={SettingsImg} alt="Image" />
                </SettingsImageContainer>
                <SettingsText>Settings</SettingsText>
              </Settings>
              <ToggleConatiner>
                <ToggleImageContainer>
                  <ToggleImage src={Toggle} alt="Image" />
                </ToggleImageContainer>
                <ToggleText>Toggle sidebar</ToggleText>
              </ToggleConatiner>
            </BottomNav>
          </Aside>
          <Header>
            <HeaderForm>
              <HeaderInput type="text" placeholder="Global search" />
            </HeaderForm>
            <NotificationContainer>
              <NotificationImage src={Notification} alt="" />
            </NotificationContainer>
          </Header>
        </Container>
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
`;
const TopSection = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #ebeff2;
`;
const TopTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  color: #109cf1;
`;
const User = styled.div`
  padding: 16px 15px;
  display: flex;
  align-items: center;
`;
const UserImageContainer = styled.div`

`;
const UserImage = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const UserDetails = styled.div`
    margin-left: 12px;
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
const Ul = styled.div`

`;
const List = styled.div`    
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    
`;
const ImageContainer = styled.div`
    width: 10%;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const ItemName = styled.div`
    margin-left: 15px;
    font-size: 13px;
    font-weight: 600;
    
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
const SettingsImageContainer = styled.div`

`;
const SettingsImage = styled.img`

`;
const SettingsText = styled.div`
  margin-left: 15px;
  font-size: 13px;
  font-weight: 600;
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
`;
const Header = styled.div`
  height: 57px;
  width: calc(100% - 256px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebeff2;
  position: fixed;
  margin-left: 19%;
`;
const HeaderForm =styled.form`
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
`;
const NotificationImage = styled.img``;


