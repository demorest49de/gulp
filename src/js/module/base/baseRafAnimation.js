export const rafAnimationMenu = (duration, direction, height, callback) => {
    let requestId = NaN;
    let startAnimation = NaN;
    let progressExternal = '';
    
    const rafPromise = new Promise(resolve => {
        requestId = window.requestAnimationFrame(function step(timestamp) {
            startAnimation ||= timestamp;
            let progress = (((timestamp - startAnimation) / duration) * 300).toFixed(2);
            if (direction > 0) {
                callback(progress);
                if (+progress <= height) {
                    requestId = requestAnimationFrame(step);
                } else {
                    cancelAnimationFrame(requestId);
                }
            } else {
                progress = (height - +(progress)).toFixed(2);
                callback(progress);
                if (+progress >= 0) {
                    requestId = requestAnimationFrame(step);
                } else {
                    progress = '0';
                    callback(progress);
                    cancelAnimationFrame(requestId);
                    progressExternal = progress;
                    console.log(' : ', progressExternal);
                    // ура! мой промис работает!
                    resolve(+progressExternal);
                }
            }
        });
    });
    
    return rafPromise;
};

export const rafAnimationIcon = (duration, direction, callback) => {
    let requestId = NaN;
    let startAnimation = NaN;
    
    requestId = window.requestAnimationFrame(function step(timestamp) {
        startAnimation ||= timestamp;
        let progress = ((timestamp - startAnimation) / duration).toFixed(2);
        callback(progress);
        if (+progress <= 1) {
            requestId = requestAnimationFrame(step);
        } else {
            callback("1");
            cancelAnimationFrame(requestId);
        }
    });
};
