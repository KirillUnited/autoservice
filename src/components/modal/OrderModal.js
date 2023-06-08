import * as React from "react";
import { textFields } from "./orderModal.data";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

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
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <h2 className="text-3xl">Запись на ремонт</h2>
                        {textFields.map((field) => {
                            return (
                                <TextField
                                    margin="dense"
                                    id={field.id}
                                    label={field.label}
                                    type={field.type}
                                    fullWidth
                                    variant="standard"
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
                </form>
            </Dialog>
        </div>
    )
};

export default OrderModal;