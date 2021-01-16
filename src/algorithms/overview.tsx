import Markdown from 'markdown-to-jsx';
import React from 'react';

const md = require("./markdowns/intro.md");

export const AlgorithmOverview = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{md}</Markdown>
        </div>
    </article>
);
