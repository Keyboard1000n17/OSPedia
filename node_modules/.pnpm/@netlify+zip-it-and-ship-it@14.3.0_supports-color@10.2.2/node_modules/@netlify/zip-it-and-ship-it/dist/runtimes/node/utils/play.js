import { basename, extname } from 'path';
const NETLIFY_PLAY_SUFFIX = '-netlify-play';
export const NETLIFY_PLAY_BOOTSTRAP_VERSION = 'play0.0';
export const useNetlifyPlay = (featureFlags, mainFile) => {
    if (!featureFlags.zisi_netlify_play) {
        return false;
    }
    const ext = extname(mainFile);
    const filename = basename(mainFile, ext);
    return filename.endsWith(NETLIFY_PLAY_SUFFIX);
};
