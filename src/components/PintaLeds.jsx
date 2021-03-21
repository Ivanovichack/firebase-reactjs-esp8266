import React, { Component } from 'react';
import ChangeValues from './ChangeValues';

class PintaLeds extends Component {


    state = {
        r: this.props.items[2],
        g: this.props.items[1],
        b: this.props.items[0]
    }

    handleCallback = (rr, gg, bb) => {
        this.setState({
            r: rr,
            g: gg,
            b: bb
        })
    }


    render() {
        return (
            <div>
                <div className="mb-3 row">
                    <div className="mb-2 col-sm-4">
                        <input type="button" className="btn btn-danger form-control" value={this.state.r} />
                    </div>
                    <div className="mb-2 col-sm-4">
                        <input type="button" className="btn btn-success form-control" value={this.state.g} />
                    </div>
                    <div className="col-sm-4">
                        <input type="button" className="btn btn-info form-control" value={this.state.b} />
                    </div>

                </div>

                <ChangeValues parentCallback={this.handleCallback}/>
            </div>

        );
    }
}

export default PintaLeds;