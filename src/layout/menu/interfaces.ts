export interface MenuConfig {
    displayName: string,
    route: string,
    subMenu?: Array<MenuConfig>,
}
