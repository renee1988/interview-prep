import React from 'react';
import { Any } from './any';
import { AvoidRepeating } from './avoid-repeating';
import { AvoidWrapperTypes } from './avoid-wrapper-types';
import { CodeGen } from './code-gen';
import { ConfigurationOptions } from './configuration-options';
import { DifferentVariablesForDifferentTypes } from './different-vars-for-different-types';
import { ExcessPropertyChecking } from './excess-property-checking';
import { IndexSignature } from './index-signature';
import { InferableTypes } from './inferable-types';
import { JsAndTsRelationship } from './js-and-ts-relationship';
import { KeepValueInSync } from './keep-value-in-sync';
import { ReadonlyModifier } from './readonly';
import { Spaces } from './spaces';
import { StructuralTyping } from './structural-typing';
import { AvoidTypeAssertions } from './type-assertions';
import { TypeNarrowing } from './type-narrowing';
import { TypeToFunctionExpression } from './type-to-function-expression';
import { TypeVsInterface } from './type-vs-interface';
import { TypeWidening } from './type-widening';
import { TypesAsSetsOfValues } from './types-as-sets-of-values';
import { UseOfAliases } from './use-of-aliases';
import { UseYourEditor } from './use-your-editor';
export const EffectiveTypeScript = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <h1>Get to know TypeScript</h1>
        <JsAndTsRelationship />
        <ConfigurationOptions />
        <CodeGen />
        <StructuralTyping />
        <Any />
        <UseYourEditor />
        <h1>Type System</h1>
        <TypesAsSetsOfValues />
        <Spaces />
        <AvoidTypeAssertions />
        <AvoidWrapperTypes />
        <ExcessPropertyChecking />
        <TypeToFunctionExpression />
        <TypeVsInterface />
        <AvoidRepeating />
        <IndexSignature />
        <ReadonlyModifier />
        <KeepValueInSync />
        <h1>Type Inference</h1>
        <InferableTypes />
        <DifferentVariablesForDifferentTypes />
        <TypeWidening />
        <TypeNarrowing />
        <UseOfAliases />
    </article>
);
