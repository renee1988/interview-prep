import Markdown from 'markdown-to-jsx';
import React from 'react';

const md = require("./markdowns/http2.md");

export const HTTP2 = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <Markdown>{md}</Markdown>
    </article>
);
