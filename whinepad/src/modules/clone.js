function clone(o) {
    return JSON.parse(JSON.stringify(o));
}

export default clone;