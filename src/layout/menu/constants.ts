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
]

const typescriptMenu: Array<MenuConfig> = [
    {
        displayName: 'Overview',
        route: 'overview',
    },
    {
        displayName: 'Latest TypeScript Features',
        route: 'latest-typescript-features',
    },
    {
        displayName: 'App vs. Library Concerns',
        route: 'app-vs-library-concerns',
    },
    {
        displayName: 'Create Project from Scratch',
        route: 'create-project-from-scratch',
    },
    {
        displayName: 'Declaration files',
        route: 'declaration-files',
    },
]

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
        route: 'interview-prep/async-js',
        subMenu: asyncJsMenu,
    },
    {
        displayName: 'Web Basics',
        route: 'interview-prep/web-fundamentals',
        subMenu: webPerfMenu,
    },
    {
        displayName: 'Effective Java',
        route: 'interview-prep/effective-java',
        subMenu: effectiveJavaMenu,
    },
    {
        displayName: 'TypeScript',
        route: 'interview-prep/typescript',
        subMenu: typescriptMenu,
    },
];
