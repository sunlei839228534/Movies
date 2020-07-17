import React from 'react' 

const Like = ({liked,onClickLike,movie}) => {
  let classes = liked ? 'fa fa-heart' : 'fa fa-heart-o'
  return (
    <i onClick={() => {
      onClickLike(movie)
    }}
    style={{
      cursor: "pointer"
    }}
    className={classes} aria-hidden="true"></i>
  )
}

export default Like ;