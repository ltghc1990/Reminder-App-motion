import React from "react";

const Container = ({
  children,
  OuterBg = "bg-gray-200",
  InnerBg = "bg-gray-200",
}) => {
  return (
    <div className={`${OuterBg} h-screen overflow-y-auto`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-2 sm:mx-4 md:mx-6">
          <div
            className={`px:2 sm:px-4 md:px-6 lg:px-8 xl:px-10 h-screen ${InnerBg}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
