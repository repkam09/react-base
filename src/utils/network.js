const get = async (url) => {
    const rawRes = await fetch(url);
    const content = await rawRes.json();
    return content;
};

const post = async (url, body, headers) => {
    const settings = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    };

    const rawRes = await fetch(url, settings);
    const content = await rawRes.json();
    return content;
}

export { get, post };