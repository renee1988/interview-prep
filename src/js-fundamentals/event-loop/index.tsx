import Markdown from 'markdown-to-jsx';
import React from 'react';

const eventLoopMd = require("./markdowns/event-loop.md");

export const EventLoop = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{eventLoopMd}</Markdown>
        </div>
    </article>
);
