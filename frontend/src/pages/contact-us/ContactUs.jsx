import React, {
    useState
} from "react";
import {
    sendEmail
} from "../../services/email";
import "./ContactUs.css";

const ContactUs = () => {
    const [fullName, setFullName] = useState("Cristian Ricardo Gallegos Diego");
    const [email, setEmail] = useState("prueba@gmail.com");
    const [phone, setPhone] = useState("5566778899");
    const [subject, setSubject] = useState("Este es un mensaje de prueba");
    const [message, setMessage] = useState("ESte es un mensaje de prueba");

    const handleEmail = async (e) => {
        e.preventDefault();
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
    };

    return(
        <section>
            <form
            >
                <button onClick={handleEmail}>
                    Contactanos
                </button>
            </form>
        </section>
    );
};

export default ContactUs;