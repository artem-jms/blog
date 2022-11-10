import React, {FC, useState} from 'react';
import {Container} from "../common/components/container/container.component";
import {Sidebar} from "../common/components/sidebar/sidebar.component";

interface HomePageProps {}

export const HomePage:FC<HomePageProps> = ({}) => {

    return (
        <Container className={'px-4 py-4'}>
            <div className={'flex'}>
                <div className={'relative px-p15 min-w-mw75 flex-f75'}>1</div>
                <div className={'relative px-p15 min-w-mw25 flex-f25'}>
                    <Sidebar />
                </div>
            </div>
        </Container>
    );
};

