import { useEffect, useState } from 'react';
import PokeInfo from './PokeInfo';
import IPokeInfo from '../../types/pokemon.type';

function Pokemon() {
  const initialInfo: IPokeInfo = {
    id: 0,
    name: '',
    weight: 0,
    frontImage: '',
    backImage: '',
  };

  const [id, setId] = useState<number>(1);
  const [info, setInfo] = useState<IPokeInfo>(initialInfo);

  const handlePrevious = () => {
    setId(id - 1);
  };
  const handleNext = () => {
    setId(id + 1);
  };

  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((pokeInfo) => {
        setIsError(false);
        setInfo({
          id: pokeInfo.id,
          name: pokeInfo.name,
          weight: pokeInfo.weight,
          frontImage: pokeInfo.sprites.front_default,
          backImage: pokeInfo.sprites.back_default,
        });
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error.toString());
      });
  }, [id]);

  let component1 = (
    <PokeInfo
      id={info.id}
      name={info.name}
      weight={info.weight}
      frontImage={info.frontImage}
      backImage={info.backImage}
    />
  );

  if (isError) {
    component1 = <p>{errorMessage}</p>;
  }

  return (
    <div>
      {component1}
      <div style={{ paddingLeft: '15px' }}>
        <button onClick={handlePrevious} style={{ marginRight: '30px' }}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Pokemon;
