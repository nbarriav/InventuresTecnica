import styled from 'styled-components';

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll;
`;
// Header de la seccion
export const MedicineHeader = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: #414046;
  background: #f5f5f5;
  padding: 2% 3%;
`;

// ImageContainer

export const MedicinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
`;

export const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 25%;
`;
