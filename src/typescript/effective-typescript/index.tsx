import React from 'react';
import { CodeGen } from './code-gen';
import { ConfigurationOptions } from './configuration-options';
import { JsAndTsRelationship } from './js-and-ts-relationship';
import { StructuralTyping } from './structural-typing';
export const EffectiveTypeScript = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <JsAndTsRelationship />
        <ConfigurationOptions />
        <CodeGen />
        <StructuralTyping />
    </article>
);
