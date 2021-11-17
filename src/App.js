import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar";
import { SectionOne } from "./sections/SectionOne";
import { SectionTwo, StyledSectionOneDetails } from "./sections/SectionTwo";
import { SectionThree } from "./sections/SectionThree";
import { SectionFour } from "./sections/SectionFour";
import { SectionFive } from "./sections/SectionFive";
import { SectionSix } from "./sections/SectionSix";
import { SectionMR } from "./sections/SectionMR";
import {SectionAR} from "./sections/SectionAR";
import {Footer} from "./sections/Footer";


function App() {
    return (
        <div className="container-fluid">
            {/*<Button/>*/}
            <Navbar />
            <SectionOne />
            {/*second section*/}
            <SectionTwo />

            {/*section 3*/}
            <SectionThree />

            <SectionFour />

            <SectionFive />

            <SectionSix />

            <SectionMR />

            {/*section 9*/}
            <SectionAR />

            {/*section 10*/}
            <Footer />

        </div>
    );
}

export default App;
