const sizes = {
    mobile: '767px',
    tabletMin: '768px',
    tabletMax: '1023px',
    desktop: '1024px',
};


export const devices = {
    mobile: `(max-width: ${sizes.mobile})`,
    tabletMin: `(min-width: ${sizes.tabletMin})`,
    tabletMax: `(max-width: ${sizes.tabletMax})`,
    desktop: `(min-width: ${sizes.desktop})`,
};