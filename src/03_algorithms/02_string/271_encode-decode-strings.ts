interface IEncodeDecodeStrings {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string;

    /**
     * Decodes a single string to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[];
}

const SEPARATOR = ':';

export class EncodeDecodeStrings implements IEncodeDecodeStrings {
    encode(strs: string[]): string {
        let encoded = '';
        for (let str of strs) {
            encoded += str.length + SEPARATOR + str;
        }
        return encoded;
    }
    decode(str: string): string[] {
        let result: string[] = [];
        let i = 0;
        while (i < str.length) {
            // 1. Find the position of the separator SEPARATOR
            // 2. Get the length of the next string
            // 3. Extract the string of the given length
            // 4. Move the index to the end of the current extracted string

            let colonIndex = str.indexOf(SEPARATOR, i); /* 1 */
            let length = parseInt(str.substring(i, colonIndex)); /* 2 */
            let nextStr = str.substring(colonIndex + 1, colonIndex + 1 + length); /* 3 */
            result.push(nextStr);
            i = colonIndex + 1 + length; /* 4 */
        }
        return result;
    }
}

