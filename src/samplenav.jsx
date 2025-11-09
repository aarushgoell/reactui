
    return <div className="container-fluid shadow-sm py-2 ">
        <div className="container ">
            <div className="row align-items-center">
                <div className="col-3 ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row g-0 align-items-center">
                                <div
                                    className="col-3 text-center"
                                    style={{
                                        // border: "1px solid black",
                                        fontSize: "14px",
                                        color : "#9778e8",
                                        fontWeight : "bolder"
                                        
                                    }}
                                >
                                    #
                                </div>
                                <div
                                    className="col"
                                    style={{
                                        // border: "1px solid black",
                                        fontSize: "10px",
                                        wordBreak: "break-word",
                                    }}
                                >
                                  <div style={{
                                    fontWeight : "bolder"
                                  }}>
                                    ROSTER
                                    </div>  
                                    {/* <br /> */}

                                    <div style={{
                                        color : "#9778e8",

                                    }}>
                                  GRID
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

                <div className="col">
                    <div style={{
                        backgroundColor :  "rgba(243, 239, 239, 1)"
                    }} className="row py-1 rounded-5 px-1">
                        {
                            data.map((d)=>{
                                return  <div className="colhead col text-center rounded-4 ">
                                    
                                    <span class = "navhead">
                                        {d}
                                        </span>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <div className="d-flex align-content-center">
                        <div className="me-3 endhed">
                            <img src="./src/imgs/image.png" width = "13 px" />
                        </div>
                        <div className="me-2 endhed" >Michael</div>
                        <div className="me-2 endhed fe2" >M</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

