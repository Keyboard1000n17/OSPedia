import * as colors from 'ansis';
/**
 * Color theme. Please use this instead of requiring ansis directly,
 * to ensure consistent colors.
 */
export declare const THEME: {
    header: colors.Ansis;
    subHeader: colors.Ansis;
    highlightWords: colors.Ansis;
    errorHeader: colors.Ansis;
    errorSubHeader: colors.Ansis;
    errorLine: colors.Ansis;
    errorHighlightWords: colors.Ansis;
    warningHeader: colors.Ansis;
    warningSubHeader: colors.Ansis;
    warningLine: colors.Ansis;
    warningHighlightWords: colors.Ansis;
    dimWords: colors.Ansis;
    none: (string: any) => any;
};
