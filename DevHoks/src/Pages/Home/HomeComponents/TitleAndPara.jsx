
import proptype from 'prop-types'
export const TitleAndPara = ({ prop }) => {
  return (
    <div className="mx-auto text-center mb-5">
    <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
        {prop.title}
      </div>  
    </div>
    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      {prop.heading}
    </h1>
    <p className="mt-3 text-lg font-medium tracking-wide leading-8 text-gray-600">
      {prop.description}
    </p>
  </div>
  )
}

TitleAndPara.propTypes = {
  prop: proptype.object.isRequired
}
export default TitleAndPara