import React, { useEffect, useState } from 'react'
import aboutApi from "../../commons/apis/aboutApi";
import TieuChi from './TieuChi';


export default function AboutTop() {
    const [about, setAbout] = useState({});
    const fetchAbout = async () => {
        const about = await aboutApi.getAbout();
        setAbout(about);
    }
    useEffect(() => {
        fetchAbout();
    }, []);
    return (
        <>
            <div className="box-about">
                <div className="wrap-about container">
                    <div className="wrap-about__left">
                        <h3>{about?.ten2}<span>{about?.ten}</span></h3>
                        <h4><span>{about?.ten}</span> {about?.slogan}</h4>
                        <div className="__desc">{about?.mota}</div>
                    </div>
                    <div className="wrap-about__right">
                        <div className="img_hv">
                            <img src={`/images/${about?.img}`} alt={about?.ten} title={about?.ten}/>
                        </div>
                    </div>
                </div>
                <TieuChi/>
            </div>
        </>
    )
}
