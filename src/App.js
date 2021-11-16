import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar";
import { SectionOne } from "./sections/SectionOne";
import {SectionTwo} from "./sections/SectionTwo";


function App() {
    return (
        <div className="container-fluid">
            {/*<Button/>*/}
            <Navbar />
            <SectionOne />
            {/*second section*/}
            <SectionTwo />
            <section className="ui-section-pricing">
                <div className="ui-layout-container">
                    <h2>How many plastic bottles can you save?</h2>
                    {/*<p className="ui-text-intro">Lorem ipsum dolor sit amet.</p>*/}

                    <div className="card">
                        <div className="card-body">
                            Genny – Saves up to 18,250 plastic bottles of water a year
                        </div>
                    </div>
                </div>
            </section>

            <section className="ui-section-hero">
                <div className="ui-layout-container">
                    <div className="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
                        <div>
                            {/*<h1>Design better.</h1>*/}
                            <h2>What we do?</h2>
                            <p>
                                Clean Waters Oceania provides a sustainable supply of fresh, clean and healthy water to households, communities, governments and NGOs
                            </p>
                            <p>
                                To do this we offer our customers Watergen’s world-class and award-winning GENius atmospheric water generators that generate between 10 and 6000 litres of clean water from the air every day

                            </p>

                            <p>
                                It is a fully zero emissions, zero infrastructure sustainable water generation solution, the first of its kind in Australia and the South Pacific

                            </p>

                            <p>
                                here is no need to install any water infrastructure or pipelines, there is no transportation and storage, no more waste of plastic bottles

                            </p>

                            <p>
                                Less emissions, less cost, less plastic, more drinking water

                            </p>


                            {/*<div className="ui-component-cta ui-layout-flex">*/}
                            {/*  <a href="#" role="link" aria-label="#" className="ui-component-button ui-component-button-normal ui-component-button-primary">Get Started for Free</a>*/}
                            {/*  <p className="ui-text-note"><small>30 days free trial.</small></p>*/}
                            {/*</div>*/}
                        </div>
                        <img src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png" loading="lazy" alt="#" className="ui-image-half-right" />
                    </div>
                </div>
            </section>
            {/*section 4*/}

            <section className="ui-section-pricing">
                <div className="ui-layout-container">
                    {/*<h2>How many plastic bottles can you save?</h2>*/}
                    <h2>Target Market and Product Line</h2>
                    <div className="row" >
                        <div className="container">
                            <div className="row row-cols-3">
                                {
                                    [1, 2, 3, 4].map(item => (
                                        <div className="card col" key={item}>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                Genny – Saves up to 18,250 plastic bottles of water a year
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                    </div>


                </div>
            </section>
            {/*section 5*/}

            <section className="ui-section-pricing">
                <div className="ui-layout-container">
                    <h2>How it works?</h2>
                    <p className="ui-text-intro">video</p>


                </div>
            </section>
            {/*section 6*/}
            <section className="ui-section-pricing">
                <div className="ui-layout-container">
                    {/*<h2>How it works?</h2>*/}
                    {/*<p className="ui-text-intro">video</p>*/}


                    <div className="container">
                        <div className="row row-cols-3">
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                        </div>
                    </div>
                </div>
            </section>

            {/*section 7*/}
            <section className="ui-section-pricing">
                <div className="ui-layout-container">
                    <h2>For the first time</h2>
                    <p >Making water from air 24/7/365 is a true economic reality
                        Our technology is set not only to have a significant impact on the lives of countless people and communities around the world, but provides a solution that is both commercially available and affordable. It will also have a major economic impact on the water industry and will help solve drinking water stress in major global geographies.
                    </p>
                    <p >
                        Watergen’s solution is a new drinking water source for our earth. Production is at the point of use; no water transportation is needed.
                    </p>
                    <p >
                        As the only company in our field with mass manufacturing facilities on 3 continents, we are able to offer a reliable supply of units, for small or large orders, either from stock or made-to-meet demand. As well as reducing the lead time between order and delivery, mass production also ensures the reliability of our technology.

                    </p>


                </div>
            </section>

            {/*section 8*/}
            <section className="ui-section-pricing">
                <div className="ui-layout-container">
                    <h2>Media Report</h2>

                    <div className="container">
                        <div className="row row-cols-3">


                            <div className="card col">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    Genny – Saves up to 18,250 plastic bottles of water a year
                                </div>
                            </div>
                            <div className="card col">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    Genny – Saves up to 18,250 plastic bottles of water a year
                                </div>
                            </div>
                            <div className="card col">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    Genny – Saves up to 18,250 plastic bottles of water a year
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/*section 9*/}
            <section className="ui-section-pricing">
                <div className="ui-layout-container">
                    <h2>Award record</h2>

                    <div className="container">
                        <div className="row row-cols-3">


                            <div className="card col">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    Genny – Saves up to 18,250 plastic bottles of water a year
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/*section 10*/}
            <footer role="contentinfo" className="ui-section-footer">
                <div className="ui-layout-container">
                    <div className="ui-section-footer__layout ui-layout-flex">
                        <p className="ui-section-footer--copyright ui-text-note"><small>&copy; 0000 Uisual</small></p>
                        <a href="#" role="link" aria-label="#">
                            <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href="#" role="link" aria-label="#">
                            <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                            </svg>
                        </a>
                        <a href="#" role="link" aria-label="#">
                            <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                                <circle cx="12" cy="12" r="10" />
                                <path
                                    d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
