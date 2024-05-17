import { Fragment, useState } from "react";
import styles from "./modal.module.css";

const FilterModal = ({ open, setOpen }) => {
  const [filter, setFilter] = useState([]);
  const industryItem = [
    "Health Care",
    "Materials",
    "Energy",
    "Consumer Discretionary",
    "Consumer Staples",
    "Real Estate",
  ];
  const industryItem2 = [
    "IT",
    "Communication",
    "Industerials",
    "Utilities",
    "Financials",
  ];
  const choices = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];
  const handleDelete = (item) => {
    setFilter((prevItems) => prevItems.filter((value) => item !== value));
  };
  const filterHandler = (item) => {
    if (!filter.includes(item)) {
      setFilter((prevArray) => [...prevArray, item]);
    }
  };
  const clearHandler = () => {
    setFilter([]);
  };

  const submitHandler = () => {
    setOpen((prev) => !prev);
  };

  const BackDrop = ({ open, setOpen }) => {
    return (
      <div
        className={`${styles.backDrop} ${open ? styles.showBackDrop : null}`}
        onClick={() => setOpen(false)}
      ></div>
    );
  };

  const Overlay = ({ open }) => {
    return (
      <div
        className={`${styles.FilterWrapper} ${
          open ? styles.showOverlay : null
        }`}
      >
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={styles.closebtn}
        >
          X
        </div>
        <h2> Filters</h2>
        <div className={styles.filterhead}>
          <span>Filter Applied</span>
          <button className={styles.x} onClick={() => clearHandler()}>
            Clear All
          </button>
        </div>
        <div className={styles.filterapplied}>
          {filter.map((item, index) => (
            <span className={styles.filteritem} key={index}>
              {item} <button onClick={(e) => handleDelete(item)}>x</button>
            </span>
          ))}
        </div>
        <div className={styles.stock}>
          <p> Stock</p>
          <div className={styles.div}>
            <input placeholder="$Ticket" />
            <button>Filter</button>
          </div>
          <div className={styles.industry}>
            <div className={styles.title}>
              <img src="../../arrowdown.png" />

              <h3>Industry</h3>
            </div>
            <div className={styles.industryitems}>
              <div className={styles.industryitem}>
                {industryItem.map((item, index) => (
                  <div key={index}>
                    <img />
                    <span
                      value={item}
                      onClick={(e) => filterHandler(e.target.textContent)}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.industryitem2}>
                {industryItem2.map((item, index) => (
                  <div key={index}>
                    <img />
                    <span
                      value={item}
                      onClick={(e) => filterHandler(e.target.textContent)}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.morefilter}>
            <div className={styles.marketcap}>
              <div className={styles.head}>
                <img src="../../arrowdown.png" />

                <h3>Market cap</h3>
              </div>
              <form>
                <div>
                  <input
                    type="radio"
                    id="micro"
                    value="micro"
                    onClick={(e) => filterHandler(e.target.value)}
                  ></input>
                  <span>micro</span>
                </div>
                <div>
                  <input
                    type="radio"
                    id="small"
                    value="small"
                    onClick={(e) => filterHandler(e.target.value)}
                  ></input>
                  <span>small</span>
                </div>
                <div>
                  <input
                    type="radio"
                    id="large"
                    value="large"
                    onClick={(e) => filterHandler(e.target.value)}
                  ></input>
                  <span>large</span>
                </div>
              </form>
            </div>
            <div className={styles.risk}>
              <div className={styles.head}>
                <h3>Risk Level</h3>
              </div>
              <form>
                <div>
                  <input
                    type="radio"
                    id="low"
                    value="low"
                    onClick={(e) => filterHandler(e.target.value)}
                  ></input>
                  <span>low</span>
                </div>
                <div>
                  <input
                    type="radio"
                    id="mid"
                    value="mid"
                    onClick={(e) => filterHandler(e.target.value)}
                  ></input>
                  <span>mid</span>
                </div>
                <div>
                  <input
                    type="radio"
                    id="high"
                    value="high"
                    onClick={(e) => filterHandler(e.target.value)}
                  ></input>
                  <span>large</span>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.morefilter2}>
            <div className={styles.strategy}>
              <h3>Strategy</h3>
              <p onClick={(e) => filterHandler(e.target.textContent)}>
                Big Option Buys
              </p>
              <p onClick={(e) => filterHandler(e.target.textContent)}>
                Merger Arbitage
              </p>
              <p onClick={(e) => filterHandler(e.target.textContent)}>
                {" "}
                ShortReport
              </p>
            </div>
            <div className={styles.asset}>
              <h3>Assets</h3>
              <p onClick={(e) => filterHandler(e.target.textContent)}>Stack</p>
              <p onClick={(e) => filterHandler(e.target.textContent)}>Option</p>
              <p onClick={(e) => filterHandler(e.target.textContent)}>
                Futures
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => submitHandler()}>
            Save
          </button>
          <button className={styles.button2} onClick={() => submitHandler()}>
            Apply
          </button>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <BackDrop open={open} setOpen={setOpen} />
      <Overlay open={open} />
    </Fragment>
  );
};

export default FilterModal;
