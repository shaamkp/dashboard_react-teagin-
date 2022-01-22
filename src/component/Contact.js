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
              <Input type="checkbox" id="select" name="select" />
            </Form>
          </Li>
          <Li>{user.name}</Li>
          <Li>{user.email}</Li>
          <Li>{user.company_name}</Li>
          <Li>{user.role}</Li>
          <Li>{user.forecast}</Li>
          <Li>{user.recent_activity_naturaltime}</Li>
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
                <Input type="checkbox" id="select" name="select" />
                <label for="select" className="labelText">select</label>
              </Form>
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
  border-bottom: 1px solid grey;
  padding: 10px;
`;
const Li = styled.li`
  /* margin-left: 96px; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 11px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #707683;
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
const Form = styled.form``;
const Input = styled.input`
  cursor: pointer;
`;
