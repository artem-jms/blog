import React, {FC} from 'react';
import {Header} from "./common/components/header/header.component";
import {Banner} from "./common/components/banner/banner.component";
import {Container} from "./common/components/container/container.component";
import {HomePage} from "./pages/HomePage";

interface AppProps {}

export const App : FC<AppProps> = ({}) => {
    return (
        <div>
            <Header />
            <Banner />
            <HomePage />
        </div>
    );
};

