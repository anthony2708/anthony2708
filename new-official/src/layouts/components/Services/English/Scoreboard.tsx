import { Component } from "react";
import React from "react";

export default class Scoreboard extends Component<{id: string, data: any}, {  }> {
    constructor(props: { id: string; data: any; }){
        super(props);
    }

    render(){
        if (this.props.data.status === 200 && this.props.data.info != null) {
            return (
                <>
                    <div className="container">
                        <h6 className="text-center mt-5">Scoreboard</h6>
                    </div>
                    <div className="container table-responsive text-center">
                        <table className="table min-w-full table-striped table-bordered mt-5 mx-auto">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>P1</th>
                                    <th>P2</th>
                                    <th>P3</th>
                                    <th>P4</th>
                                    <th>P5</th>
                                    <th>T1</th>
                                    <th>T2</th>
                                    <th>T3</th>
                                    <th>T4</th>
                                    <th>T5</th>
                                    <th>Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.data.info.id}</td>
                                    <td>{this.props.data.info.name}</td>
                                    <td>{this.props.data.info.progress[0]}</td>
                                    <td>{this.props.data.info.progress[1]}</td>
                                    <td>{this.props.data.info.progress[2]}</td>
                                    <td>{this.props.data.info.progress[3]}</td>
                                    <td>{this.props.data.info.progress[4]}</td>
                                    <td>{this.props.data.info.test[0]}</td>
                                    <td>{this.props.data.info.test[1]}</td>
                                    <td>{this.props.data.info.test[2]}</td>
                                    <td>{this.props.data.info.test[3]}</td>
                                    <td>{this.props.data.info.test[4]}</td>
                                    <td>{this.props.data.info.final}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
        } else {
            return (
                <>
                   <div className="container">
                        <h6 className="text-center mt-5">Scoreboard</h6>
                    </div>
                    <div className="container text-center">
                        <table className="table min-w-full table-striped table-bordered mt-5">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>P1</th>
                                    <th>P2</th>
                                    <th>P3</th>
                                    <th>P4</th>
                                    <th>P5</th>
                                    <th>T1</th>
                                    <th>T2</th>
                                    <th>T3</th>
                                    <th>T4</th>
                                    <th>T5</th>
                                    <th>Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={13}><b>No data from the learner.</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
        }
    }
}