import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const overviewMd = require("./markdowns/gke-foundations/1-overview.md");
const resourceManagementMd = require("./markdowns/gke-foundations/2-resource-management.md");
const billingMd = require("./markdowns/gke-foundations/3-billing.md");
const containersMd = require("./markdowns/gke-foundations/4-intro-to-containers.md");
const containerImagesMd = require("./markdowns/gke-foundations/5-container-images.md");
const k8sMd = require("./markdowns/gke-foundations/6-intro-to-k8s.md");
const gkeMd = require("./markdowns/gke-foundations/7-intro-to-gke.md");
const computeOptionsMd = require("./markdowns/gke-foundations/8-compute-options.md");
const k8sComponentsMd = require("./markdowns/gke-foundations/9-k8s-concepts.md");
const k8sControlPlaneMd = require("./markdowns/gke-foundations/10-k8s-control-plane.md");

const mds = [
    require("./markdowns/gke-foundations/1-overview.md"),
    require("./markdowns/gke-foundations/2-resource-management.md"),
    require("./markdowns/gke-foundations/3-billing.md"),
    require("./markdowns/gke-foundations/4-intro-to-containers.md"),
    require("./markdowns/gke-foundations/5-container-images.md"),
    require("./markdowns/gke-foundations/6-intro-to-k8s.md"),
    require("./markdowns/gke-foundations/7-intro-to-gke.md"),
    require("./markdowns/gke-foundations/8-compute-options.md"),
    require("./markdowns/gke-foundations/9-k8s-concepts.md"),
    require("./markdowns/gke-foundations/10-k8s-control-plane.md"),
    require("./markdowns/gke-foundations/11-gke-concepts.md"),
    require("./markdowns/gke-foundations/12-k8s-object-management.md"),
    require("./markdowns/gke-foundations/13-advanced-objects-service.md"),
];

export const GkeFoundations = () => (
    <article>
        <ExpandableSection title="Architecting with GKE: Foundations">
            {mds.map(md => <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>)}
        </ExpandableSection>
    </article>
);
