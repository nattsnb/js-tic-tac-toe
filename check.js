export function checking(object) {
    if (object[1] === object[2] && object[2] === object[3] && object[1] !== 0) {
        return object[1];
    }
    if (object[1] === object[5] && object[5] === object[9] && object[1] !== 0) {
        return object[1];
    }
    if (object[1] === object[4] && object[4] === object[7] && object[1] !== 0) {
        return object[1];
    }
    if (object[5] === object[2] && object[2] === object[8] && object[5] !== 0) {
        return object[5];
    }
    if (object[6] === object[9] && object[9] === object[3] && object[3] !== 0) {
        return object[6];
    }
    if (object[4] === object[5] && object[5] === object[6] && object[5] !== 0) {
        return object[4];
    }
    if (object[3] === object[7] && object[7] === object[5] && object[3] !== 0) {
        return object[3];
    }
    if (object[7] === object[8] && object[8] === object[9] && object[8] !== 0) {
        return object[7];
    }
    if (object[1] !== 0 && object[2] !== 0 && object[3] !== 0 && object[4] !== 0 && object[5] !== 0 && object[6] !== 0 && object[7] !== 0 && object[8] !== 0 && object[9] !== 0) {
        return 3;
    }
}

