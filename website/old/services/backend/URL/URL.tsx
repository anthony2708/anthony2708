import React from "react";
import { Component } from "react";
import axios from "axios";
import Shortener from "./Shortener";
// import dotenv from "dotenv";

// dotenv.config();
export default class URL extends Component<{}, { url: string, data: any, loading: boolean }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { url: "", data: "", loading: false };
    }

    handleChange(event: { target: { value: any } }) {
        this.setState({ url: event.target.value });
    }

    async handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        this.setState({ data: "loading", loading: true });
        try {
            const backend = import.meta.env.PUBLIC_BACKEND_URL;
            const res = await axios.post(`${backend}/url`, { 
                data: { 
                    url: this.state.url 
                }},{
                headers: {
                    'Content-Type': 'application/json',
                },});
            this.setState({ data: res.data, loading: false });
        } catch (error) {
            if (error instanceof Error) {
                this.setState({ data: error.message, loading: false });
            } else {
                this.setState({ data: String(error), loading: false });
            }
        }
    }
    render() {
        return (
           <>
            {/* Start of header */}
                <header>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input
                                className="form-input w-full text-center mt-5"
                                type="url"
                                value={this.state.url}
                                onChange={this.handleChange.bind(this)}
                                placeholder="Please enter your URL to shorten."
                                required
                            />
                             <div className="text-center">
                                <input className="btn btn-primary text-white py-2 mt-5" type="submit"
                                    value="🔍 Search" />
                            </div>
                        </form>
                </header>
                {/* End of Header */}

                { /* Start of main content */ }
                <main>
                    <div className="container">
                        {this.state.loading && (
                            <div className="text-center mt-10">
                                <span className="loading loading-spinner loading-lg"></span>
                                <div>Loading...</div>
                            </div>
                        )}
                        {!this.state.loading && this.state.data && this.state.data !== "loading" && (
                            <div className="container">
                                {/* Render your result here */}
                                <div className="text-center">
                                    <Shortener url={this.state.url} data={this.state.data} />
                                </div>
                            </div>
                        )}
                    </div>
                </main>
           </>
        );
    }
}