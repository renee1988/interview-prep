import React from 'react';
import {MarkdownRenderer} from '../components/markdown-renderer';
import markdownPath from '../async-js/rx-js/event-emitters.md';

export const AlgorithmOverview = () => (
    <>
        <h1>Algorithm Overview</h1>
        <MarkdownRenderer sourceFilePath={markdownPath} />
    </>
);
