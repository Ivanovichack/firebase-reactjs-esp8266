import * as React from 'react';
import { Component } from 'react';
import { FirebaseDatabaseMutation } from "@react-firebase/database";

class ChangeValues extends Component {

        state = {
            ValR:0,
            ValG:0,
            ValB:0
        }

    handleChangeR = (event) => {
        
        this.setState({
            ValR: event.target.value
        })
        this.props.parentCallback(this.state.ValR,this.state.ValG,this.state.ValB);
    }

    handleChangeG = (event) => {
        this.setState({
            ValG: event.target.value
        })
        this.props.parentCallback(this.state.ValR,this.state.ValG,this.state.ValB);
    }

    handleChangeB = (event) => {
        this.setState({
            ValB: event.target.value
        })
        this.props.parentCallback(this.state.ValR,this.state.ValG,this.state.ValB);
    }

    render() {
        return (
            <FirebaseDatabaseMutation type="set" path="led/">
                {({ runMutation }) => (
                    <form
                        onChange={async ev => {
                            
                            await runMutation({
                                r: Number(this.state.ValR),
                                g: Number(this.state.ValG),
                                b: Number(this.state.ValB)
                            });
                            
                            
                        }}
                    >
                        <div className="row">
                            <div className="col-sm-12">
                                <input onChange={this.handleChangeR} type="range" min="1" max="255" step="1" class="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input onChange={this.handleChangeG} type="range" min="1" max="255" step="1" class="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <input onChange={this.handleChangeB} type="range" min="1" max="255" step="1" class="form-control"/>
                            </div>
                        </div>
                    </form>
                )}
            </FirebaseDatabaseMutation>
        );
    }
}

export default ChangeValues;