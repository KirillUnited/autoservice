import * as React from "react";
import { textFields } from "./orderModal.data";
import { Box, Button, IconButton } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as style from "./order-modal.module.scss";
import CloseIcon from '@mui/icons-material/Close';

const OrderModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Form submit!");
    }

    return (
        <div>
            <Button variant="contained" size="large" className="btn-primary" onClick={handleClickOpen}>Запись на ремонт</Button>
            <Dialog open={open} onClose={handleClose} maxWidth={`md`}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box component="form" onSubmit={handleSubmit}>
                    <DialogContent>
                        <h2 className={`${style.title}`}>Запись на ремонт</h2>
                        {textFields.map((field) => {
                            return (
                                <TextField
                                    margin="normal"
                                    id={field.id}
                                    label={field.label}
                                    type={field.type}
                                    fullWidth
                                    variant="outlined"
                                    required={field.required}
                                    key={field.label}
                                />
                            )
                        })}
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked required />} label="Соглашаюсь на обработку персональных данных" />
                        </FormGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" className="btn-primary w-full" type="submit">Отправить</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    )
};

export default OrderModal;