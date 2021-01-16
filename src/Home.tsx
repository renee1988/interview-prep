import Markdown from 'markdown-to-jsx';
import React from 'react';

const md = require("./home.md");

export const Home = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{md}</Markdown>
        </div>
    </article>
);
