import React from "react";
import styled, { keyframes } from "styled-components";

const ModalLogIn = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <h3>Ingrese sus credenciales</h3>
              <CloseBtn onClick={() => setShow(!show)}>
                <i className="icon-cancel"></i>
              </CloseBtn>
            </ModalHeader>
            <Form action="" method="post" className="loginForm">
              <p>
                <label htmlFor="nombreDeUsuario">USUARIO</label>
                <input type="email" name="" required />
              </p>
              <p>
                <label htmlFor="[password]">CONTRASEÑA</label>
                <input type="password" name="" required />
              </p>
              <p>
                <button onClick={() => setShow(!show)}>Ingresar</button>
              </p>
            </Form>
          </ModalContainer>
        </Overlay>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalLogIn;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.95);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  border: 4.4px solid black;
  width: 380px;
  min-height: 500px;
  position: relative;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px,
    rgba(139, 100, 100, 0.1) 0px 7px 19px 10px,
    rgba(100, 100, 111, 0.3) 0px 7px 200px 0px;

  padding: 2.1rem;
  font-family: "Octin College Bold";
  color: var(--white);
  background-color: rgba(100, 100, 111, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 7%;
  h3 {
    font-size: 1.2rem !important ;
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    flex: auto;
  }
`;
const CloseBtn = styled.div`
  display: grid;
  place-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: black;
  margin: 5px;
  &:hover {
    background: #f2f2f2;
  }

  i {
    width: 100%;
    height: 100%;
  }
`;

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Form = styled.form`
  width: 100%;

  margin-left: -12px;
  & p {
    position: relative;
    margin-top: 1rem;
    text-align: center;
  }

  & input {
    min-width: 100%;
    color: var(--white);
    margin: 0.9rem;
    border-radius: 4px;
    outline: 0;
    font-size: 20px;
    background: none;
    padding: 3px 10px 3px 3px;
    border: none;
    border-bottom: 1px solid var(--gris);

    :focus,
    :hover {
      outline: none;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
  }

  & label {
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: var(--white);
  }

  & button {
    margin-left: 19px;
    min-width: 65%;
    padding: 11px 13px;
    color: rgb(253, 249, 243);
    font-weight: 600;
    text-transform: uppercase;
    background: rgb(200, 50, 70);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0.6rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
    :hover {
      background: #f03d4e;
      animation: ${jump} 0.2s ease-out forwards;
    }
  }
`;
