import React, { useState } from "react";
import wash from "../../Assets/Images/wash_big.png";
import Table from "./Table";

const Wash = () => {
  const [item, setitem] = useState("");
  const washItems = [
    {
      name: "Shirt",
      price: 10,
    },
    {
      name: "Pant",
      price: 10,
    },
    {
      name: "Saree",
      price: 30,
    },
    {
      name: "3pc",
      price: 30,
    },
  ];
  const addCart = (item) => {
    setitem(item);
  };
  console.log(item);
  return (
    <div>
      <div className="flex justify-between mx-10 pt-10">
        <div className="text-left">
          <p className="text-3xl font-bold text-primary">Wash</p>
          <p>For everyday laundry, bedsheets and towels.</p>
          <p>
            <span>Wash</span> <span>TUMBLE-DRY</span>
          </p>
        </div>
        <div>
          <img className="h-16" src={wash} alt="" />
        </div>
      </div>
      <div>
        <div className="tabs">
          <a className="tab tab-lifted">Tab 1</a>
          <a className="tab tab-lifted tab-active">Tab 2</a>
          <a className="tab tab-lifted">Tab 3</a>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <p>Items</p>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Add Cart</th>
                </tr>
              </thead>
              <tbody>
                {washItems.map((item) => (
                  <>
                    <tr>
                      <th>1</th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          onClick={() => addCart(item)}
                          class="btn btn-sm"
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wash;
