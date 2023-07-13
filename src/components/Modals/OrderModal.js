import * as React from "react";
import { textFields } from "./orderModal.data";
import { Alert, Box, Button, IconButton, Slide, Snackbar } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as style from "./OrderModal.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Loading from "../Loading";
import useForm from "../../hooks/useForm";

const getInitValues = () => {
    const result = {};

    for (const { name, value } of Object.values(textFields)) {
        result[name] = value;
    }

    return result;
}

const OrderModal = (props) => {
    // OrderForm Hook
    const {
        values,
        errors,
        handleInputChange,
        handleSubmit,
        formIsValid
    } = useForm(getInitValues());
    // Modal
    const [showAlert, setShowAlert] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    }
    const handleAlertHide = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
    };

    return (
        <>
            {values.isSubmitting && <Loading />}
            {values.formSubmitted && <Snackbar
                open={showAlert}
                autoHideDuration={6000}
                onClose={handleAlertHide}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                TransitionComponent={Slide}
            >
                <Alert onClose={handleAlertHide} severity="success" sx={{ width: '100%' }}>
                    Data are sent
                </Alert>
            </Snackbar>}
            <Button variant="contained" size="large" className="btn-primary" onClick={handleClickOpen}>Запись на ремонт</Button>
            <Dialog open={open} onClose={handleClose} maxWidth={`md`} fullScreen={fullScreen}>
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
                {/* OrderForm */}
                <Box component="form" onSubmit={handleSubmit}>
                    <DialogContent>
                        <h2 className={`${style.title}`}>Запись на ремонт</h2>
                        {textFields.map((field) => {
                            return (
                                <TextField
                                    margin="normal"
                                    id={field.id}
                                    name={field.name}
                                    label={field.label}
                                    type={field.type}
                                    fullWidth
                                    variant="outlined"
                                    required={field.required}
                                    autoComplete="none"
                                    key={field.label}
                                    defaultValue={field.value}
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    {...(errors[field.name] && { error: true, helperText: errors[field.name] })}
                                />
                            )
                        })}
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="privacy_policy" onChange={handleInputChange} defaultChecked required />} label="Соглашаюсь на обработку персональных данных" />
                        </FormGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" size="large" className={"btn-primary w-full"} type="submit" disabled={!formIsValid()}>Отправить</Button>
                    </DialogActions>
                </Box>
                {/* OrderForm End */}
            </Dialog>
        </>
    )
};

export default OrderModal;