class BusinessError extends Error {
    constructor(msg, type) {
        super(msg);
        this.type = type;
    }
}

module.exports = { BusinessError };