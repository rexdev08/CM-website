import styled from "styled-components";

const Crear = () => {
  return (
    <FormContenedor>
      <form>
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
            <input type="text" id="nombre" name="nombre" placeholder="nombre" />
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
    </FormContenedor>
  );
};

const FormContenedor = styled.div`
  /* border: #ffffff solid; */
  background-color: #fafafa11;
  height: 100%;

  display: grid;
  place-items: center;
  text-align: left;
  color: #ffffff;
  font-size: 1.5rem;

  form {
    /* border: red solid; */
    background-color: #4e527e68;
    min-height: 50%;
    width: 60%;
    border-radius: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-flow: column;
    backdrop-filter: blur(3rem);

    div {
      display: flex;
      flex-flow: column;
      input {
        border-radius: 0.5rem;
        background-color: green;
      }
    }
  }
`;

export default Crear;
