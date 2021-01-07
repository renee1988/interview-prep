import React from 'react';
import { Any } from './any';
import { AvoidRepeating } from './avoid-repeating';
import { AvoidWrapperTypes } from './avoid-wrapper-types';
import { CodeGen } from './code-gen';
import { ConfigurationOptions } from './configuration-options';
import { ExcessPropertyChecking } from './excess-property-checking';
import { JsAndTsRelationship } from './js-and-ts-relationship';
import { Spaces } from './spaces';
import { StructuralTyping } from './structural-typing';
import { AvoidTypeAssertions } from './type-assertions';
import { TypeToFunctionExpression } from './type-to-function-expression';
import { TypeVsInterface } from './type-vs-interface';
import { TypesAsSetsOfValues } from './types-as-sets-of-values';
import { UseYourEditor } from './use-your-editor';
export const EffectiveTypeScript = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <JsAndTsRelationship />
        <ConfigurationOptions />
        <CodeGen />
        <StructuralTyping />
        <Any />
        <UseYourEditor />
        <TypesAsSetsOfValues />
        <Spaces />
        <AvoidTypeAssertions />
        <AvoidWrapperTypes />
        <ExcessPropertyChecking />
        <TypeToFunctionExpression />
        <TypeVsInterface />
        <AvoidRepeating />
    </article>
);
