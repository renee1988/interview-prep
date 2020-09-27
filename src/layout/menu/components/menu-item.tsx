import React, {memo, MouseEvent} from 'react';
import {MenuConfig} from '../interfaces';
import {Menu} from '../containers/menu';

interface IMenuItem {
    menuConfig: MenuConfig,
    onClick(e: MouseEvent): void,
    parent?: MenuConfig,
    showSubMenu?: boolean,
}

export const MenuItem = memo<IMenuItem>(({menuConfig, onClick, parent, showSubMenu}: IMenuItem) => (
    <div
        key={menuConfig.route}
        className={`${parent ? 'sub-menu-item' : 'menu-item-container'} ${showSubMenu ? 'expanded' : ''}`}>
        <div
            key="display-name"
            className="menu-item-display-name"
            data-menuname={menuConfig.displayName}
            data-route={menuConfig.route}
            onClick={onClick}
        >
            <div key="text">{menuConfig.displayName}</div>
            {showSubMenu && (
                <div key="arrow" className="selected-arrow">
                    ↠
                </div>
            )}
        </div>
        {
            showSubMenu &&
                menuConfig.subMenu && 
                    <Menu menus={menuConfig.subMenu} parent={menuConfig} />
        }
    </div>
));
