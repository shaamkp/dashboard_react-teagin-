import React, { useState, useEffect, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Context } from "./contexts/store";
import { Chart, registerables, ArcElement } from "chart.js";
import axios from "axios";
import styled from "styled-components";

const Doughnuts = ({active}) => {
  Chart.register(...registerables);
  Chart.register(ArcElement);

  const { state, dispatch } = useContext(Context);
  // const active = state.active;
  const [datadough, setDatadough] = useState({});

  useEffect(() => {
    const accessToken = state.userData.accessToken;

    axios
      .get("http://saaskit.tegain.com/api/dashboard/pie-chart/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setDatadough(res.data.data);
      });
  }, []);

  const data = {
    labels: ["active", "completed", "ended"],
    datasets: [
      {
        label: "example",
        data: [datadough.active, datadough.completed, datadough.ended],
        borderColor: ["rgba(255,206,86,0.2)"],
        cutout: 160,
        backgroundColor: [
          "rgb(46, 212, 117)",
          "rgb(255, 185, 70)",
          "rgb(247, 104, 91)",
        ],
      },
    ],
    legend: {
      display: false,
    },
    centerText: {
      display: true,
      text: "30%",
      color: "#2ED47A",
    },
  };

  const options = {
    legend: {
      display: false,
    },
    plugins: {
      responsive: true,
      subtitle: {
        display: true,
      },
    },
  };

  console.log(datadough);
  return (
    <Container>
      <Text active={active}>30%</Text>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        options={options}
      />
    </Container>
  );
};

export default Doughnuts;
const Container = styled.h1`
  width: 400px;
  margin-left: 80px;
`;
const Text = styled.div`
 position: absolute;
bottom: -200px;
right: ${({ active }) => (active ? "293px" : "207px")};
font-size: 54px;
-webkit-transition: 0.4s ease;
transition: 0.4s ease;
color: #2ed47a;
`;
