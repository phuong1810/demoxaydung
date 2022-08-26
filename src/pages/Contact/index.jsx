import React, { useEffect, useState } from 'react'
import Parser from 'html-react-parser';
import infoCompanyApi from "../../commons/apis/infoCompanyApi";

export default function Contact() {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62911.7596577478!2d105.46372261772665!3d9.767337926557696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0e8249a3f78e9%3A0x269473ba2f1f9176!2zQ2jhu6MgUGjGsOG7nW5nIDc!5e0!3m2!1svi!2s!4v1636196005509!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'; 
    
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
        <div className="container">
            <div className="title-main"><span>Liên hệ</span></div>
            <div className="content-main w-clear">
                <div className="top-contact">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="article-contact">
                                 <h3>{info?.tencty2} <span>{info?.tencty}</span></h3>
                                 <div><span><i className="fas fa-map-marker-alt"></i> Địa chỉ:</span> {info?.diachi}</div>
                                    <div><span><i className="fas fa-phone-alt"></i> Hotline: </span> {info?.dienthoai} - Hotline Tư Vấn 24/7</div>
                                    <div><span><i className="fas fa-envelope"></i> Email: </span> {info?.email}</div>
                                    <div><span><i className="fas fa-globe"></i> Website: </span> {info?.website}</div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <form className="form-contact">
                                <div className="input-contact">
                                    <input type="text" className="form-control" id="ten" name="ten" placeholder="Họ tên" required=""/>
                                        <div className="invalid-feedback">Vui lòng nhập họ và tên</div>
                                </div>
                                <div className="input-contact">
                                    <input type="number" className="form-control" id="dienthoai" name="dienthoai" placeholder="Số điện thoại" required=""/>
                                        <div className="invalid-feedback">Vui lòng nhập số điện thoại</div>
                                </div>
                                <div className="input-contact">
                                    <input type="text" className="form-control" id="diachi" name="diachi" placeholder="Địa chỉ" required=""/>
                                        <div className="invalid-feedback">Vui lòng nhập địa chỉ</div>
                                </div>
                                <div className="input-contact">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" required=""/>
                                        <div className="invalid-feedback">Vui lòng nhập địa chỉ email</div>
                                </div>
                                <div className="input-contact">
                                    <input type="text" className="form-control" id="tieude" name="tieude" placeholder="Chủ đề" required=""/>
                                        <div className="invalid-feedback">Vui lòng nhập chủ đề</div>
                                </div>
                                <div className="input-contact">
                                    <textarea className="form-control" id="noidung" name="noidung" placeholder="Nội dung" required=""></textarea>
                                    <div className="invalid-feedback">Vui lòng nhập nội dung</div>
                                </div>
                                <input type="submit" className="btn btn-primary" name="submit-contact" value="Gửi"/>
                                    <input type="reset" className="btn btn-secondary" value="Nhập lại"/>
                                </form>
                            </div>
                        </div>
                    </div>
                <div className="bottom-contact">
                    {Parser(iframe)}
                </div>
            </div>
        </div>
    </>
    )
}
