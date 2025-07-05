import React from "react";
import { Component } from "react";
import axios from "axios";

export default class English extends Component<{}, {id: string, data: any, loading: boolean}> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            id: "",
            data: "",
            loading: false
        };
    }

    handleChange(event: {target: {value: any}}) {
        this.setState({id: event.target.value});
    }

    async handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        this.setState({ data: "loading", loading: true });
        try {
            const res = await axios.post('/api/score', { data: { id: this.state.id } });
            this.setState({ data: res.data, loading: false });
        } catch (error) {
            if (error instanceof Error) {
                this.setState({ data: error.message, loading: false });
            } else {
                this.setState({ data: String(error), loading: false });
            }
        }
    }
    
    render(){
        return (
            <>
        {/* Start of header */}
         <header>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    className="form-input w-full text-center mt-5"
                    type="text"
                    value={this.state.id}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Please enter your ID to check the score." 
                    maxLength={6} name="id" required
                />
                <div className="text-center">
                    <input className="btn btn-primary text-white py-2 mt-5" type="submit"
                                    value="🔍 Search" />
                </div>
                </form>
            </header>
        {/* End of header */}

        {/* Start of main content */}
            <main>
                <div className="container">
                    {this.state.loading && (
                        <div className="text-center mt-10">
                            <span className="loading loading-spinner loading-lg"></span>
                            <div>Loading...</div>
                        </div>
                    )}
                    {!this.state.loading && this.state.data && this.state.data !== "loading" && (
                        <div className="mt-5">
                            {/* Render your result here */}
                            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </main>
        </>
        );
    }
}
