import * as React from "react";
import { textFields } from "./orderModal.data";
import { Alert, Box, Button, CircularProgress, IconButton, Slide, Snackbar } from "@mui/material";
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
import { styled, useTheme } from '@mui/material/styles';

const initValues = () => {
    const result = {};

    for (const { name, value } of Object.values(textFields)) {
        result[name] = value;
    }

    return result;
}

const OrderModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    }
    const handleAlertShow = () => {
        setShowAlert(true)
    };
    const handleAlertHide = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false)
    };
    const [values, setValues] = React.useState({
        ...initValues()
    });
    const [errors, setErrors] = React.useState({});
    const validate = (fieldValues = values) => {
        let result = { ...errors };
        for (const [key, value] of Object.entries(fieldValues)) {
            value === "" ? result[key] = "Заполните это поле" : result[key] = "";
        }
        setErrors({ ...result })
    };
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setValues({
            ...values,
            [name]: value
        });
        if (target.required) validate({ [name]: value });
    }
    const formIsValid = (fieldValues = values) => {
        const fields = {};

        for (const { name, required } of Object.values(textFields)) {
            if (required) fields[name] = fieldValues[name];
        }

        return Object.values(fields).every((x) => x !== "") &&
            Object.values(errors).every((x) => x === "");
    };
    const DisabledBackground = styled(Box)({
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        background: "#ccc",
        opacity: 0.5,
        zIndex: 10000
    });
    const Loading = () => (
        <>
            <CircularProgress
                size={64}
                sx={{
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 20000
                }}
            />
            <DisabledBackground />
        </>
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = { ...values };

        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                resolve(`Model: ${formData.model}\nName: ${formData.name}\n`);
            }, 2000);
        }).then((result) => {
            setValues(initValues);
            event.target.reset();
            handleAlertShow();
            console.log(formData);
        }).catch(error => console.log(error));
    }

    return (
        <>
            {loading && <Loading />}
            <Snackbar
                open={showAlert}
                autoHideDuration={6000}
                onClose={handleAlertHide}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                TransitionComponent={Slide}
            >
                <Alert onClose={handleAlertHide} severity="success" sx={{ width: '100%' }}>
                    Data are sent
                </Alert>
            </Snackbar>
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
            </Dialog>
        </>
    )
};

export default OrderModal;