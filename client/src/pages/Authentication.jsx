import {React, useState} from "react";
import styled from "styled-components";
import LogoImage from "../utils/LogoImage.png"
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";

const Container = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    background: ${({ theme }) => theme.bg};
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    flex: 1;
    background: blue;
    position: relative;
    display: none;
    @media (max-width: 700px) 
`;

const Right = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 16px;
    align-items: center;
`;

const Logo = styled.img`
    position: absolute;
    width: 70px;
    top: 40px;
    left: 60px;
    z-index: 10;
`;

const Text = styled.div`
    font-size: 16px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};
    margin-top: 16px;
    @media (max-width: 400px){
        font-size: 14px;
    }
`;

const TextButton = styled.span`
    color: ${({theme}) => theme.primary};
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
`;


const Authentication = () => {
    const [login, setLogin] = useState(false);
    return (
        <Container>
            <Left>
                <Logo src = {LogoImage}/>
            </Left>
            <Right>
                {!login ? (
                        <>
                            <SignIn />
                            <Text>
                                Don't have a account?
                                <TextButton onClick={() => setLogin = (true)}> Sign Up</TextButton>
                            </Text>
                        </>
                    ) : (
                        <>
                            <SignUp />
                            <Text>
                                Already have a account? 
                                <TextButton onClick={() => setLogin = (false)}> Login</TextButton>
                            </Text>
                        </>
                    )
                }
            </Right>
        </Container>
    );
};

export default Authentication;