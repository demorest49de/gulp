export const rafAnimation = (duration, direction, callback) => {
    let requestId = NaN;
    let startAnimation = NaN;
    
    requestId = window.requestAnimationFrame(function step(timestamp) {
        startAnimation ||= timestamp;
        let progress = ((timestamp - startAnimation) / duration).toFixed(2);
        if (direction > 0) {
            callback(progress);
            if (progress < 1) {
                requestId = requestAnimationFrame(step);
            } else {
                cancelAnimationFrame(requestId);
            }
        } else {
            progress = (1 - progress).toFixed(2);
            callback(progress);
            if (progress > 0) {
                requestId = requestAnimationFrame(step);
            } else {
                cancelAnimationFrame(requestId);
            }
        }
    });
};
