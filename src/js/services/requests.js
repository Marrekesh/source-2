const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data

        // headers: {
        //     "Content-type": "application/json"
        // },

    });

    return await res.text();
}

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw Error (`This is ${status.ok}`)
    }

    return await res.text();
}

export {postData, getResource};