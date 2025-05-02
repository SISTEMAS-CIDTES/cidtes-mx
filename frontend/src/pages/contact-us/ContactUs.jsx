import React, {
    useState
} from "react";
import { 
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Backdrop,
    CircularProgress
} from "@mui/material";
import {
    sendEmail
} from "../../services/email";
import Image from "../../assets/images/contact-us/2.png";
import "./ContactUs.css";

const ContactUs = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openBackdrop, setOpenBackdrop] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleEmail = async (e) => {
        e.preventDefault();
        setOpenBackdrop(true);
        setOpenDialog(false);
        const formData = {
            fullname: fullName,
            email: email,
            phone_number: phone,
            subject: subject,
            message: message,
        };

        try {
            await sendEmail(formData);
        } catch (error) {
            console.error(error);
        }
        setOpenBackdrop(false);
    };

    const handle = (e) => {
        e.preventDefault();
        setOpenDialog(true);
    };


    return(
        <section className="contact-us-container">
            <div>
                <img src={Image} alt="Contact Us" />
            </div>
            <section>
                <div>
                    <h1>¡Queremos saber de ti!</h1>
                    <p>Tu mensaje puede ser el inicio de algo increíble. ¡Adelante!</p>
                </div>
                <form>
                    <TextField
                        label="Nombre Completo"
                        helperText="Ingrese su nombre completo."
                        variant="outlined"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <div className="separator">
                        <TextField
                            label="Correo Electrónico"
                            helperText="Ingrese su correo electrónico."
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Teléfono"
                            helperText="Ingrese su número de teléfono."
                            variant="outlined"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <TextField
                        label="Asunto"
                        helperText="Ingrese el asunto de su mensaje."
                        variant="outlined"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <TextField
                        label="Mensaje"
                        helperText="Ingrese su mensaje."
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        multiline
                        rows={4}
                    />
                    <button onClick={handle}>
                        Contactanos
                    </button>
                </form>
            </section>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 10000 })}
                open={openBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"¿Todo listo para enviarlo?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Revisa que esté todo bien. Queremos darte la mejor respuesta posible.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
                <Button onClick={handleEmail} autoFocus>
                    Enviar
                </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default ContactUs;