import ClientRow from "./ClientRow";

import { dummyDeals } from "./dummyData/dummyDeals";

export default function DealSec() {


    return <div className="container-fluid">
        <div className="container del">

            <div className="row align-items-center">
                <div className="col-3 del2">
                    <div className="row gx-2">
                        <div className="col-4 c2">My deals</div>
                        <div className="col-4 c2">All clients</div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="col midtp">
                    <div class="ms">
                        MS
                    </div>

                </div>
                <div className="col-3 c33">
                    X clear
                </div>
            </div>
            <div className="row align-items-center py-3 d2">
                <div className="col-5 cc">
                    <div className="row align-items-center">
                        <div className="col-2 ">
                            <img src="./src/imgs/cp2.png" width="20px" class="pp" />
                            Pipeline
                        </div>
                        <div className="col-2  pp2">
                            <img src="./src/imgs/list.png" width="10px" class="pp pp2" />
                            List1
                        </div>
                        <div className="col "
                        >
                            Total Deals: 6 Total Revenue in Pipeline: $66,817
                        </div>
                    </div>

                </div>
                <div className="col"></div>
                <div className="col-6">
                    <div className="row ">
                        <div className="col-3 ">
                            <input placeholder="Search deals" type="text" className="inp" />
                        </div>
                        <div className="col-5 ">
                            <div className="dd">
                                 From: 
                                <input type="date" id="fromDate"/>

                                <span className="sspp">
                                    To: 
                                    </span> 
                                <input type="date" id="toDate"/>
                            </div>
                        </div>
                        <div className="col lll">
                            Active Deals
                        </div>
                    </div>

                </div>
            </div>
            <div className = "line"></div>
            
        
        {/* export const dummyDeals = [
  {
    status: "Negotiating",
    deals: [
      { client: "Chandan Kalita", initials: "CK", dealName: "Chandan Deal", budget: "$5,000", assignee: "Michael Speed" },
      { client: "Michael Speed", initials: "MS", dealName: "Some Deal 4", budget: "$7,000", assignee: "Michael Speed" },
      { client: "Sneha Patel", initials: "SP", dealName: "Patel Brand Expansion", budget: "$12,500", assignee: "Rahul Desai" },
      { client: "Rohit Sinha", initials: "RS", dealName: "Marketing Dashboard", budget: "$9,800", assignee: "Sara Patel" },
      { client: "Ananya Verma", initials: "AV", dealName: "CRM Automation", budget: "$6,000", assignee: "Michael Speed" },
    ],
  }, */}
            {
            
                dummyDeals.map((d)=>{
                    
                })
            
            }
            <ClientRow></ClientRow>
            


        </div>


    </div>

}