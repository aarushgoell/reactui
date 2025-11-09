import { useState } from "react";

export default function Navbar() {
  const data = [
    "Dashboard",
    "Roster ↓",
    "Communications ↓",
    "CRM ↓",
    "Contracts ↓",
    "Settings ↓",
    "More ↓",
  ];

  const [menuOpen, setMenu] = useState(false);

  return (
    <div className="container-fluid tpr">
      <div className="container">
        <div className="row g-0 ">
          <div className="col-2 nav1 d-md-block d-none">
            <div class="na">
              <span class="hash">#</span>
              <span>ROSTER GRID</span>
            </div>
          </div>

          <div className="col-2 nav1 d-md-none d-block tog">
            <div
              onClick={() => {
                setMenu(true);
              }}
            >
              <img src="./src/imgs/menu.png" width="15px" height="15px" />
              <span> Menu</span>
            </div>
          </div>
          <div className="col-md-8 nav2 col-7">
            <div className="row g-0 justify-content-center nvr">
              <div className="col-auto d-md-block mdcol d-none">
                <div className="row justify-content-center g-0 navitms">
                  {data.map((d, index) => {
                    return (
                      <div key={index} className="col-auto itm navitms">
                        {d}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col d-md-none d-block midtr">
                <div class="midRo1">
                  <div>#</div>
                  <div class="midRo">
                    <span>ROSTER </span>
                    <span>GRID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 nav3 col-3">
            <div class="icons">
              <img src="./src/imgs/bell.png" width="15px" height="15px" />
              <div>Michael</div>
              <div>M</div>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="close-btn" onClick={() => setMenu(false)}>
              <div class = "xx">✕</div>
            </div>
            <div class = "mobitm">
              {data.map((d) => {
                return <div class = "mobitmss">{d}</div>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
