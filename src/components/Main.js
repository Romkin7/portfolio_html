import React from "react";
import GridItem from "./GridItem";
import BG1 from "../images/img1.jpg";
import BG2 from "../images/img2.jpg";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {style: {backgroundImage: `url(${BG1})`}};
        this.myRef = React.createRef();
    }
    pageScrollHandler(event) {
        this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    render() {
        return (
            <main>
                <section className="headerSection">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.leadin}</p>
                    <div className="container">

                    </div>
                    <div id="background" style={this.state.style}></div>
                    <button onClick={(event) => this.pageScrollHandler(event)} className="button button-big button-basic button-white">view projects</button>
                </section>
                <section ref={this.myRef} className="mainContentSection">
                    <h2>My Work</h2>
                    <div className="flex-container">
                        <GridItem title="Rolling Records" image="./images/rr.png" url="https://www.rollingrecords.fi"></GridItem>
                        <GridItem title="Klaukkalan Rengas - Rengas Center Klaukkala" image="./images/rengas_center_logo.png" url="https://klaukkalanrengas.fi"></GridItem>
                        <GridItem title="Venpo Energia Oy" image="./images/venpo_logo.png" url="https://www.venpoenergia.fi"></GridItem>
                    </div>
                </section>
            </main>
        );
    }
};
export default Main;