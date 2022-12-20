import React from 'react';
import * as S from './styles';
import '@fontsource/poppins';
import Medicine from './Medicine/Medicine';
import ReactLoading from 'react-loading';
import { useFetchMedicine } from '../../hooks/useFetchMedicine';
const Summary = () => {
  const { medicines, isLoading } = useFetchMedicine();
  return (
    <S.Summary>
      <S.MedicineHeader>Te queda</S.MedicineHeader>
      {isLoading ? (
        <S.LoadingDiv>
          <ReactLoading
            type={'spin'}
            color={' #0277bd'}
            height={100}
            width={100}
          />
        </S.LoadingDiv>
      ) : (
        <S.MedicinesContainer>
          {medicines.map((medicine) => (
            <Medicine
              key={medicine.id}
              name={medicine.name}
              concentration={medicine.concentration}
              imagesUrl={medicine.imagesUrl}
            />
          ))}
          {medicines.map((medicine) => (
            <Medicine
              key={medicine.id}
              name={medicine.name}
              concentration={medicine.concentration}
              imagesUrl={medicine.imagesUrl}
            />
          ))}
        </S.MedicinesContainer>
      )}
    </S.Summary>
  );
};

export default Summary;
