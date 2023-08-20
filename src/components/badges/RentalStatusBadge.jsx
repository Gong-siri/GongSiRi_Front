import styled from "@emotion/styled";
import RoundBadge from "./RoundBadge";

export default function RentalStatusBadge({status}) {
  const text = status ? "임대중" : "공실";
  const color = status ? "#ffffff" : "#11B7E4";
  const backgroundColor = status ? "#11B7E4" : "#E6F9FF";
  const borderColor = "#11B7E4";
  
  return (
    <RoundBadge 
      text={text}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    />
  );
};

const S = {
  Container: styled.div`
    width: fit-content;
    height: 30px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #11B7E4;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
  `,
};
