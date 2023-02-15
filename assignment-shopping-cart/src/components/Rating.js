import React from 'react'

const Rating = ({value,color}) => {
  return (
    <div>
        {[1,2,3,4,5].map((rate,index)=>(
            
                <i key={index} style={{color}} className={
                    value+1===rate+0.5
                    ? 'fas fa-star-half-alt'
                    :value>=rate
                    ? 'fas fa-star'
                    : 'far fa-star'


                }>

                </i>

        )
        )}
    </div>
  )
}
Rating.defaultProps={
    color:"orange",
};

export default Rating