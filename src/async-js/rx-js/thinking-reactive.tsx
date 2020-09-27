import Markdown from 'markdown-to-jsx';
import React from 'react';

const eventEmittersMd = require("./markdowns/thinking-reactive/event-emitters.md");

export const ThinkingReactive = () => (
    <Markdown>{eventEmittersMd}</Markdown>
);
