import React from "react";

const FeatureCardComponent = ({id, image, title, description }) => {
  return (
    <div className="text-center px-2 py-5 w-[330px] bg-white hover:border-color-secondary border duration-200 ease-in rounded-md shadow-sm h-60">
      <div>
        <img
          className="w-10 object-cover mb-3 block m-auto "
          src={`${image}`}
          alt="404"
        />
      </div>
      <div>
        <h5 className="mb-3 font-bold">{title}</h5>
        <p className="text-[16px] line-clamp-2 text-color-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCardComponent;
