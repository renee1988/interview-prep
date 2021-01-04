import Markdown from 'markdown-to-jsx';
import React from 'react';

const mds = [
    require("./markdowns/2-meaningful-names.md"),
];

export const CleanCode = () => (
    <article>
        {mds.map(md => (<div style={{padding: '1rem 2rem'}}>
            <Markdown>{md}</Markdown>
        </div>))}
    </article>
);
