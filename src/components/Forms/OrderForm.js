import React from 'react'
import { Alert, Box, Button, Slide, Snackbar } from '@mui/material'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { textFields } from "./orderForm.data";
import Loading from '../Loading';
import useForm from "../../hooks/useForm"

const getInitValues = () => {
    const result = {};

    for (const { name, value } of Object.values(textFields)) {
        result[name] = value;
    }

    return result;
}

export default function OrderForm({ onSuccess }) {
    const {
        values,
        errors,
        handleInputChange,
        handleSubmit,
        formIsValid
    } = useForm(getInitValues());
    const [showAlert, setShowAlert] = React.useState(true);
    const handleAlertHide = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
    };
    const handleFormSubmit = async (e) => {
        await handleSubmit(e);
        setTimeout(() => {
            onSuccess();
        }, 2000);
    };

    return (
        <>
            {values.isSubmitting && <Loading />}
            {values.formSubmitted && <Snackbar
                open={showAlert}
                autoHideDuration={2000}
                onClose={handleAlertHide}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                TransitionComponent={Slide}
            >
                <Alert onClose={handleAlertHide} severity="success" sx={{ width: '100%' }}>
                    Data are sent
                </Alert>
            </Snackbar>}
            <Box component="form" onSubmit={handleFormSubmit}>
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
                <Button variant="contained" size="large" className={"btn-primary w-full mt-3"} type="submit" disabled={!formIsValid()}>Отправить</Button>
            </Box>
        </>
    )
}