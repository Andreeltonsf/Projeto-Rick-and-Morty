import axios from "axios";
import { useEffect, useState } from "react";
import { CardCharacter } from "../CardCharacter";
import { Container, ContentCharacters, HeaderApp } from "./styles";

export function Application() {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);

  const [countPage, setCountPage] = useState("");

  const [qtdCharacters, setQtdCharacters] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        const arrayCharacters = [...characters, ...response.data.results];
        setCharacters(arrayCharacters);
        setCountPage(response.data.info.count);
        setQtdCharacters(response.data.info.count);
      });
  }, [page]);

  return (
    <>
      <Container>
        <HeaderApp>
          <h1>Ricky and Morty</h1>
          <span>N° de personagens:{qtdCharacters}</span>
        </HeaderApp>
        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ id, image, name, species, gender }) => (
                <CardCharacter
                  key={id}
                  image={image}
                  name={name}
                  genre={gender}
                  specie={species}
                />
              ))}
          </div>
          {!(page === countPage) && (
            <button onClick={() => setPage(page + 1)}>Carregar mais</button>
          )}
        </ContentCharacters>
      </Container>
    </>
  );
}
