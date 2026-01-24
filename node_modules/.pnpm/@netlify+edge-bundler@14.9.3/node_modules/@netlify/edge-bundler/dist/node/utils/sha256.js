import crypto from 'node:crypto';
import { createReadStream } from 'node:fs';
export const getFileHash = (path) => {
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    return new Promise((resolve, reject) => {
        const file = createReadStream(path);
        file.on('end', () => {
            hash.end();
            resolve(hash.read());
        });
        file.on('error', reject);
        file.pipe(hash);
    });
};
export const getStringHash = (input) => {
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    hash.update(input);
    return hash.digest('hex');
};
