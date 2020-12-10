import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const buildingBlocksMd = require("./markdowns/basics/1-building-blocks.md");
const observablesMd = require("./markdowns/basics/2-observables.md");

export const Basics = () => (
    <article>
        <ExpandableSection title="RxJs Basics">
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{buildingBlocksMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{observablesMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
