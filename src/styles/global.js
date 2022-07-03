import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: Poppins
   }
   
   .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }
  
  @keyframes skeleton-loading {
    0% {
      background-color: rgb(245, 245, 245) e;
    }
    100% {
      background-color: #eeeeee;
    }
  }
  
   `;
