import React, {Fragment} from 'react'
import ProductList from '../components/ProductList'
import Search from '../components/Search'

const Catalogue = (props) => {
  const {admin} = props
    return (
		<Fragment>
      <div className="lg:px-24 pb-20 md:px-15 sm:px-12 text-green-800">
            <div className="flex flex-col sm:flex-row justify-between mr-3 mb-4 items-center sm:px-24">
              <div className="font-bold lg:text-3xl mb-5 text-3xl">Katalog harga</div>
              <Search />
            </div>
            { admin
            ? <ProductList admin={true}/>
            : <ProductList />
            }
      </div>
		</Fragment>
    )
}

export default Catalogue