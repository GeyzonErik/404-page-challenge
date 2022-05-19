import React from 'react';
import { Button, Container, Creator, Image, MainText, PageTitle, Text, Trademark } from '../assets/Components/PageComponents';

function Error404Page() {
    return (
        <Container>
            <PageTitle> 404 not found </PageTitle>
            <Image src={require('../assets/Image/Scarecrow.png')} />
            <MainText>I have bad news for you</MainText>
            <Text>
                The page you are looking for 
                might be removed or is 
                temporarily unavailable
            </Text>
            <Button>Back to homepage</Button>
            <Trademark>
                created by <Creator href={'https://github.com/GeyzonErik'} taget='_blank'>username</Creator> 
                - devChallenges.io
            </Trademark>
        </Container>
        
        
    );
}

export default Error404Page;