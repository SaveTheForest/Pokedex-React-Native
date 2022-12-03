import React from "react";
import styled, { css } from "styled-components/native";
import theme from "../../theme/theme";

export const Container = styled.View`
  ${({ type }) => css`
    background-color: ${theme.colors.colorTypes[type]};
  `}
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  height: 10%;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PokeName = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;
export const PokeID = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const ImageView = styled.View`
  width: 200px;
  height: 200px;
  align-self: center;
`;
export const PokeImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  position: absolute;
  margin-top: 28%;
  z-index: 9;
`;
export const Details = styled.View`
  background-color: #fff;
  flex: 1;
  margin-bottom: 1%;
  border-radius: 15px;
  width: 98%;
  align-self: center;
  align-items: center;
`;

export const LineType = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 10%;
  flex-direction: row;
  width: 120px;
`;
export const ViewType = styled.View`
  ${({ type }) => css`
    background-color: ${theme.colors.colorTypes[type]};
  `}

  justify-items:center;
  align-items: center;
  border-radius: 25px;
  width: 50px;
  height: 20px;
`;
export const TypeText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 12px;
`;
export const About = styled.Text`
  ${({ type }) => css`
    color: ${theme.colors.colorTypes[type]};
  `}
  font-size: 16px;
  font-weight: 700;
`;
export const InfoAbouts = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 100px;
  width: 100%;
  margin-top: 5%;
`;
export const InfoWeight = styled.View`
  height: 70px;
  width: 120px;
  justify-content: center;
align-items: center;
  border-color: #929292;
  border-right-width: 2px;
`;
export const InfoMoves = styled.View`
  height: 70px;
  width: 100px;
  flex-direction: column;
  align-items: center;
`;
export const TextAboutsInfo = styled.Text`
  font-size: 12px;
  color:#666666;
  margin-top: 10px;

`;
