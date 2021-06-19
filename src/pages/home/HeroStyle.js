import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  text-align: center;
  padding: 24px 16px;
  margin: 20px;
  background: #fff;

  header {
    h1 {
      color: #aaa;
      font-size: 36px;
      font-weight: 400;
      text-align: center;

      strong {
        color: #313131;
      }
    }
  }

  div#containerInput {
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 10px;
    margin-bottom: 30px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Group = styled.div`
  /* margin: 20px; */
  /* text-align: center;
  position: relative; */
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
  position: relative;
`;

const urlImg = (props) =>
  `${props.thumbnail.path}/portrait_fantastic.${props.thumbnail.extension}`;

export const Content = styled.div`
  transform: translateY(100px);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  opacity: 1;
  /* margin: 10px 50px; */
  /* padding: -10px; */

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    button {
      white-space: nowrap;
      overflow: hidden;
      width: 200px;
      border: 0px;
      height: 40px;
      background: #40a9ff;
      color: #fff;
      font-size: 15px;
      text-overflow: ellipsis;
      &:hover {
        background: ${shade(0.2, '#40a9ff')};
      }
    }
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 1s linear infinite;
`;

export const Card = styled.div`
  transition: 0.4s;

  position: relative;
  width: 200px;
  margin: 10px 50px;
  text-align: center;
  font-size: 13pt;
  border: 1px solid #ccc;
  padding: 0px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 350px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
  &:hover {
    ${Content} {
      transform: translateY(25px);
      opacity: 1;
    }
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 15px;
  }

  div#img {
    display: block;
    height: 270px;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
