import React from 'react';
import { GenericTypes } from './generic-types';
import {RawTypes} from './raw-types';
import { UncheckedWarnings } from './unchecked-warnings';

export const Generics = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <RawTypes />
        <UncheckedWarnings />
        <GenericTypes />
    </article>
);
