import React from "react";
import {Layout} from "antd";
import styled, {ThemeProvider} from "styled-components";
import theme from './utils/theme';
import PathRouter from "./pages/PathRouter";

const App: React.FC = () => (
    <LayoutWrapper>
        <ThemeProvider theme={theme}>
            <PathRouter/>
        </ThemeProvider>
    </LayoutWrapper>
);

const LayoutWrapper = styled(Layout)`
    min-height: 100vh;
    width: calc(100vw - 20px);
`;

export default App;
