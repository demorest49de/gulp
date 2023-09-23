export const rafAnimation = (duration, direction, height, callback) => {
    let requestId = NaN;
    let startAnimation = NaN;
    
    requestId = window.requestAnimationFrame(function step(timestamp) {
        startAnimation ||= timestamp;
        let progress = (((timestamp - startAnimation) / duration)*300).toFixed(2);
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
                callback("0");
                cancelAnimationFrame(requestId);
            }
        }
    });
};
