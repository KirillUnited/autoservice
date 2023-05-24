import React from 'react';
import { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from "../button/Button";
import "./modal.scss";

const Modal = (props) => {
    const ref = useRef();

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button label="Запись на ремонт" ref={ref} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Запись на ремонт</Dialog.Title>
                    <form id="orderFrom" name="orderFrom" action='/'>
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
                    </form>
                    <Dialog.Close asChild>
                        <Button type="submit" form="orderFrom" label="Отправить" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default Modal;