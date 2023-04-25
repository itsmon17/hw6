import React from "react";
import ChartBar from "./ChartBar";
import styled from "styled-components";

function Chart({ items }) {
  const maxPercentPrice = 2000;
  const months = [
    {
      label: "Jan",
      currentPrice: 0,
    },
    {
      label: "Feb",
      currentPrice: 0,
    },
    {
      label: "Mar",
      currentPrice: 0,
    },
    {
      label: "Apr",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "Jun",
      currentPrice: 0,
    },
    {
      label: "Jul",
      currentPrice: 0,
    },
    {
      label: "Aug",
      currentPrice: 0,
    },
    {
      label: "Sep",
      currentPrice: 0,
    },
    {
      label: "Oct",
      currentPrice: 0,
    },
    {
      label: "Nov",
      currentPrice: 0,
    },
    {
      label: "Dec",
      currentPrice: 0,
    },
  ];

  items.forEach((elem) => {
    const monthNum = new Date(elem.date).getMonth();
    months[monthNum].currentPrice += elem.price;
  });

  console.log(months);

  return (
    <Chhart>
      {months.map((el) => {
        return (
          <ChartBar
            key={el.label}
            label={el.label}
            currentPrice={el.currentPrice}
            maxPercentPrice={maxPercentPrice}
          />
        );
      })}
    </Chhart>
  );
}

export default Chart;

const Chhart = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f8dfff;
  text-align: center;
  height: 10rem;
  gap: 32px;
`;

