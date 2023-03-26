import styled from "@emotion/styled";

export const ErrorPage = () => (
    <Container>
        <Heading>Oops!</Heading>
        <p>Sorry, an unexpected error has occurred.</p>
    </Container>
);

const Container = styled.div`
    text-align: center;
`;

const Heading = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;
