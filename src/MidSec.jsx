import center2 from "./imgs/center2.png";

export default function MidSec() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 midleft order-md-0 order-1">
            <div class = "midson">
              <div>Welcome! </div>
              <div>
                Manage Your
                <span> Deals</span>
              </div>
              <div>Get Started</div>
            </div>
          </div>
          <div className="col-md-6 c2img order-md-1 order-0">
            <img src={center2} alt="photo" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
