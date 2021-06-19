import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 250px;

  input {
    appearance: none;
    background: none;
    outline: none;
    border: none;

    display: block;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border-radius: 20px;
    background-color: #eee;

    transition: 0.4s;

    ::placeholder {
      color: #888;
    }

    &:focus,
    &valid {
      background-color: #313131;
      color: #fff;
    }
  }
`;

// export const Container = styled.div`
//   display: flex;
//   align-items: center;

//   &:focus,
//   &valid {
//     background-color: #313131;
//     color: #fff;
//   }
//   background-color: #eee;

//   border-radius: 5px;
//   padding: 16px 16px 16px 6px;
//   /* width: 100%; */
//   border: 1px solid #babaca;

//   border-radius: 10px;
//   /* margin-left: 40px; */
//   div {
//     display: flex;
//     align-items: center;
//     margin-left: 10px;
//   }
//   input {
//     /* margin-left: 5px; */

//     width: 200px;

//     outline: 0;
//     /* color: #f4ede8; */
//     /* border-radius: 10px; */
//     background-color: #eee;
//     border: none;
//     &::placeholder {
//       /* opacity: 0.5; */
//       color: #888;
//     }
//     &:focus,
//     &valid {
//       background-color: #313131;
//       color: #fff;
//     }
//   }
// `;
