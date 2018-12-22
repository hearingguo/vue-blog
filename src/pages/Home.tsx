import React, { Component } from 'react';
import styles from '../config/style';
import styled from 'styled-components';

const StyleHome = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

class Home extends Component {
  public render() {
    return <StyleHome>欢迎来到highya的博客</StyleHome>;
  }
}

export default Home;
