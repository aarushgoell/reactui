import { useState } from "react";
import { dummyDeals } from "./dummyData/dummyDeals";

export default function DealSec() {
  const [openRows, setOpenRows] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const toggleRow = (status) => {
    setOpenRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(status)) {
        newSet.delete(status);
      } else {
        newSet.add(status);
      }
      return newSet;
    });
  };

  const filterDeals = (deals) => {
    const query = searchQuery.toLowerCase().trim();
    const hasSearchQuery = query.length > 0;
    const hasDateFilter = fromDate || toDate;

    if (!hasSearchQuery && !hasDateFilter) {
      return deals;
    }

    return deals
      .map((deal) => {
        const statusMatches = hasSearchQuery
          ? deal.status.toLowerCase().includes(query)
          : true;

        const filteredDeals = deal.deals.filter((d) => {
          const matchesSearch =
            !hasSearchQuery ||
            d.client.toLowerCase().includes(query) ||
            d.dealName.toLowerCase().includes(query) ||
            d.assignee.toLowerCase().includes(query) ||
            d.budget.toLowerCase().includes(query) ||
            d.initials.toLowerCase().includes(query);

          const matchesDate =
            !hasDateFilter ||
            (() => {
              const dealDate = d.date || "";
              if (fromDate && toDate) {
                return dealDate >= fromDate && dealDate <= toDate;
              } else if (fromDate) {
                return dealDate >= fromDate;
              } else if (toDate) {
                return dealDate <= toDate;
              }
              return true;
            })();

          return matchesSearch && matchesDate;
        });

        if (statusMatches && hasSearchQuery) {
          if (hasDateFilter) {
            const dateFilteredDeals = deal.deals.filter((d) => {
              const dealDate = d.date || "";
              if (fromDate && toDate) {
                return dealDate >= fromDate && dealDate <= toDate;
              } else if (fromDate) {
                return dealDate >= fromDate;
              } else if (toDate) {
                return dealDate <= toDate;
              }
              return true;
            });
            return dateFilteredDeals.length > 0
              ? { ...deal, deals: dateFilteredDeals }
              : null;
          }
          return { ...deal, deals: deal.deals };
        } else if (filteredDeals.length > 0) {
          return { ...deal, deals: filteredDeals };
        }
        return null;
      })
      .filter((deal) => deal !== null);
  };

  const filteredDeals = filterDeals(dummyDeals);

  const totalDeals = filteredDeals.reduce(
    (total, deal) => total + deal.deals.length,
    0
  );
  const totalRevenue = filteredDeals.reduce((total, deal) => {
    const dealTotal = deal.deals.reduce((sum, d) => {
      const price = d.budget.replace(/[$,]/g, "");
      return sum + parseInt(price);
    }, 0);
    return total + dealTotal;
  }, 0);

  return (
    <div className="container-fluid">
      <div className="container cnn">
        <div className="row">
          <div className="col b tpbutfa">
            <div class="tpbut">
              <div className="div">My Deals</div>
              <div className="div">All Clients</div>
            </div>
          </div>
          <div className="col d-md-block d-none b">
            <div class="logofa">
              <div class="logo">MS</div>
            </div>
          </div>
          <div className="col b cross">x clear</div>
        </div>

        <div className="row g-0  py-2">
          <div className="col-lg-5 order-lg-0 order-1">
            <div class="bcol">
              <div className="div">Pipeline</div>
              <div className="div">List1</div>
              <div className="div">
                Total Deals: {totalDeals} Total Revenue in Pipeline: $
                {totalRevenue.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="col-lg-7 order-lg-0 order-0 d-flex rightc align-items-center">
            <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div class="inps d-md-block d-none">
              <div>
                From:{" "}
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
                To:{" "}
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </div>
            <div>Active Deals</div>
          </div>
          <div class="d-md-none respp my-2">
            From:{" "}
            <input
              type="date"
              class="respinp"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            To:{" "}
            <input
              type="date"
              class="respinp"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        <div className="container">
          {filteredDeals.map((d, index) => {
            const { status, deals, background } = d;
            const isOpen = openRows.has(status);

            const totDealsRow = deals.length;

            const totalsum = deals.reduce((accumulator, currentValue) => {
              let price = currentValue.budget;
              let cleaned = price.replace(/[$,]/g, "");
              let num = parseInt(cleaned);
              accumulator += num;
              return accumulator;
            }, 0);

            return (
              <div className="row my-1" key={status}>
                <div className="col">
                  <div
                    className="row py-1"
                    onClick={() => toggleRow(status)}
                    style={{
                      cursor: "pointer",
                      background: background,
                    }}
                  >
                    <div
                      className="col-auto d-flex align-items-center"
                      style={{ paddingRight: "10px" }}
                    >
                      <span
                        onClick={() => toggleRow(status)}
                        style={{
                          display: "inline-block",
                          transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
                          transition: "transform 0.6s ease",
                          cursor: "pointer",
                          userSelect: "none",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        ^
                      </span>
                    </div>
                    <div className="col d-flex align-items-center hdd">
                      <div className="div">{status}</div>
                      <div className="div">{totDealsRow}</div>
                      <div className="div">
                        <div>${totalsum}</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`deal-content ${
                      isOpen ? "deal-content-open" : "deal-content-closed"
                    }`}
                  >
                    <div className="row op">
                      <div className="col">Client</div>
                      <div className="col">Deal Name</div>
                      <div className="col">Budget</div>
                      <div className="col">Assignee</div>
                    </div>
                    {deals.map((deal, dealIndex) => {
                      const { client, initials, dealName, budget, assignee } =
                        deal;
                      return (
                        <div className="row de2 my-3" key={dealIndex}>
                          <div className="col d-flex align-items-center">
                            <div class="de">{initials}</div>
                            <div>{client}</div>
                          </div>
                          <div className="col">{dealName}</div>
                          <div className="col">{budget}</div>
                          <div className="col">{assignee}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
