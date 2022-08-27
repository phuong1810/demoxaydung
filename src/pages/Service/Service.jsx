import React, { useEffect, useState } from "react";
import serviceApi from "../../commons/apis/serviceApi";


export default function Service() {
    
    
    const [serviceList, setServiceList] = useState([]);

    const fetchService = async () => {
        const serviceList = await serviceApi.getService();
        setServiceList(serviceList);
    };

    useEffect(() => {
        fetchService();
    }, []);

    
    return (
        <>
            <div className="wrap-service">
                <div className="container">
                    <div className="title-main">
                        Dịch vụ <span>An Phát</span>
                        <p>Xây Dựng - Cơ Khí An Phát cung cấp các Dịch Vụ Chất lượng nhất tới Khách hàng</p>
                    </div>
                    <div className="row">
                        {serviceList.map((service, index)=>(
                             <div className="col-12 col-sm-6 col-md-4" key={index}>
                                <div className="item-service">
                                    <a href={"./dich-vu/" + service.id} title={service.ten}>
                                        <div className="img_hv">
                                            <img src={`./images/${service?.img}`} alt={service.ten} title={service.ten}/>
                                        </div>
                                        <h3>{service.ten}</h3>
                                        <p>{service.mota}</p>
                                        <div className="xct">Xem chi tiết</div>
                                    </a>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </>
    )
}
