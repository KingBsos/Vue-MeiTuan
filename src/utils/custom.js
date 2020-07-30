function debounce(callback, mills) {
    let timestamp = -1;
    let timer = null;
    let promise = null;
    return function(...args) {
        let time = new Date().getTime();
        if(timestamp === -1 || time - timestamp < mills) {
            timestamp = time;
            clearTimeout(timer);
            promise = null;
            promise = new Promise((resolve) => {
                timer = setTimeout(() => {timestamp = -1;resolve(callback.apply(this, args))}, mills);
            });
        }
        return promise;
    }
}

export {debounce};