import React,{useState} from "react";
import styled from "styled-components";
import user from "../assets/images/image2.svg";
import user2 from "../assets/images/image4.svg";
import user3 from "../assets/images/image5.svg";
import Sidebar from '../component/include/Sidebar';

export default function Dashboard({ active}) {
  // const [active, setActive] = useState(false);
  console.log("in dash");

  return (
    <div>
      <Body className={active ? "small" : "window"}>
        <MainContainer>
          <Container>
            <ContainerTop>
              <Top>
                <Span>8 task completed out of 10</Span>
                <Small>
                  Show:<Category>This Week</Category>
                </Small>
              </Top>
              <Bar>
                <GreenBar></GreenBar>
              </Bar>
              <TopTitle>23 December, Sunday</TopTitle>

              <Bottom>
                <Date>
                  <Week>Sun</Week>
                  <Day className="Marked">23</Day>
                </Date>
                <Date>
                  <Week>Mon</Week>
                  <Day>24</Day>
                </Date>
                <Date>
                  <Week>Tue</Week>
                  <Day>25</Day>
                </Date>
                <Date>
                  <Week>Wed</Week>
                  <Day>26</Day>
                </Date>
                <Date>
                  <Week>Thu</Week>
                  <Day>27</Day>
                </Date>
                <Date>
                  <Week>Fri</Week>
                  <Day>28</Day>
                </Date>
                <Date>
                  <Week>Sat</Week>
                  <Day>29</Day>
                </Date>
              </Bottom>
            </ContainerTop>
            <ContainerBottom>
              <Schedules>
                <SchedulesTop>
                  <SchedulesRight>
                    <Title>Send benefits review by Sunday</Title>
                    <ScheduleSpan>
                      Due Date:{" "}
                      <ScheduleSmall> December 23, 2018</ScheduleSmall>
                    </ScheduleSpan>
                  </SchedulesRight>
                  <SchedulesLeft>
                    <ScheduleSpan>Reminder</ScheduleSpan>
                  </SchedulesLeft>
                </SchedulesTop>
                <SchedulesBottom>
                  <Right>
                    <RighImageContainer>
                      <RightImage src={user} alt="Image" />
                    </RighImageContainer>
                    <RightTitle>George Fields</RightTitle>
                  </Right>
                  <Left>
                    <LeftButton>Completed</LeftButton>
                  </Left>
                </SchedulesBottom>
              </Schedules>

              <Schedules>
                <SchedulesTop>
                  <SchedulesRight>
                    <Title>Invite to office meet-up</Title>
                    <ScheduleSpan>
                      Due Date:{" "}
                      <ScheduleSmall> December 23, 2018</ScheduleSmall>
                    </ScheduleSpan>
                  </SchedulesRight>
                  <SchedulesLeft>
                    <ScheduleSpan>Call</ScheduleSpan>
                  </SchedulesLeft>
                </SchedulesTop>
                <SchedulesBottom>
                  <Right>
                    <RighImageContainer>
                      <RightImage src={user2} alt="Image" />
                    </RighImageContainer>
                    <RightTitle>Rebecca Moore</RightTitle>
                  </Right>
                  <Left>
                    <LeftButton1>Ended</LeftButton1>
                  </Left>
                </SchedulesBottom>
              </Schedules>

              <Schedules>
                <SchedulesTop>
                  <SchedulesRight>
                    <Title>Send benefits review by Sunday</Title>
                    <ScheduleSpan>
                      Due Date:{" "}
                      <ScheduleSmall> December 23, 2018</ScheduleSmall>
                    </ScheduleSpan>
                  </SchedulesRight>
                  <SchedulesLeft>
                    <ScheduleSpan>Reminder</ScheduleSpan>
                  </SchedulesLeft>
                </SchedulesTop>
                <SchedulesBottom>
                  <Right>
                    <RighImageContainer>
                      <RightImage src={user3} alt="Image" />
                    </RighImageContainer>
                    <RightTitle>Lindsey Stroud</RightTitle>
                  </Right>
                  <Left>
                    <LeftButton>Completed</LeftButton>
                  </Left>
                </SchedulesBottom>
              </Schedules>
              <ShowMore>Show More</ShowMore>
            </ContainerBottom>
          </Container>
          <TestDiv></TestDiv>
        </MainContainer>
      </Body>

      <h1>dashboard</h1>
    </div>
  );
}

const Body = styled.div`
  /* background: #e5e5e5;
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;
  margin-top: 59px; */
`;
const MainContainer =styled.div`
    width: 100%;
    display:flex;
    grid-gap:20px;
    justify-content:space-between;
`;
const TestDiv = styled.div`
    width:40%;
    height:200px;
    background: red;
`;
const Container = styled.div`
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  padding: 20px 25px;
  width: 40%;
  background: #fff;
  border-radius: 4px;
`;
const ContainerTop = styled.div`
    margin-top: 20px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Span = styled.span`
    font-size: 15px;
`;
const Small = styled.small`
    font-size: 12px;
`;
const Category = styled.span`
  color: #0575e6;
`;
const Bar = styled.div`
  width: 100%;
  height: 6px;
  background: #ebeff2;
  z-index: 0;
  border-radius: 10px;
  margin-top: 20px;
`;
const GreenBar = styled.div`
  width: 50%;
  height: 6px;
  background: #2dd47a;
  z-index: 2;
  border-radius: 10px;
`;
const TopTitle = styled.h4`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border-bottom: 1px solid #c2cfe0;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(1) .Marked {
    background: #109cf1;
    padding: 05px;
    color: #fff;
    border-radius: 50%;
  }
  margin-bottom: 30px;
`;
const Week = styled.div`
  color: #c2cfe0;
  font-size: 13px;
  font-weight: 500;
  line-height: 19.5px;
`;
const Day = styled.div`
  color: #c2cfe0;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 500;
`;
const ContainerBottom = styled.div``;
const Schedules = styled.div`
  margin-top: 30px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  padding: 20px 25px;
  border-radius: 4px;
  margin-bottom: 20px;
`;
const SchedulesTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SchedulesRight = styled.div``;
const Title = styled.h4`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 7px;
`;
const ScheduleSpan = styled.span`
  font-size: 13px;
  line-height: 19px;
  color: #c2cfe0;
  font-weight: 500;
`;
const ScheduleSmall = styled.span`
  color: #000;
`;
const SchedulesLeft = styled.div``;
const SchedulesBottom = styled.div`
  margin-top: 30px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  
  width: 50%;
`;
const RighImageContainer = styled.div`
  width: 12%;
`;
const RightImage = styled.img`
  border-radius: 50%;
`;
const RightTitle = styled.h6`
  margin: 0px;
  font-size: 13px;
  line-height: 19px;
  margin-left: 10px;
  color: #707683;
  font-weight: 500;
`;
const Left = styled.div``;
const LeftButton = styled.button`
  border: none;
  /* padding: 6px 19px; */
  background: #2ed47a;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  width: 84px;
  height: 22px;
  border-radius: 4px;
  font-size: 11px;
`;
const LeftButton1 = styled.button`
  background: #f7685b;
  border: none;
  padding: 5px;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  width: 84px;
  border-radius: 4px;
  font-size: 11px;
`;
const ShowMore = styled.small`
  color: #109cf1;
  font-size: 15px;
  margin-top: 15px;
  text-align: center;
  display: block;
  font-weight: 700;
  cursor: pointer;
`;
const Graph = styled.div`
    position: absolute;
    right: 10%;
    top: 200px;
    width: 20%;
    
`;