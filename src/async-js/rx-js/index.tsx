import React from 'react';
import { Basics } from './basics';
import {ThinkingReactive} from './thinking-reactive';

export const RxJs = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <Basics />
        <ThinkingReactive />
    </article>
);
