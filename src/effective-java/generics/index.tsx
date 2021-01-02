import React from 'react';
import { GenericTypes } from './generic-types';
import {RawTypes} from './raw-types';
import { UncheckedWarnings } from './unchecked-warnings';
import { PreferLists } from './prefer-lists';
import { GenericMethods } from './generic-methods';
import { BoundedWildcards } from './bounded-wildcards';
import { CombineGenericsAndVarargs } from './combine-generics-and-varargs';
import { TypesafeHeterogeneousContainers } from './typesafe-heterogeneous-containers';

export const Generics = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <RawTypes />
        <UncheckedWarnings />
        <PreferLists />
        <GenericTypes />
        <GenericMethods />
        <BoundedWildcards />
        <CombineGenericsAndVarargs />
        <TypesafeHeterogeneousContainers />
    </article>
);
