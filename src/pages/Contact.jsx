import React from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const {t} = useTranslation("contact");

    return (
        <>
        <div className="content-wrappet-doubleTop">
        <div className="container-title">
        <h3>{t("title")}</h3>
        </div>
       <div className="container-contact">
        <div>
        <a href="mailto:giuseppe.caci97@libero.it">Invia un'email</a>
            <p>link</p>
            <p>link</p>
        </div>
        <div>
            <p>link</p>
            <p>link</p>
            <p>link</p>
        </div>
       </div>
        </div>
        </>
    )
}

export default Contact