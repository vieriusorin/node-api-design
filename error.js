setTimeout(() => {
	throw new Error("timeout");
}, 3000);

process.on("uncaughtException", (err, promise) => {
	console.log(err);
});

process.on("unhandledRejection", (reason, promise) => {
	console.log(reason);
});
