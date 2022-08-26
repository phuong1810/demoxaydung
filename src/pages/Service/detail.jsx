import React from "react";
// import serviceApi from "../../commons/apis/serviceApi";

export default function DetailService() {
//   const [serviceDetail, setServiceDetail] = useState({});

//   const fetchService = async () => {
//       const serviceDetail = await serviceApi.getServiceById(id);
//       setServiceDetail(serviceDetail);
//   };

//   useEffect(() => {
//       fetchService();
//   }, []);
  return (
    <>
        <div className="container">
            <div className="content-detail mt20">
                <h1 className="title-mainx"><span>Bảo trì nhà xưởng</span></h1>
                <div className="alert alert-warning" role="alert">
                    <strong>Nội dung đang cập nhật</strong>
                </div>
            </div>
        </div>
    </>
  )
}
