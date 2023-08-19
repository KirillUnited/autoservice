import * as React from "react";
import { Button, DialogTitle, IconButton } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import OrderForm from "../Forms/OrderForm";
import * as style from "./OrderModal.module.scss";

const OrderModal = (props) => {
    const [open, toggleOpen] = React.useReducer((state) => !state, false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Button variant="contained" size="large" className="btn-primary" onClick={toggleOpen}>Запись на ремонт</Button>
            <Dialog open={open} onClose={toggleOpen} maxWidth={`md`} fullScreen={fullScreen}>
                <IconButton
                    aria-label="close"
                    onClick={toggleOpen}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogTitle className={`${style.title}`}>
                    Запись на ремонт
                </DialogTitle>
                <DialogContent>
                    <OrderForm onSuccess={toggleOpen} />
                </DialogContent>
            </Dialog>
        </>
    )
};

export default OrderModal;