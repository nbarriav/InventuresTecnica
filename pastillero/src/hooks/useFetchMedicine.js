import { useState, useEffect } from 'react';

export const useFetchMedicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getMedicines = async () => {
      try {
        const response = await fetch(
          'https://private-anon-743bc462cf-inventurestest.apiary-mock.com/products'
        );
        const data = await response.json();
        setMedicines(data['payload']);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    };
    getMedicines().catch((error) => console.error(error));
  }, []);
  return { medicines: medicines, isLoading };
};
