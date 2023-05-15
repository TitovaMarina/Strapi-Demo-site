import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
	query GetProdacts{
		products{
	  		data{		
				id
				attributes{
					name
					price
				}
			}
	  	}
	  
	}
`;
export const Products: React.FC = () => {
	const { loading, error, data } = useQuery(GET_PRODUCTS);

	//console.log('data=', data);

	if (loading) return (<div>Loading...</div>);
	if (error) return (<div>Error! ${error.message}</div>);

	return (<div>
		<h2>Products list:</h2>
		{data.products.data.map((product: Products) => {
			//console.log(' id=', id, ' product=', product);
			//console.log(' product.attributes=', product.attributes);
			return (
				<div key={`prod_${product.id}`}>

					<span>{product.id}:{product.attributes.name} = {product.attributes.price} euro</span>
				</div>
			)
		})}

	</div>);

}