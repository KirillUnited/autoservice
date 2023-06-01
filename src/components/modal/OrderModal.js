import * as React from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const OrderModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="contained" size="large" className="btn-primary" onClick={handleClickOpen}>Запись на ремонт</Button>
            <Dialog open={open} onClose={handleClose} maxWidth={`md`}>
                <DialogTitle>Запись на ремонт</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="form_fields[name]"
                        label="Модель автомобиля"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        id="form_fields[name]"
                        label="VIN"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="form_fields[name]"
                        label="Неисправности в автомобиле"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        id="form_fields[name]"
                        label="Имя"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TextField
                        margin="dense"
                        id="form_fields[name]"
                        label="Телефон"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Соглашаюсь на обработку персональных данных" />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" className="btn-primary w-full">Отправить</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default OrderModal;