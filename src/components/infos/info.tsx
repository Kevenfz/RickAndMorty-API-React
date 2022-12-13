import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { infoId } from "../../services/infos";
import "./info.css";
import { RiLogoutCircleLine } from "react-icons/ri";

type infoPersonas = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
};

const Infos = () => {
  const navigate = useNavigate();

  function HomePage() {
    navigate("/");
  }

  const [infos, setInfos] = useState<infoPersonas>({
    id: 0,
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: {
      name: "",
    },
    location: {
      name: "",
    },
    image: "",
  });

  const location: any = useLocation();

  const { id } = location.state;

  const loadPersonaId = async () => {
    const result = await infoId.infos(id);
    setInfos(result.data);
  };

  useEffect(() => {
    loadPersonaId();
  }, []);

  return (
    <div className="Container">
      <RiLogoutCircleLine onClick={HomePage} className="header-logout" />
      <div className="Card">
        <img src={infos.image} alt={`Imagem do personagem ${infos.name}`} />
        <div className="Card-infos">
          <h1>
            {" "}
            <b></b> {infos.name}
          </h1>
          <p>
            {" "}
            <b>Gender:</b> {infos.gender}
          </p>
          <p>
            {" "}
            <b>Specie:</b> {infos.species}
          </p>
          <p>
            {" "}
            <b>Status:</b> {infos.status}
          </p>
          <p>
            {" "}
            <b>Origin:</b> {infos.origin.name}
          </p>
          <p>
            {" "}
            <b>Location:</b> {infos.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
