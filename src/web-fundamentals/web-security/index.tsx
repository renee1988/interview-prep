import Markdown from 'markdown-to-jsx';
import React from 'react';

const md = require("./markdowns/web-security.md");

export const WebSecurity = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <Markdown>{md}</Markdown>
    </article>
);
