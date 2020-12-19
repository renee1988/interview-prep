import React from 'react';
import {RawTypes} from './raw-types';
import { UncheckedWarnings } from './unchecked-warnings';

export const Generics = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <RawTypes />
        <UncheckedWarnings />
    </article>
);
