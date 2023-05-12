import React, { Component } from "react";
import './ingredientes.css';

class Ingredientes extends Component {
    render() {
        return (
            <div className="inicio">
                <div>
                    <h1 className="pl5">Seleciona os Ingredientes que tens em casa para fazeres a tua receita!</h1>
                </div>
                <div class="flex">
                    <div class="outline w-10 pa3 mr2">
                        <code>1</code>
                    </div>
                    <div class="outline w-10 pa3 mr2">
                        <code>2</code>
                    </div>
                    <div class="outline w-10 pa3 mr2">
                        <code>3</code>

                    </div>
                    <div class="outline w-10 pa3 mr2">
                        <code>4</code>
                    </div>
                    <div class="outline w-10 pa3">
                        <code>5</code>
                    </div>
                </div>
            </div>
        )
    }
}
export default Ingredientes;
