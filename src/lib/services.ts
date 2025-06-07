export const postCustomLogoData = async (url: string, body: FormData) => {
	const response = await fetch(url, {
		method: "POST",
		body,
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const blob = await response.blob();
	const imageUrl = URL.createObjectURL(blob);
	return imageUrl;
};

export const postUrlData = async (
	url: string,
	body: { type: string; url: string },
) => {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const blob = await response.blob();
	const imageUrl = URL.createObjectURL(blob);
	return imageUrl;
};
