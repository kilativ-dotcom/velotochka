import Block, { ButtonBlock } from "./Block";
import Grid from "./Grid";
import InfoBox, { Section } from "./InfoBox";

import styles from "./Catalog.module.scss";

import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

import { ReactComponent as DiamondIcon } from "../icons/diamond.svg";
import { ReactComponent as ListIcon } from "../icons/list.svg";
import { ReactComponent as CoinsIcon } from "../icons/coins.svg";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let category = searchParams.get("category");
	useEffect(() => {
        let request;
        if(category != null)
            request = 'http://localhost:8080/products/categories/' + category;
        else
            request = 'http://localhost:8080/products';
		Axios.get(request).then((response)=>{
			setProducts(response.data);
		})
	}, [category])

	return (
        <>
            <InfoBox heading="Catalog">
                <Section heading="A large assortment" icon={<ListIcon width="50" height="50" />}>
                    <p>
                        More than 2 thousand products are presented in the catalog, <br />
                        which is constantly updated and expanded
                    </p>
                </Section>
                <Section heading="Minimum prices" icon={<CoinsIcon width="50" height="50" />}>
                    <p>
                        We provide the lowest possible prices in Belarus
                    </p>
                </Section>
                <Section heading="Warranty 12 months" icon={<DiamondIcon width="50" height="50" />}>
                    <p>
                        When selling any bicycle, <br />
                        turnkey pre-sale preparation <br />
                        Warranty 12 months for the frame, and 6 months for attachments.
                    </p>
                </Section>
            </InfoBox>
            <CategorySelector selectedCategory={category}/>
            <div className={styles.container}>
				<div className={styles.filters}>
					<h1>Filters</h1>
					<ul>
						<li>
							<button className={styles.button}>Categories</button>
						</li>
						<li>
							<button className={styles.button}>Manufacturer</button>
						</li>
						<li>
							<button className={styles.button}>Date of production</button>
						</li>
						<li>
							<button className={styles.button}>Price</button>
						</li>
						<li>
							<button className={styles.button}>Frame material</button>
						</li>
						<li>
							<button className={styles.button}>Number of gears</button>
						</li>
						<li>
							<button className={styles.button}>Weight</button>
						</li>
						<li>
							<button className={styles.button}>Load capacity</button>
						</li>
						<li>
							<button className={styles.button}>Country</button>
						</li>
					</ul>
				</div>
				<div className={styles.main}>
					<h1>Found {products.length} products</h1>
                    <Grid width={3}>
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
				</div>
			</div>
        </>
    );
}

function CategorySelector(props) {
    return(
        <div className={styles.categorySelector}>
            <Link to={props.selectedCategory !== "accessories" ? "?category=accessories" : ""}>
                <ButtonBlock 
                    heading="Accessories" 
                    image={`https://via.placeholder.com/300?text=300+x+300`} 
                    selected={props.selectedCategory === "accessories" ? true : false}/>
            </Link>
            <Link to={props.selectedCategory !== "bikes" ? "?category=bikes" : ""}>
                <ButtonBlock 
                    heading="Bikes" 
                    image={`https://via.placeholder.com/300?text=300+x+300`}
                    selected={props.selectedCategory === "bikes" ? true : false}/>
            </Link>
            <Link to={props.selectedCategory !== "spare-parts" ? "?category=spare-parts" : ""}>
                <ButtonBlock 
                    heading="Spare parts" 
                    image={`https://via.placeholder.com/300?text=300+x+300`}
                    selected={props.selectedCategory === "spare-parts" ? true : false}/>
            </Link>
        </div>
    );
}
  
export default Catalog;
