import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const overviewMd = require("./markdowns/gke-foundations/1-overview.md");
const resourceManagementMd = require("./markdowns/gke-foundations/2-resource-management.md");
const billingMd = require("./markdowns/gke-foundations/3-billing.md");
const containersMd = require("./markdowns/gke-foundations/4-intro-to-containers.md");

export const GkeFoundations = () => (
    <article>
        <ExpandableSection title="Architecting with GKE: Foundations">
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{overviewMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{resourceManagementMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{billingMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{containersMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
