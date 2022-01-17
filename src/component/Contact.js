import React from "react";
import styled from "styled-components";
import Sidebar from "../component/include/Sidebar";

export default function Contact({ active }) {
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
              </Form>
            </Li>
            <Li>Name</Li>
            <Li>Email</Li>
            <Li>Company name</Li>
            <Li>Role</Li>
            <Li>Forecast</Li>
            <Li>Recent Activity</Li>
          </Ul>
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
  height: 300px;
  width: 100%;
  background: #fff;
  color: black;
`;
const Title = styled.div` 
`;
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
  align-items: center;
  border-bottom: 1px solid grey;
`;
const Li = styled.li`
  margin-left: 96px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:first-child {
    margin-left: 10px;
  }
`;
const Form = styled.form``;
const Input = styled.input`
  cursor: pointer;
`;
