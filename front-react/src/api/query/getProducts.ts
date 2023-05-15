import { gql } from '@apollo/client';

export default gql`
	query{
		products{
	  		data{
				id
				attributes{
					Name
				}
			}
	  	}
	  
	}
`;
