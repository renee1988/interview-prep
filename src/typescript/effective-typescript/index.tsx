import React from 'react';
import { ConfigurationOptions } from './configuration-options';
import { JsAndTsRelationship } from './js-and-ts-relationship';
export const EffectiveTypeScript = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <JsAndTsRelationship />
        <ConfigurationOptions />
    </article>
);
