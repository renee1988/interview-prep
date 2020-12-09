import Markdown from 'markdown-to-jsx';
import React from 'react';

const basicsMd = require("./markdowns/basics.md");

export const Basics = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{basicsMd}</Markdown>
        </div>
    </article>
);
