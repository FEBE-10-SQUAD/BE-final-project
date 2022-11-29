exports.Payload = (status, message, data) => {
	return {
		status,
		message,
		data,
		date: new Date(),
	};
};
