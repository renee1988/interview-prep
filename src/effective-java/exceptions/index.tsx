import React from 'react';
import { CheckedExceptions } from './checked-exceptions';
import { DocumentExceptions } from './document-exceptions';
import { ReuseStandardExceptions } from './reuse-standard-exceptions';
import { ThrowExceptions } from './throw-exceptions';
import { UnnecessaryCheckedExceptions } from './unnecessary-checked-exceptions';
import {WhenToUseExceptions} from './when-to-use-exceptions';

export const Exceptions = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <WhenToUseExceptions />
        <CheckedExceptions />
        <UnnecessaryCheckedExceptions />
        <ReuseStandardExceptions />
        <ThrowExceptions />
        <DocumentExceptions />
    </article>
);
