import React from 'react'
import Products from './Products'

const ProductList = (props) => {
    const {admin} = props
    const dummy = [
        {
            Title:"Title1",
            Desc : "Loremasdhasd",
            Image : '1.png',
            Category : [1,2,3,4,5]
        },
        {
            Title:"Title2",
            Desc : "LoremasdhasdasdjahjsdjnjasdnjkasLoremasdhasdasdjahjsdjnjasdnjkasLoremasdhasdasdjahjsdjnjasdnjkasLoremasdhasdasdjahjsdjnjasdnjkasLoremasdhasdasdjahjsdjnjasdnjkasLoremasdhasdasdjahjsdjnjasdnjkasLoremasdhasdasdjahjsdjnjasdnjkas",
            Image : '2.png',
            Category : [1,2,3,4,5]
        },
        {
            Title:"Title2",
            Desc : "Loremasdhasdasdjahjsdjnjasdnjkas",
            Image : '3.png',
            Category : [1,2,3,4,5]
        },
        {
            Title:"Title2",
            Desc : "Loremasdhasdasdjahjsdjnjasdnjkas",
            Image : '4.png',
            Category : [1,2,3,4,5]
        },
        {
            Title:"Title2",
            Desc : "Loremasdhasdasdjahjsdjnjasdnjkas",
            Image : '4.png',
            Category : [1,2,3,4,5]
        },
        {
            Title:"Title2",
            Desc : "Loremasdhasdasdjahjsdjnjasdnjkas",
            Image : '4.png',
            Category : [1,2,3,4,5]
        },
        {
            Title:"Title2",
            Desc : "Loremasdhasdasdjahjsdjnjasdnjkas",
            Image : '4.png',
            Category : [1,2,3,4,5]
        },
    ]
    return (
        <div className="flex flex-wrap justify-center">
            {
                dummy.map(el => {
                    return <Products Title={el.Title} Desc={el.Desc} Image={el.Image} Category={el.Category} Test={typeof el.Category}/>
                })
            }
        </div>
    )
}

export default ProductList