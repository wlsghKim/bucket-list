import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: #101010;
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const Button = ({ title, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};
export default Button;
