import Markdown from 'markdown-to-jsx';
import React from 'react';

const overviewMd = require("./markdowns/overview.md");

export const Overview = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{overviewMd}</Markdown>
        </div>
    </article>
);
