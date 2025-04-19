import { useEffect, useState } from 'react';
import PokeInfo from '../../types/pokemon.type';
import PokeDetail from './PokeDetail';

function Pokemon() {
  const initialInfo: PokeInfo = {
    id: 0,
    name: '',
    weight: 0,
    frontImage: '',
    backImage: '',
  };

  const [id, setId] = useState<number>(1);
  const [info, setInfo] = useState<PokeInfo>(initialInfo);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handlePrevious = () => {
    setId(id - 1);
  };
  const handleNext = () => {
    setId(id + 1);
  };

  const handleDisplayContent = () => {
    if (isError) {
      return <p>{errorMessage}</p>;
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    return (
      <PokeDetail
        id={info.id}
        name={info.name}
        weight={info.weight}
        frontImage={info.frontImage}
        backImage={info.backImage}
      />
    );
  };

  useEffect(() => {
    setLoading(true);
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
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [id]);

  return (
    <div>
      {handleDisplayContent()}
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
