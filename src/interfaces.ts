import type FaIcon from "gold/lib/fa-icon";


export interface IOptions {
	attachment: {
		button: { icon: FaIcon }
		modal: {
			upload: { icon: FaIcon }
		}
	}
	collection: {
		upload: { icon: FaIcon }
		full: { icon: FaIcon }
	}
	details: {
		add: { icon: FaIcon }
		remove: { icon: FaIcon }
		image: { icon: FaIcon }
		save: { icon: FaIcon }
		delete: { icon: FaIcon }
	}
	filetype: { family: string }
}

export interface IAttachmentApi {
	removeFile(id: number, filename: string, collection: string): Promise<any>

	saveFileDetails(id: number, filename: string, data: any): Promise<any>

	get(id: number): Promise<Array<any>>

	upload(id: number, collection: string, files: FileList): Promise<any>

	moveFile(id: number, filename: string, source: string, target: string, position: number, copy: boolean): Promise<any>
}
