async function getThread() {
	let l = window.location.href;
	l = l.split("#")[0];
	const link = `${l}.json`;

	return await fetch(link).then(async (res) => {
		const t = await res.json();
		return t;
	});
};

getThread().then((t) => {
	const resp = [];

	t.posts.forEach((r) => {
		resp.push(`>>${r.no}`);
	});

	const quotes = resp.join(' ');
	const qrForm = document.querySelector("#qrForm");
	const textArea = qrForm?.querySelector('textarea');
	if (textArea) {
		textArea.value = quotes;
	}
	else {
		alert("You need an open quick reply form.");
	}
});