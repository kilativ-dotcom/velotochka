import Slider from "./Slider";
import Switcher from "./Switcher";
import Block from "./Block";
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
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                </Grid>
                <Grid width={4}>
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                </Grid>
                <Grid width={4}>
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                    <Block image={`https://via.placeholder.com/300?text=300+x+300`} />
                </Grid>
            </Switcher>

        </>
	);
}
  
export default Home;
