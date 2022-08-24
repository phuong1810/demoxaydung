import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import infoCompanyApi from "../apis/infoCompanyApi";

export default function Header() {

    const [info, setInfo] = useState({});

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const params = {
            _limit: 10,
        };
        const infoCompany = await infoCompanyApi.getAll(params);
        setInfo(infoCompany);
    };

    return (
        <div className="header">
            <div className="menu-top">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="menu">
                        <ul>
                            <li><a className="transition " href="/" title="Home">Home</a></li>
                            <li><a className="transition " href="gioi-thieu" title="Giới thiệu">Giới thiệu</a></li>
                            <li>
                                <a className="transition " href="dich-vu" title="Dịch vụ">Dịch vụ</a>
                            </li>
                            <li><a className="transition " href="tin-tuc" title="Tin tức">Tin tức</a></li>
                            <li><a className="transition " href="lien-he" title="Liên hệ">Liên hệ</a></li>
                        </ul>
                    </div>
                    <a className="logo-header" href="/">
                        <img src={logo} alt={info?.tencty2} />
                    </a>
                    <ul className="info-header">
                        <li>{info?.email}</li>
                        <li>{info?.dienthoai}</li>
                        <li>
                            <div className="lang-header">
                                <a href="ngon-ngu/vi/">VI</a> |
                                <a href="ngon-ngu/en/">EN</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
