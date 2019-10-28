import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './style';
import logoNubank from '~/assets/Nubank_Logo.png';

const Header = () => (
    <Container>
        <Top>
            <Logo source={logoNubank} />
            <Title>Lucas</Title>
        </Top>
        <Icon name='keyboard-arrow-down' size={20} color="#fff"></Icon>
    </Container>
);

export default Header;
