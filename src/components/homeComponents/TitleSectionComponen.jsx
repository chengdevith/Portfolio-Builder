import React from 'react'

function TitleSectionComponen({title,description}) {
  return (
    <div className="text-center m-auto mb-12 lg:px-40 ">
    <h2 className="text-color-primary text-[36px] mb-2 font-bold">
      {title}
    </h2>
    <p className="description ">
      {description}
    </p>
  </div>
  )
}

export default TitleSectionComponen