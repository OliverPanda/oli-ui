// 用法: tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export const tuple = <T extends string[]>(...args: T) => args;