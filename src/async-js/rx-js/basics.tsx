import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const buildingBlocksMd = require("./markdowns/basics/1-building-blocks.md");
const observablesMd = require("./markdowns/basics/2-observables.md");
const mouseDragsExampleMd = require("./markdowns/basics/3-mouse-drags-example.md");
const moreOperatorsMd = require("./markdowns/basics/4-more-operators.md");

export const Basics = () => (
    <article>
        <ExpandableSection title="RxJs Basics">
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{buildingBlocksMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{observablesMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{mouseDragsExampleMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{moreOperatorsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
