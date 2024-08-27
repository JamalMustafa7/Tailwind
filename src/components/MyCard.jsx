import React from 'react'

const MyCard = () => {
  return (
    <div className="bg-white max-w-sm rounded-xl">
        <div>
          <img className="w-full" src="https://static.vecteezy.com/system/resources/thumbnails/012/762/637/small_2x/pw-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector.jpg" />
        </div>
        <div className="px-3 py-1 text-xl font-medium">
          Card
          <p className="text-sm text-slate-500">Muhammad Jamal Mustafa</p>
        </div>
      </div>
  )
}

export default MyCard