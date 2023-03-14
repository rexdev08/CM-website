import styled from "styled-components";
import { md } from "../../breakpoints";
import centroMedico from "../../assets/de-la-torre-frontal.webp";
import centroMedico2 from "../../assets/san-mateo-frontal.webp";
import { FaClock } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

const Sucursales = () => {
  return (
    <SucursalesStyled id="sucursales">
      <div className="titleContainer lg">
        <h2>Sucursales</h2>
        <hr />
      </div>

      <div className="gridContainer lg">
        <div className="item item1" id="CMDeLaTorre">
          <h4>Linares - Centro Médico DeLatorre</h4>
          <div>
            <img src={centroMedico} alt="" />
          </div>
          <div className="textContiner">
            <span>
              <FaClock className="icon" /> Lunes a Viernes 09:00 - 19:00
            </span>
            <span>
              <FaClock className="icon" /> Sábado
            </span>
            <span>
              <FaMapMarkedAlt className="icon" /> Yumbel 558, Linares
            </span>
          </div>
          <div className="buttonContainer">
            <a href="https://wa.me/56957128338">Whatsapp</a>
            <a href="tel:732221577">732 221 577</a>
          </div>

          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.103768713351!2d-71.5923387!3d-35.846458999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665f5432dd4ff35%3A0x6385e1d702179b72!2sCentro%20Medico%20Delatorre!5e0!3m2!1ses-419!2scl!4v1677588638074!5m2!1ses-419!2scl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            role={"button"}
            className="directionsBtn"
            href="https://www.google.com/maps/place/Centro+Medico+Delatorre/@-35.846459,-71.5923387,17z/data=!3m1!4b1!4m6!3m5!1s0x9665f5432dd4ff35:0x6385e1d702179b72!8m2!3d-35.846459!4d-71.5923387!16s%2Fg%2F11ckvg1gcp"
          >
            CÓMO LLEGAR
          </a>
        </div>
        <div className="item item2" id="CMSanMateo">
          <h4>Colbún - Clínica San Mateo</h4>
          <div>
            <img src={centroMedico2} alt="" />
          </div>
          <div className="textContiner">
            <span>
              <FaClock className="icon" /> Lunes a Viernes 8:30 - 20:30
            </span>
            <span>
              <FaClock className="icon" /> Sábado 09:00 - 16:00
            </span>
            <span>
              <FaMapMarkedAlt className="icon" /> O'higgins 205, Colbún
            </span>
          </div>
          <div className="buttonContainer">
            <a href="https://wa.me/56957128338">Whatsapp</a>
            <a href="tel:712404057">712 404 057</a>
          </div>

          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3240.1201062715877!2d-71.408957!3d-35.6986619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96658fa201d81a0b%3A0x9bd5f242b98f81a1!2sClinica%20San%20Mateo!5e0!3m2!1ses-419!2scl!4v1677588795720!5m2!1ses-419!2scl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            role={"button"}
            className="directionsBtn"
            href="https://www.google.com/maps/place/Clinica+San+Mateo/@-35.6986619,-71.408957,17z/data=!4m5!3m4!1s0x96658fa201d81a0b:0x9bd5f242b98f81a1!8m2!3d-35.6986663!4d-71.4067683"
          >
            CÓMO LLEGAR
          </a>
        </div>
      </div>
    </SucursalesStyled>
  );
};

const SucursalesStyled = styled.section`
scroll-margin-top:100px;
  background-color: var(--color-fifth);
  color: white;
  text-align: center;
  padding: 2rem;
  display: grid;
  place-content: center;
  place-items: center;
  gap: 2rem;

  .gridContainer {
    width: 100%;
    display: grid;
    gap: 2rem;
    /* border: red solid; */

    .icon {
      color: var(--color-fourth);
    }

    .item {
      scroll-margin-top: 120px;
      display: grid;
      gap: 1rem;
      align-items: center;

      /* border: #00ffa2 solid; */

      .textContiner {
        display: flex;
        flex-flow: column;
        align-items: start;
        gap: 0.5rem;

        /* border: red solid; */
      }

      .directionsBtn {
        background-color: var(--color-fourth);
        padding: 0.6rem;
        border: none;
        border-radius: 0.5rem;
        font-weight: var(--fw-bold);
        color: white;
      }

      .buttonContainer {
        display: flex;
        gap: 1rem;
        a {
          background-color: white;
          flex-basis: 100%;
          padding: 0.6rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: var(--fw-bold);
          color: var(--color-primary);
          transition: transform 0.2s ease;

          :nth-child(1) {
            background-color: #25d366;
            color: white;
          }

          :hover {
            transform: scale(1.1);
          }
        }
      }
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 1rem;
      /* display:none; */
    }

    h4 {
      color: white;
    }

    iframe {
      border-radius: 1rem;
      height: 14rem;
      /* max-height: 60%; */
    }

    @media (min-width: ${md}) {
      grid-template: 1fr/ 1fr 1fr;

      iframe {
        height: 18rem;
        /* max-height: 60%; */
      }
    }
  }
`;

export default Sucursales;
