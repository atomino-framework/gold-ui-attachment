import { Modal } from "gold/lib/modal-manager";
import { get } from "svelte/store";
import AttachmentModal from "../components/attachment-modal.svelte";
import options from "./options";
export default function attachmentButton(api, visibleCollections) {
    for (let i in visibleCollections)
        if (visibleCollections.hasOwnProperty(i)) {
            if (typeof visibleCollections[i] === 'string') {
                visibleCollections[i] = { label: visibleCollections[i] };
            }
            if (typeof visibleCollections[i].props === 'undefined') {
                visibleCollections[i].props = [];
            }
        }
    return {
        icon: options.attachment.button.icon,
        action: (form) => {
            (new Modal(AttachmentModal, { visibleCollections, api, id: get(form.$item).id })).open();
        },
        onlyIfExists: true
    };
}
//# sourceMappingURL=form-button.js.map