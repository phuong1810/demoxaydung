import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
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
        <>
            <div className="header">
                <div className="menu-top">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="menu">
                            <ul>
                                
                                <li>
                                    <Link to={ '/xaydung-anphat/' }>Home</Link>
                                </li>
                                <li>
                                    <Link to={ '/xaydung-anphat/gioi-thieu' }>Giới thiệu</Link>
                                </li>
                                <li>
                                    <Link to={ '/xaydung-anphat/dich-vu' }>Dịch vụ</Link>
                                </li>
                                <li>
                                    <Link to={ '/xaydung-anphat/tin-tuc' }>Tin tức</Link>
                                </li>
                                <li>
                                    <Link to={ '/xaydung-anphat/lien-he' }>Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="logo-header" to={ '/xaydung-anphat/' }>
                            <img src={logo} alt={info?.tencty2} />
                        </Link>
                        <ul className="info-header">
                            <li>{info?.email}</li>
                            <li>{info?.dienthoai}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fixed-mb">
                <div className="menu-res">
                    <div className="menu-bar-res">
                        <a id="hamburger" href="#menu" title="Menu"><span></span></a>
                        <Link className="logo-header" to={ '/xaydung-anphat/' }><img src={logo} alt={info?.tencty2} /></Link>           
                        <div className="search-res">
                            <p className="icon-search transition"><i className="fa fa-search"></i></p>
                            {/* <div className="search-grid w-clear">
                                <input type="text" name="keyword2" id="keyword2" placeholder="Nhập từ khóa cần tìm..." onkeypress="doEnter(event,'keyword2');">
                                <p onclick="onSearch('keyword2');"><i className="fa fa-search"></i></p>
                            </div> */}
                        </div>
                    </div>                
                </div>            
            </div>
        </>
    )
}
