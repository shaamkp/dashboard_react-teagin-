import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import Sidebar from "../component/include/Sidebar";
import { Context } from "./contexts/store";

export default function Contact({ active }) {
  const [users, setUsers] = useState([]);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const accessToken = state.userData.accessToken;

    axios
      .get("http://saaskit.tegain.com/api/contact/?page=2", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setUsers(res.data.data.results);
        console.log(setUsers, "=================res");
        console.log(res.data.data.results);
      });
  }, []);

  let renderItems = () => {
    return users.map((user) => (
      <>
        <Ul>
          <Li>
            <Form>
              <Input
                className="input"
                type="checkbox"
                id="select"
                name="select"
              />
              <Box>
                <Text>{user.name}</Text>
              </Box>
            </Form>
            <Box className="emailField">
              <Text>{user.email}</Text>
            </Box>
            <Box>
              <Text>{user.company_name}</Text>
            </Box>
            <Box>
              <Text>{user.role}</Text>
            </Box>
            <Box>
              <Text>{user.forecast}</Text>
            </Box>
            <Box>
              <Text>{user.recent_activity_naturaltime}</Text>
            </Box>
          </Li>
        </Ul>
      </>
    ));
  };

  console.log("in contact");
  return (
    <>
      <Body className={active ? "small" : "window"}>
        <FirstRow>
          <Title>
            Company: <Span>All</Span>
          </Title>
          <Button>Add Contact</Button>
        </FirstRow>
        <Div>
          <Ul>
            <Li>
              <Form>
                <Input
                  className="input"
                  type="checkbox"
                  id="select"
                  name="select"
                />
                <Box>
                  <Text>Name</Text>
                </Box>
              </Form>

              <Box className="emailField">
                <Text>Email</Text>
              </Box>
              <Box>
                <Text>Company name</Text>
              </Box>
              <Box>
                <Text>Role</Text>
              </Box>
              <Box>
                <Text>Forecast</Text>
              </Box>
              <Box>
                <Text>Recent activity</Text>
              </Box>
            </Li>
          </Ul>
          {renderItems()}
        </Div>
      </Body>
    </>
  );
}

const Body = styled.div``;
const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 15px;
  padding-top: 100px;
`;
const Div = styled.div`
  width: 100%;
  background: #fff;
  color: black;
`;
const Title = styled.div``;
const Span = styled.span``;
const Button = styled.button`
  margin-right: 10px;
  padding: 6px 20px;
  background: #0575e6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
const Ul = styled.ul`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  border-bottom: 1px solid #ebeff2;
  padding: 10px;
`;
const Li = styled.li`
  /* margin-left: 96px; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 11px;
  line-height: 19px;
  letter-spacing: 0.01em;
  display: flex;
  justify-content: space-between;
  color: #707683;
  width: 100%;
  text-align: left;
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 10px;
  }
  &:nth-child(2) {
    width: 226px;
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    color: #000;
  }
`;
const Form = styled.form`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  cursor: pointer;
`;

const Name = styled.div``;
const Email = styled.div``;
const Company = styled.div``;
const Role = styled.div``;
const Forecast = styled.div``;
const Recent = styled.div``;
const Box = styled.div`
  width: 120px;
  margin-left: 10px;
  &.emailField{
    width: 230px;
  }
`;
const First = styled.div`
  display: flex;
`;
const Text = styled.h4``;

