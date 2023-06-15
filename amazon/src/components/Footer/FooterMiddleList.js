import React from "react";

const FooterMiddleList = ({ item }) => {
  return (
    <div className="py-6 px-8 w-full flex justify-start items-center">
      <ul className="flex flex-col gap-2 font-bodyFont items-start">
        {item.entities.map((i,idx) => (
          <li key={`${idx+1}`}className="footerLink">{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
