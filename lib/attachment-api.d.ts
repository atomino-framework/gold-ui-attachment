import type { IAttachmentApi } from "./interfaces";
export default class AttachmentApi implements IAttachmentApi {
    protected apibase: string;
    constructor(apibase: string);
    get(id: number): Promise<Array<any>>;
    removeFile(id: number, collection: string, filename: string): Promise<any>;
    saveFileDetails(id: number, filename: string, data: any): Promise<any>;
    upload(id: number, collection: string, files: FileList): Promise<any>;
    moveFile(id: number, filename: string, source: string, target: string, position: number, copy: boolean): Promise<any>;
}
//# sourceMappingURL=attachment-api.d.ts.map