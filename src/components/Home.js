import Slider from "./Slider";
import Switcher from "./Switcher";
import { SquareBlock } from "./Block";
import Grid from "./Grid";
function Home() {
	return (
        <>
            <Slider autoscroll>
                <div style={{backgroundImage: 'url(https://via.placeholder.com/1140x350?text=1140+x+350)', height: '350px', backgroundPosition: 'center'}} />
                <div style={{backgroundImage: 'url(https://via.placeholder.com/1140x350?text=1140+x+350)', height: '350px', backgroundPosition: 'center'}} />
                <div style={{backgroundImage: 'url(https://via.placeholder.com/1140x350?text=1140+x+350)', height: '350px', backgroundPosition: 'center'}} />
            </Slider>
            <Switcher heading="Popular" switches={['Spares', 'Accessories', 'Bikes']} active={0}>
                <Grid width={4}>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Spare Part" price="5" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Spare Part" price="6" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Spare Part" price="7" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Spare Part" price="8" id={1}/>
                </Grid>
                <Grid width={4}>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Accessory" price="10" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Accessory" price="20" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Accessory" price="30" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Accessory" price="40" id={1}/>
                </Grid>
                <Grid width={4}>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Stels Pilot" subheading="MD 950" price="950" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Stels Pilot" subheading="MD 950" price="950" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Stels Pilot" subheading="MD 950" price="950" id={1}/>
                    <SquareBlock image={`https://via.placeholder.com/300?text=300+x+300`} heading="Stels Pilot" subheading="MD 950" price="950" id={1}/>
                </Grid>
            </Switcher>

        </>
	);
}
  
export default Home;
