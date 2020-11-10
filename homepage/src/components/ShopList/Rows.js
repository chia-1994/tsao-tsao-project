import React, { useState, useEffect } from 'react'
import Star from './Star'
function Rows(props) {
  const [fav, setFav] = useState(false)
  const [Specialoffer, setSpecialoffer] = useState(false)
  const { v, i } = props
  useEffect(() => {
    if (v.Specialoffer <= v.price && v.Specialoffer !== 0) {
      setSpecialoffer(true)
    } else {
      setSpecialoffer(false)
    }
  }, [])
  // if (v.Specialoffer <= v.price) {
  //   setSpecialoffer(true)
  // }
  //問題1 if (v.Specialoffer <= v.price) {
  //   setSpecialoffer(true)
  // }
  //問題二 搜尋後setoption
  return (
    <>
      <div class="shop_list-product col-xl-3  col-lg-4 col-md-6	">
        <div class="shop_list_top_pro">
          <img src={v.imgurl} alt="" />

          <span
            id={i}
            class="fav"
            onClick={(e) => {
              const newfav = !fav
              setFav(newfav)
            }}
          >
            {fav ? (
              <svg
                class="fav"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>favorite</title>
                <path d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"></path>
              </svg>
            ) : (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>favorite_outline</title>
                <path d="M12.094 18.563q2.25-2.016 3.328-3.047t2.344-2.438 1.758-2.484 0.492-2.109q0-1.5-1.008-2.484t-2.508-0.984q-1.172 0-2.18 0.656t-1.383 1.688h-1.875q-0.375-1.031-1.383-1.688t-2.18-0.656q-1.5 0-2.508 0.984t-1.008 2.484q0 1.031 0.492 2.109t1.758 2.484 2.344 2.438 3.328 3.047l0.094 0.094zM16.5 3q2.344 0 3.914 1.594t1.57 3.891q0 1.359-0.516 2.648t-1.898 2.883-2.508 2.672-3.609 3.328l-1.453 1.313-1.453-1.266q-3.234-2.906-4.664-4.359t-2.648-3.422-1.219-3.797q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109z"></path>
              </svg>
            )}
          </span>

          <div class="shop_list-product-name">
            <p class="shop_list-title">
              {v.name} <span>30ml</span>
            </p>

            <Star v={v} />
          </div>
        </div>
        <div class="shop_list-cart">
          <button>加入購物車</button>
          {Specialoffer ? (
            <h2 class="shop_list-price-sell">特NT.{v.Specialoffer}</h2>
          ) : (
            <h2 class="shop_list-price">NT.{v.price}</h2>
          )}
        </div>
      </div>
    </>
  )
}
export default Rows
