import React from 'react';
import { CheckedExceptions } from './checked-exceptions';
import {WhenToUseExceptions} from './when-to-use-exceptions';

export const Exceptions = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <WhenToUseExceptions />
        <CheckedExceptions />
    </article>
);
