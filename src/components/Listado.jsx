import styled from "styled-components";
import { useState } from "react";

const ListadoPacientes = ({ Pacientes }) => {
  const pacientesInfo = [
    {
      id: "34D866CC-934B-88A6-5587-2CB71803520F",
      name: "Tamekah Hartman",
      date: "Jul 1, 2023",
      rut: "12135336-9",
      pasaporte: "48570862",
      url: "https://nytimes.com",
    },
    {
      id: "C4941A8D-8F0B-8B54-5C8D-2616E2157999",
      name: "Alice Yang",
      date: "Nov 14, 2022",
      rut: "36392635-5",
      pasaporte: "45975564",
      url: "https://nytimes.com",
    },
    {
      id: "B5538940-5E29-B2E1-0761-CAD3A92E5059",
      name: "Jane Mitchell",
      date: "Feb 24, 2023",
      rut: "38948266-8",
      pasaporte: "41837520",
      url: "https://pinterest.com",
    },
    {
      id: "25574A90-914B-7CE5-98CB-1609B2489F39",
      name: "Joy Underwood",
      date: "Jul 22, 2023",
      rut: "49983679-1",
      pasaporte: "11938196",
      url: "https://ebay.com",
    },
    {
      id: "41D810C7-C2BD-1231-9E10-DBB5A27C1328",
      name: "Judith Jenkins",
      date: "Feb 27, 2023",
      rut: "28767331-0",
      pasaporte: "7266281",
      url: "https://cnn.com",
    },
    {
      id: "2BEC85C1-BFFD-9969-77C7-C3518E50A35A",
      name: "Ariel Ramsey",
      date: "Mar 27, 2023",
      rut: "39430930-3",
      pasaporte: "15175453",
      url: "http://youtube.com",
    },
    {
      id: "2CBDD063-B26C-1D87-7F82-D1221D1934AC",
      name: "Matthew Thornton",
      date: "Sep 24, 2023",
      rut: "46937440-8",
      pasaporte: "47938865",
      url: "https://twitter.com",
    },
    {
      id: "503B4BD2-CA35-CDD4-9C05-7E1991779C45",
      name: "Ezra Dejesus",
      date: "Jul 27, 2023",
      rut: "2346466-7",
      pasaporte: "24929180",
      url: "http://youtube.com",
    },
    {
      id: "FAD6114F-ABE2-6D3E-C139-E9DC58E8C247",
      name: "Clio Cox",
      date: "May 17, 2022",
      rut: "10582669-9",
      pasaporte: "36670864",
      url: "https://naver.com",
    },
    {
      id: "02104CFD-17E8-4DAD-03E1-B608C26AEAF2",
      name: "Hakeem Frazier",
      date: "Aug 3, 2023",
      rut: "48297276-4",
      pasaporte: "35879442",
      url: "https://cnn.com",
    },
    {
      id: "D3EE72F7-4C25-8A1D-749B-A564DE758566",
      name: "Gay Herrera",
      date: "Oct 25, 2023",
      rut: "21565918-6",
      pasaporte: "4670833",
      url: "http://bbc.co.uk",
    },
    {
      id: "4D7B9E61-B624-188B-AA48-04BBA2A58AD5",
      name: "Rogan Dominguez",
      date: "Nov 16, 2023",
      rut: "21543885-6",
      pasaporte: "6898376",
      url: "https://twitter.com",
    },
    {
      id: "DDF8BE0A-C618-7C26-6859-C24068D15137",
      name: "Ria Savage",
      date: "Aug 1, 2022",
      rut: "31241578-K",
      pasaporte: "1752256",
      url: "http://bbc.co.uk",
    },
    {
      id: "E98B797B-5733-FC41-7231-947E0B5386B1",
      name: "Asher Willis",
      date: "Feb 11, 2023",
      rut: "6177598-6",
      pasaporte: "23930103",
      url: "https://nytimes.com",
    },
    {
      id: "7A92244D-57C2-6EB6-9E60-D39C94195848",
      name: "Deborah Bryan",
      date: "Aug 6, 2022",
      rut: "29390750-1",
      pasaporte: "12569397",
      url: "https://guardian.co.uk",
    },
    {
      id: "38AE817D-CFDB-14BE-6C2D-D74D7C2942CE",
      name: "Mona Hurley",
      date: "Apr 4, 2022",
      rut: "863892-6",
      pasaporte: "13298507",
      url: "http://cnn.com",
    },
    {
      id: "D9852A4B-9B57-7BBF-369F-E6B9F3E24B9A",
      name: "Aaron Moody",
      date: "Jun 26, 2023",
      rut: "46311649-0",
      pasaporte: "4695418",
      url: "https://whatsapp.com",
    },
    {
      id: "A414EA9A-919E-E757-696A-EAFAE9E50271",
      name: "Hiroko Cross",
      date: "Jul 3, 2023",
      rut: "28609936-K",
      pasaporte: "22956210",
      url: "https://bbc.co.uk",
    },
    {
      id: "D56A0001-B79C-9E4E-7918-97CF8B242A8E",
      name: "Idola Raymond",
      date: "Aug 11, 2023",
      rut: "29485783-4",
      pasaporte: "24623631",
      url: "http://twitter.com",
    },
    {
      id: "D7106A6D-9E8C-56EE-38D7-5CAE82B64E96",
      name: "Quinlan Heath",
      date: "Dec 31, 2022",
      rut: "20933997-8",
      pasaporte: "11246474",
      url: "https://google.com",
    },
  ].slice(0, 10);

  const [modalInfo, setModalInfo] = useState({
    id: "34D866CC-934B-88A6-5587-2CB71803520F",
    name: "Tamekah Hartman",
    date: "Jul 1, 2023",
    rut: "12135336-9",
    pasaporte: "48570862",
    url: "https://nytimes.com",
    mostrar: false,
  });

  const toggleModal = () => {
    setModalInfo(() => ({ ...modalInfo, mostrar: true }));
    console.log(modalInfo);
  };

  return (
    <ListadoContainer>
      {modalInfo.mostrar && (
        <Modal className="modal">
          <form>
            <button
              className="cerrarModal"
              onClick={() => setModalInfo({ ...modalInfo, mostrar: false })}
            >
              cerrar ventana
            </button>
            <fieldset>
              <legend>Datos personales</legend>
              <label htmlFor="identificacion">Identificacion</label>
              <select name="identificacion" id="identificacion">
                <option value="RUT">RUT</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
              <input
                type="text"
                name="numeroid"
                placeholder="ejemp. 22.222.222'2"
              />

              <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="nombre"
                />
              </div>

              <div>
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="apellido"
                />
              </div>
            </fieldset>
            <input type="submit" />
          </form>
        </Modal>
      )}
      <ContenedorPacientes>
        <table>
          <caption>listado pacientes</caption>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Identificacion</th>
              <th>Direccion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pacientesInfo.map((paciente) => {
              return (
                <tr key={paciente.id}>
                  <td>{paciente.date}</td>
                  <td>{paciente.name}</td>
                  <td>{paciente.name}</td>
                  <td>{paciente.rut}</td>
                  <td>{paciente.url}</td>
                  <td>
                    <div className="contenedorBotones">
                      <button onClick={toggleModal}>perfil</button>
                      <button>borrar</button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {pacientesInfo.map((paciente) => {
              return (
                <tr key={paciente.id}>
                  <td>{paciente.date}</td>
                  <td>{paciente.name}</td>
                  <td>{paciente.rut}</td>
                  <td>{paciente.name}</td>
                  <td>{paciente.name}</td>
                  <td>
                    <div className="contenedorBotones">
                      <button>perfil</button>
                      <button>borrar</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ul></ul>
      </ContenedorPacientes>
    </ListadoContainer>
  );
};

const ListadoContainer = styled.div`
  /* height: 100%; */
  display: grid;
  place-content:center;
  /* background-color: red; */
`;

const ContenedorPacientes = styled.div`
  text-align: center;
  font-weight: 600;
  width: 90%;
  border: solid;
  border-radius: 1rem;
  padding: 0.5rem;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    /* border: 1px solid black; */
    border-radius: 1rem;

    th,
    td {
      padding: 0.3rem;
    }
    tbody {
      tr {
        background-color: white;

        :nth-child(odd) {
          background-color: #456fcb47;
          color: #000000;
        }
      }
    }

    .contenedorBotones {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      button {
        border: none;
        border-radius: 0.3rem;
        padding: 0.3rem;
      }
    }
  }
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: #616060c5;
  backdrop-filter: blur(0.1rem);
  top: 0;
  left: 0;
  display: grid;
  place-items: center;

  form {
    .cerrarModal {
      border: none;
      width: max-content;
      border-radius: 0.2rem;
      padding: 0.3rem;
      align-self: flex-end;
    }
    /* border: red solid; */
    background-color: #d2d2d7;
    min-height: 30%;
    width: 30%;
    border-radius: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-flow: column;
    backdrop-filter: blur(3rem);
    position: absolute;

    div {
      display: flex;
      flex-flow: column;
      input {
        border-radius: 0.3rem;
        border: none;
        padding: 0.2rem;
        /* background-color: green; */
      }
    }
  }
`;

export default ListadoPacientes;
