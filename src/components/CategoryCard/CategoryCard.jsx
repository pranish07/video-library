import React from 'react'

export const CategoryCard = ({category}) => {
    const navigate = useNavigate()
  return (
    <div>
        <img src={category.thumbnail} alt="" />
    </div>
  )
}

