import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

//variables css
:root{

  //colores
  --color-primary:#1B418C;
  --color-secondary:#086ACD;
  --color-third:#0A68CB;
  --color-fourth:#29d8db;
  --color-fifth:#242E6D;


  --color-text: #7A7A7A;
  --color-text-black:#4A4A4A;

  //font-family
  --ff-primary:'Montserrat', sans-serif;
  --ff-body:var(--ff-primary);
  --ff-headeing:var(--ff-primary);

  //font-weight
  
  --fw-small:300;
  --fw-regular:400;
  --fw-medium:500;
  --fw-bold:700;
  --fw-black:900;

  //font-size
  --fs-small:.8125rem;//13px
  --fs-small-plus:0.9rem;//14px
  --fs-regular:1rem;//16px
  --fs-medium:1.1rem;
  --fs-large:1.4rem;
  --fs-xl:1.5rem;//36px

  --fs-body:var(--fs-small);
  --fs-nav:var(--fs-regular);
  --fs-button:var(--fs-small);
  --fs-h1:24px;
  --fs-h2:22px;
  --fs-h3:20px;
  --fs-h4:20px;

  //border-radius
  --br-50:.5rem;
  --br-100:1rem;
}

//css reset
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
}


html{
  scroll-behavior:smooth ;
}

/* //scroll-bar
::-webkit-scrollbar{
  background-color:var(--color-primary);
  
} */

/* ::-webkit-scrollbar-thumb{
  background-color:white;
  border:solid;
  border-radius:.5rem;
  :hover{
    background-color: whitesmoke;
  }
} */

//headings
h1{
  font-size:var(--fs-h1);
  font-weight:var(--fw-bold);
}
h2{
  font-size:var(--fs-h2);
  font-weight:var(--fw-bold);
}
h3{
  font-size:var(--fs-h3);
  font-weight:var(--fw-bold);
}
h4{
  font-size:var(--fs-h4);
  color:var(--color-text-black);
  font-weight:var(--fw-bold);
}


a{
  text-decoration: none;
  /* color: white; */
}


img{
  width:100%;
  height:auto;
}

li{
  list-style:none;
}

//clases utilitarias
.xs{max-width:320px;}
.sm{max-width:576px;}
.md{max-width:768px;}
.lg{max-width:992px;}
.xl{max-width:1200px;}
.xxl{max-width:1400px;}

`;

export default GlobalStyles;
