String.prototype.isEmpty = function () {
    return this.length === 0 || !this.trim();
};

String.prototype.isNotEmpty = function () {
    return !this.isEmpty();
};
