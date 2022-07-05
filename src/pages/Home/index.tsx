import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { personaService } from "../../services/personas";
import "./style.css";

type Personas = {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  image: string;
};

const Home = () => {
  const [personas, setPersonas] = useState<Personas[]>([]);
console.log(personas);

  const loadPersonas = async () => {
    const result = await personaService.personasList();
    setPersonas(result.data.results);
  };

  useEffect(() => {
    loadPersonas();
  }, []);

  return (
    <div className="card">
      {personas.map((perso, i) => (
        <div key={perso.id} className="infos">
          <img
            src={`https://rickandmortyapi.com/api/character/avatar/${
              i + 1
            }.jpeg`}
            alt="Personagem"
          />
          <Link to={`/info/${perso.id}`} state={{id: perso.id}}>
            <h1 className="infos">Name: {perso.name}</h1>
          </Link>
          <p className="infos">Specie: {perso.species}</p>
          <p className="infos">Origin: {perso.origin.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
