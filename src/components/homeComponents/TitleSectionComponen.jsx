import React from 'react'

function TitleSectionComponen({title,description}) {
  return (
    <div className="text-center m-auto mb-12 lg:px-40 ">
    <h2 className="text-color-primary mb-2 ">
      {title}
    </h2>
    <p className="description ">
      {description}
    </p>
  </div>
  )
}

export default TitleSectionComponen