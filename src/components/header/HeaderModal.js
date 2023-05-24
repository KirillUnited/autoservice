import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from "../button/Button";
import "../modal/modal.scss";

const HeaderModal = () => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <Button label="Запись на ремонт" />
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">Запись на ремонт</Dialog.Title>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="name">
                        Name
                    </label>
                    <input className="Input" id="name" defaultValue="Pedro Duarte" />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="username">
                        Username
                    </label>
                    <input className="Input" id="username" defaultValue="@peduarte" />
                </fieldset>
                <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                        Отправить
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default HeaderModal;