import React, {Component} from "react";
import Header from "../components/home/header";
import Contenido from "../components/home/contenido";
import Productos from '../components/home/productos';
import Head from "../components/head";

class Home extends Component{
    constructor() {
        super();
        this.state = {
            className1: 'hidden-left',
            className2: 'hidden-right',
            className3: 'hidden-left',
            ProductosClass1: "productos hide",
            ProductosClass2: "productos hide",
            ProductosClass3: "productos hide",
            ProductosClass4: "productos hide",
            ProductosClass5: "productos hide",
            ProductosClass6: "productos hide",
            ProductosClass7: "productos hide",
            ProductosClass8: "productos hide",
        }
    }
    static async getInitialProps({req}) {
        let mobile = false;
        if (req.headers["user-agent"].match(/Android|Mobile|iPhone/)) {
            mobile = true;
        }
        return {
            mobile
        }
    }
    scrollTop() {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 350) {
            this.setState({
                className1: 'show-left'
            });
        }
        if (scrollTop > 480) {
            this.setState({
                className2: 'show-right'
            });
        }
        if (scrollTop > 630) {
            this.setState({
                className3: 'show-left'
            });
        }
        if (scrollTop > 1150) {
            this.setState({
                ProductosClass1: 'productos show1',
            })
            setTimeout(() => this.setState({
                ProductosClass2: 'productos show2'
            }), 200);
            setTimeout(() => this.setState({
                ProductosClass3: 'productos show3'
            }), 400);
            setTimeout(() => this.setState({
                ProductosClass4: 'productos show4'
            }), 600);
        }
        if (scrollTop > 1500) {
            setTimeout(() => this.setState({
                ProductosClass5: 'productos show1',
            }), 600);
            setTimeout(() => this.setState({
                ProductosClass6: 'productos show2'
            }), 400);
            setTimeout(() => this.setState({
                ProductosClass7: 'productos show3'
            }), 200);
            this.setState({
                ProductosClass8: 'productos show4'
            })
        }

    }
    componentDidMount() {
        window.onscroll = () => this.scrollTop();
    }
    componentWillUnmount(){
        window.onscroll = undefined;
    }
    render() {
        return (
            <div style={{ marginTop: 70 + "px" }}>
                <Head 
                 title="Impulse Web Design - El codigo para tus ideas"
                />
                <div id="vista1">
                    <Header mobile={this.props.mobile}/>
                </div>
                <div id="vista2">
                    <Contenido
                     clase1={this.state.className1}
                     clase2={this.state.className2}
                     clase3={this.state.className3} 
                    />
                </div>
                <div id="contenido">
                    <Productos
                     className1={this.state.ProductosClass1}
                     className2={this.state.ProductosClass2}
                     className3={this.state.ProductosClass3}
                     className4={this.state.ProductosClass4}
                     className5={this.state.ProductosClass5}
                     className6={this.state.ProductosClass6}
                     className7={this.state.ProductosClass7}
                     className8={this.state.ProductosClass8}
                    />
                </div>
                <div style={{ width: 100 + "%", height: 500 + "px", background: "blue" }}></div>
            </div>
        );
    }
}
export default Home;