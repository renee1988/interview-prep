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

export const MENUS: Array<MenuConfig> = [
    {
        displayName: 'Algorithms',
        route: 'algorithms',
        subMenu: algorithmsMenu,
    },
    {
        displayName: 'Data structures',
        route: 'data-structures',
    },
    {
        displayName: 'Asynchronous JavaScript',
        route: 'async-js',
    },
    {
        displayName: 'CSS',
        route: 'css',
    },
    {
        displayName: 'Web Fundamentals',
        route: 'web-fundamentals',
    },
];
