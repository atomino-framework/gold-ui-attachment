import handleFetch from "gold/lib/handle-fetch";
export default class AttachmentApi {
    constructor(apibase) {
        this.apibase = apibase;
    }
    get(id) {
        return fetch(this.apibase + '/attachment/get/' + id, { method: "POST" }).then(handleFetch);
    }
    removeFile(id, collection, filename) {
        return fetch(this.apibase + '/attachment/remove-file/' + id, { method: "POST", body: JSON.stringify({ filename, collection }) }).then(handleFetch);
    }
    saveFileDetails(id, filename, data) {
        return fetch(this.apibase + '/attachment/save-file-details/' + id, { method: "POST", body: JSON.stringify({ filename, data }) }).then(handleFetch);
    }
    upload(id, collection, files) {
        let jobs = [];
        // @ts-ignore
        [...files].forEach((file) => {
            console.log(file);
            let data = new FormData();
            data.append('file', file);
            data.append('collection', collection);
            jobs.push(fetch(this.apibase + '/attachment/upload/' + id, { method: "POST", body: data }).then(handleFetch));
        });
        return Promise.all(jobs);
    }
    moveFile(id, filename, source, target, position, copy) {
        return fetch(this.apibase + '/attachment/move-file/' + id, { method: "POST", body: JSON.stringify({ filename, source, target, position, copy }) }).then(handleFetch);
    }
}
//# sourceMappingURL=attachment-api.js.map