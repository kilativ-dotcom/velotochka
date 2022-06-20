import Slider from "./Slider";
import Switcher from "./Switcher";
function Home() {
	return (
        <>
            <Slider autoscroll>
                <div style={{backgroundColor: 'LightSteelBlue', height: '350px'}}></div>
                <div style={{backgroundColor: 'LightGreen', height: '350px'}}></div>
                <div style={{backgroundColor: 'LightSkyBlue', height: '350px'}}></div>
            </Slider>
            <Switcher heading="Popular" switches={['Spares', 'Accessories', 'Bikes']} active={2}>
                <div style={{backgroundColor: 'LightSteelBlue', height: '350px', width: '100%'}}></div>
                <div style={{backgroundColor: 'LightGreen', height: '350px', width: '100%'}}></div>
                <div style={{backgroundColor: 'LightSkyBlue', height: '350px', width: '100%'}}></div>
            </Switcher>
        </>
	);
}
  
export default Home;
