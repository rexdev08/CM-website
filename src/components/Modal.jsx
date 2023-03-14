import styled from "styled-components";

const Modal = ({ estado, setToggle }) => {
  if (estado) {
    return (
      <OverlayStyled onClick={() => setToggle(false)}>
        <ModalStyled onClick={(e) => e.stopPropagation()}>
          <div className="tile tile1">
            <h4>Linares - Centro Médico DeLatorre</h4>
            <div className="buttonContainer">
              <a href="https://wa.me/56957128338">Whatsapp</a>
              <a href="tel:732221577">732 221 577</a>
            </div>
            <button className="closeBtn" onClick={()=> setToggle(false)}>X</button>
          </div>

          {/* -----------------------------------*/}
          <div className="tile tile2">
            <h4>Colbún - Clínica San Mateo</h4>
            <div className="buttonContainer">
              <a href="https://wa.me/56957128338">Whatsapp</a>
              <a href="tel:712404057">712 404 057</a>
            </div>
          </div>
        </ModalStyled>
      </OverlayStyled>
    );
  }
};

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #06071d5d;
  backdrop-filter: blur(0.3rem);
  /* display: grid;
  place-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;

  /* padding:1rem; */
`;

const ModalStyled = styled.div`
  width: 100%;
  /* min-height: 60%; */
  max-width: 600px;
  background-color: white;
  border-radius: 0.5rem;
  display: grid;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  position: relative;

  .tile {
    text-align: center;
    text-shadow: 1px 1px 1px black;
    width: 100%;
    height: 100%;
    /* border: solid; */
    padding: 0.5rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 2rem;
    background-color: var(--color-primary);
    padding: 2rem;

    h4 {
      color: white;
    }

    &2 {
      background-color: var(--color-third);
    }

    .closeBtn {
      position: absolute;
      top:1.5rem;
      right:1.5rem;
      /* padding:.3rem; */
      font-weight:bold;
      font-size:1.5rem;
      border:none;
      background-color:transparent;
      color:var(--color-fourth);
      cursor:pointer;
    }
  }

  .buttonContainer {
    width: 100%;
    display: flex;

    a {
      flex-basis: 100%;
      padding: 0.6rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: var(--fw-bold);
      color: var(--color-primary);
      transition: transform 0.2s ease;
      transform: scale(0.9);
      background-color: var(--color-fourth);
      color: white;

      :nth-child(1) {
        background-color: #25d366;
      }

      :hover {
        transform: scale(1);
      }
    }
  }
`;

export default Modal;
