import React, { Component } from "react";

export default class Shortener extends Component<{ url: string, data: any }, {}>  {
    constructor(props: { url: string; data: any; }) {
        super(props);
    }

    render() {
        if (this.props.data.status == 200)
            return (
                <>
                    <h3 className="text-center mt-5">Địa chỉ rút gọn: <a href={this.props.data.message}>{this.props.data.message}</a></h3>
                </>
            );
        else
            return (
                <>
                    <h1 className="text-center mt-5">{this.props.data.status}</h1>
                    <h3 className="text-center mt-5">{this.props.data.message}</h3>
                    <h3 className="text-center mt-5">{this.props.data.english}</h3>
                </>
            );
    }
}