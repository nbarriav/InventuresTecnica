import React from 'react';
import {
  InstructionDiv,
  InstructionImage,
  InstructionTitle,
  InstructionText,
} from './styles';
import pill from '../../assets/icons/pill.svg';

const Instructions = () => {
  return (
    <InstructionDiv>
      <InstructionImage src={pill}></InstructionImage>
      <InstructionTitle>Revisa tus compras</InstructionTitle>
      <InstructionText>
        Agrega al carro lo que necesites reponer
      </InstructionText>
    </InstructionDiv>
  );
};
export default Instructions;
