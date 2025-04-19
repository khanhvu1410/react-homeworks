import PokeInfo from '../../types/pokemon.type';
import './PokeDetail.css';

function PokeDetail(props: PokeInfo) {
  return (
    <div className="poke-box">
      <p className="poke-id">ID: {props.id}</p>
      <p className="poke-name">Name: {props.name}</p>
      <p className="poke-weight">Weight: {props.weight}</p>
      <img
        className="poke-image"
        src={
          props.frontImage ||
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
      />
      <img
        className="poke-image"
        src={
          props.backImage ||
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
        }
      />
    </div>
  );
}

export default PokeDetail;
