import Block from "./Block";
import Grid from "./Grid";

import { useState, useEffect } from "react";
import Axios from "axios";

function Catalog() {
    const [products, setProducts] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:8080/products').then((response)=>{
			setProducts(response.data);
		})
	}, [])
	return (
        <Grid width={4}>
            {
                products.map((val, key) => {
                    return (
                        <Block key={key} 
                            image={`https://via.placeholder.com/300?text=300+x+300`}
                            heading={val.name}
                            subheading={val.features.model}
                            price={val.price}
                        />
                    )
                })
            }
        </Grid>
    );
}
  
export default Catalog;
