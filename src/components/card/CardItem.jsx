import { useState } from "react";

const CardItem = ({ item, open, setOpen, i, seti }) => {
  const handle = () => {
    seti(item);
    setOpen((prev) => !prev);
  };
  return (
    <div className={open && i === item ? "card-active" : "card"}>
      <table onClick={() => handle()}>
        <tr>
          <td>
            <img src="../../ticket.png" />
            TSLA
          </td>
          <td>
            <img src="../../doc.png" />
            200
          </td>
          <td className={true ? "high" : "low"}>
            <img src="../../vector.png" /> -.25%
          </td>
          <td>
            <img src="../../dollar.png" /> amzn
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CardItem;
