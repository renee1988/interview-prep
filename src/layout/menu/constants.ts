// Menu constants
import {MenuConfig} from './interfaces';

const algorithmsMenu: Array<MenuConfig> = [
    {
        displayName: 'Graph',
        route: 'graph',
    },
    {
        displayName: 'Sorting',
        route: 'sorting',
    },
    {
        displayName: 'Binary Search',
        route: 'binary-search',
    },
];

const dataStructuresMenu: Array<MenuConfig> = [
    {
        displayName: 'Priority Queue',
        route: 'priority-queue',
    },
    {
        displayName: 'Linked List',
        route: 'linked-list',
    },
    {
        displayName: 'Hash Table',
        route: 'hash-table',
    },
    {
        displayName: 'Map',
        route: 'map',
    },
];

const asyncJsMenu: Array<MenuConfig> = [
    {
        displayName: 'Basics',
        route: 'basics',
    },
    {
        displayName: 'Rx JS',
        route: 'rx-js',
    },
];

const webPerfMenu: Array<MenuConfig> = [
    {
        displayName: 'Event loop',
        route: 'event-loop',
    },
];

const effectiveJavaMenu: Array<MenuConfig> = [
    {
        displayName: 'Exceptions',
        route: 'exceptions',
    },
    {
        displayName: 'Object Creation & Destruction',
        route: 'objects',
    },
    {
        displayName: 'Classes and Interfaces',
        route: 'classes-and-interfaces'
    },
    {
        displayName: 'Generics',
        route: 'generics'
    }
];

const typescriptMenu: Array<MenuConfig> = [
    {
        displayName: 'Production Ready TypeScript',
        route: 'production-ready',
    },
];

const jsFundamentalsMenu: Array<MenuConfig> = [
    {
        displayName: 'Event loop',
        route: 'event-loop',
    },
];

const infrastructureMenu: Array<MenuConfig> = [
    {
        displayName: 'Google Cloud Platform',
        route: 'gcp',
    },
];

export const MENUS: Array<MenuConfig> = [
    {
        displayName: 'Algorithms',
        route: 'interview-prep/algorithms',
        subMenu: algorithmsMenu,
    },
    {
        displayName: 'Data structures',
        route: 'interview-prep/data-structures',
        subMenu: dataStructuresMenu,
    },
    {
        displayName: 'Async JS',
        route: 'interview-prep/async-js',
        subMenu: asyncJsMenu,
    },
    {
        displayName: 'JS Fundamentals',
        route: 'interview-prep/js-fundamentals',
        subMenu: jsFundamentalsMenu,
    },
    {
        displayName: 'Web Basics',
        route: 'interview-prep/web-fundamentals',
        subMenu: webPerfMenu,
    },
    {
        displayName: 'Java Best Practices',
        route: 'interview-prep/java-best-practices',
        subMenu: effectiveJavaMenu,
    },
    {
        displayName: 'TypeScript',
        route: 'interview-prep/typescript',
        subMenu: typescriptMenu,
    },
    {
        displayName: 'Infrastructure',
        route: 'interview-prep/infrastructure',
        subMenu: infrastructureMenu,
    },
];
