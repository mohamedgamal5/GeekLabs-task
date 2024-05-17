import { Fragment, useState } from "react";
import CardItem from "./CardItem";
import "./card.css";
const CardList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [open, setOpen] = useState(true);
  const [i, seti] = useState("");

  return (
    <div className="strp-list">
      {list.map((item, index) => (
        <>
          <CardItem
            item={item}
            key={index}
            open={open}
            setOpen={setOpen}
            seti={seti}
            i={i}
          />
          {open && item === i && (
            <div className="data">
              <p>$TSLA just announced an acquisition of $NFLX at $200 B. </p>
              <p>
                This is an arbitrage opportunity, with the max gain being %X if
                the deal closes, but the possible risk is %Y  if the deal fails,
                If the deal success is % and therefore the recommended play is
                long/short $ABC
              </p>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default CardList;
