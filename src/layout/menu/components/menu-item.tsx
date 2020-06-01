import React, {memo, MouseEvent} from 'react';
import {MenuConfig} from '../interfaces';
import {SubMenu} from './sub-menu';

interface IMenuItem {
    menuConfig: MenuConfig,
    onClick(e: MouseEvent): void,
    showSubMenu?: boolean,
}

export const MenuItem = memo<IMenuItem>(({menuConfig, onClick, showSubMenu}: IMenuItem) => (
    <div key={menuConfig.route} className={`menu-item-container ${showSubMenu ? 'expanded' : ''}`}>
        <div
            key="display-name"
            className="menu-item-display-name"
            data-testid={menuConfig.displayName}
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
                    <SubMenu menuConfigs={menuConfig.subMenu} />
        }
    </div>
));
