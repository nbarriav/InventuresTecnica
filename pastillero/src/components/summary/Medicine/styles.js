import styled from 'styled-components';
export const MedicineContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4%;
  border-bottom: 1px solid #e0e0e0;
  padding: 4% 2%;
`;
export const ImageContainer = styled.div`
  align-self: center;
  width: 20%;
`;
export const Image = styled.img`
  width: 100%;
`;

// InfoContainer
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

export const Name = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.15px;
  color: #414046;
`;

export const Dose = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.54);
`;
export const Stock = styled.div`
width: 20%
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: #F44336; 
`;
export const CartDiv = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  background: none;
  border: none;
  cursor: pointer;
`;
export const Cart = styled.img`
  width: 95%;
  padding-bottom: 50%;
  padding-left: 20%;
`;
