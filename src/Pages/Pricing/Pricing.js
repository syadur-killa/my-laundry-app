import { Link, Outlet } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      <div className="bg-blue-800  ">
        <h1 className="text-4xl text-white pt-10">Our Services</h1>
        <div className=" gap-3">
          <Link to="wash">
            <button className="btn btn-sm">Wash</button>
          </Link>
          <Link to="washandiron">
            <button className="btn btn-sm btn-outline btn-accent">
              Wash and Iron
            </button>
          </Link>
          <Link to="dryclean">
            <button className="btn btn-sm">Dry Cleaning</button>
          </Link>
          <Link to="ironing">
            <button className="btn gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Ironning
            </button>
          </Link>
          <Link to="bulkitems">
            <button className="btn btn-sm">Duvets & Bulky Items</button>
          </Link>
          <Link to="deals">
            <button className="btn btn-sm">Deals</button>
          </Link>
        </div>
      </div>
      <div className="content flex justify-between px-10">
        <div className="mx-auto">
          {" "}
          <Outlet />
        </div>
        <div className="border bg-slate-300 mx-auto">
          <p>No services selected Do I need to list every item?</p>
          <button className="btn btn-primary">Schedule and Order</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
