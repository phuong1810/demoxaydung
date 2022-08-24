import React, { useEffect, useState } from "react";
import infoCompanyApi from "../apis/infoCompanyApi";

export default function Footer() {

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
    <div className="footer">
      <div className="container">
        <div className="info-lienhe wow fadeInUp" data-wow-offset="0" data-wow-duration="1"  data-wow-delay="0.2s">
          <h3>{info?.tencty2} <span>{info?.tencty}</span></h3>
          <ul>
              <li><span><i className="fas fa-map-marker-alt"></i> Địa chỉ:</span> {info?.diachi}</li>
              <li><span><i className="fas fa-phone-alt"></i> Hotline: </span> {info?.dienthoai} - Hotline Tư Vấn 24/7</li>
              <li><span><i className="fas fa-envelope"></i> Email: </span> {info?.email}</li>
              <li><span><i className="fas fa-globe"></i> Website: </span> {info?.website}</li>
          </ul>
      </div>
      </div>
      <div
        className="bottom-footer wow fadeInUp"
        data-wow-offset="0"
        data-wow-duration="1"
        data-wow-delay="0.4s"
      >
        <div className="container">
          <ul>
            <li>
              <a href="chinh-sach-thi-cong" title="Chính sách thi công">
                Chính sách thi công
              </a>
            </li>
            <li>
              <a href="chinh-sach-thanh-toan" title="Chính sách thanh toán">
                Chính sách thanh toán
              </a>
            </li>
            <li>
              <a href="chinh-sach-bao-mat" title="Chính sách bảo mật">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="chinh-sach-xay-dung" title="Chính sách xây dựng ">
                Chính sách xây dựng{" "}
              </a>
            </li>
          </ul>
          <div className="copyright">
            Copyright © 2022 Công Ty TNHH MTV Xây Dựng Cơ Khí An Phát.
          </div>
        </div>
      </div>
    </div>
  );
}
