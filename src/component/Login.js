import React, { useContext, useState } from "react";
import styled from "styled-components";
import eclips from "../assets/images/Ellipse 1.svg";
import eclips2 from "../assets/images/Ellipse 2.svg";
import bgImage from "../assets/images/Bg.jpg";
import message from "../assets/images/Vector.svg";
import lock from "../assets/images/lock.svg";
import axios from "axios";
import { BASE_URL } from "../axiosConfig";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "./contexts/store";
// import { useHistory } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("next"));
  const nextPath = searchParams.get("next");

  const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}`, { username, password })
      .then((response) => {
        let { data } = response.data;
        console.log(data);
        dispatch({
          type: "UPDATE_USER_DATA",
          userData: {
            isVerified: true,
            accessToken: data.access,
          },
        });
        navigate({ pathname: nextPath ? nextPath : "/dashboard" });
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.status == 401) {
          setMessage(error.response.data.data.detail);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <Container>
      <Left>
        <EclipsContainer>
          <EclipOne src={eclips} alt="Image" />
        </EclipsContainer>
        <EclipsContainer2>
          <EclipTwo src={eclips2} alt="Image" />
        </EclipsContainer2>
        <Content>
          <ContentTitle>GoFinance</ContentTitle>
          <ContentPara>
            The most popular peer to peer lending at SEA
          </ContentPara>
          <ContentButton>Read More</ContentButton>
        </Content>
      </Left>

      <Right onSubmit={handleSubmit}>
        <RightContent>
          <RightTitle>SaaS Kit</RightTitle>
          <RightSubTitle>Hello!</RightSubTitle>
          <RightPara>Sign Up to Get Started</RightPara>
          <RightForm>
            <Username
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Email Address"
            />
            <Password
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            {message && <ErrorMessage>{message}</ErrorMessage>}
            <LoginButton type="submit">Login</LoginButton>
          </RightForm>
        </RightContent>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 60%;
  background: url(${bgImage});
  position: relative;
`;
const Content = styled.div`
  padding-bottom: 67px;
`;
const ContentTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`;
const ContentPara = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
  font-weight: 400;
`;
const ContentButton = styled.button`
  background: #0575e6;
  padding: 8px 30px;
  margin-top: 15px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;
  width: 50%;
`;
const RightContent = styled.div``;
const RightTitle = styled.h3`
  line-height: 59px;
  font-size: 43px;
  font-weight: 400;
  color: #109cf1;
`;
const RightSubTitle = styled.h5`
  line-height: 39px;
  font-size: 26px;
  margin-top: 40px;
`;
const RightPara = styled.p`
  font-size: 18px;
  line-height: 27px;
`;
const RightForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border: none;
`;
const Username = styled.input`
  padding: 18px 35px;
  width: 307px;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  background: url(${message});
  background-repeat: no-repeat;
  background-position: left 4px center;
`;
const Password = styled.input`
  padding: 18px 35px;
  width: 307px;
  margin-top: 15px;
  border-radius: 8px;
  background: url(${lock});
  background-repeat: no-repeat;
  background-position: left 4px center;
  border: 1px solid #eeeeee;
`;
const LoginButton = styled.button`
  margin-top: 15px;
  padding: 18px 26px;
  background: #0575e6;
  border: none;
  border-radius: 8px;
  color: #fff;
`;
const EclipsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
const EclipOne = styled.img``;
const EclipsContainer2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
const EclipTwo = styled.img``;
const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: red;
  margin-bottom: 25px;
  text-align: center;
`;
