const ipStore = new Map();

export function isRateLimited(ip, limit = 3, windowMs = 5 * 60 * 1000) {
    const now = Date.now();

    if(!ipStore.has(ip)) {
        ipStore.set(ip, []);
    };

    const timestamps = ipStore
        .get(ip)
        .filter(ts => now - ts < windowMs);

    if (timestamps.length >= limit) {
        return true;
    }

    timestamps.push(now);
    ipStore.set(ip, timestamps);

    return false;           
}


export function rateLimitMiddleware(req, res, next) {
    const ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress;

    if (isRateLimited(ip)) {
        return res.status(429).json({
            success: false,
            message: "Too many requests"
        });
    }

    req.ipAddress = ip;
    next();
}