import { ContainerCard } from "./styles";

// eslint-disable-next-line react/prop-types
export function CardCharacter({ image, name, genre, specie }) {
  return (
    <ContainerCard>
      <div className="imagem">
        <img src={image} alt="Imagem do personagem" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <ul>
          <li>Gênero: {genre}</li>
          <li>Espécie: {specie}</li>
        </ul>
      </div>
    </ContainerCard>
  );
}
