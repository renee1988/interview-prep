import React from 'react';
import { GenericTypes } from './generic-types';
import {RawTypes} from './raw-types';
import { UncheckedWarnings } from './unchecked-warnings';
import { PreferLists } from './prefer-lists';
import { GenericMethods } from './generic-methods';
import { BoundedWildcards } from './bounded-wildcards';

export const Generics = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <RawTypes />
        <UncheckedWarnings />
        <PreferLists />
        <GenericTypes />
        <GenericMethods />
        <BoundedWildcards />
    </article>
);
