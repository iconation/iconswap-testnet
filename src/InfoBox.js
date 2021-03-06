import React, { useState } from 'react'
import './InfoBox.css';
import notice from './static/img/notice.png'
import success from './static/img/success.png'
import error from './static/img/error.png'

const InfoBox = ({ content, type, setErrorUi }) => {

    const [closed, setClosed] = useState(false)

    if (!type) {
        type = "notice"
    }

    let imgobj = null;
    switch (type) {
        case "notice": imgobj = notice; break;
        case "success": imgobj = success; break;
        case "error": imgobj = error; break;
        default: break;
    }

    const onClose = () => {
        if (setErrorUi) {
            setErrorUi(null)
        } else {
            setClosed(true)
        }
    }

    return (!closed &&
        <div className={"alert-box " + type}><img alt={type} className="alert-box-img" src={imgobj} /><span>{type}:&nbsp;</span>
            <div className="alert-box-content" dangerouslySetInnerHTML={{ __html: content }} />
            <div className="alert-box-close" onClick={() => { onClose() }}>&times;</div>
        </div>
    )
}

export default InfoBox