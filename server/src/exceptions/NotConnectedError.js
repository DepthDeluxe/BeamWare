function NotConnected() {
    this.name = "NotConnected";
    this.level = "Show Stopper";
    this.message = "ZeroRPC client not connected to the server!";
    this.toString = function(){return this.name + ": " + this.message;};
}

NotConnected.prototype = new Error();

module.exports = NotConnected;
