import styled from "styled-components";

const PieDePagina = () => {
  return (
    <PieDePaginaStyled>
      <span>
        Diseñado por <b>Raimundo Rincon</b>
      </span>
    </PieDePaginaStyled>
  );
};

const PieDePaginaStyled = styled.footer`
  background: var(--color-third);
  height: 2rem;
  display: grid;
  place-items: center;
  color: white;
`;
export default PieDePagina;
