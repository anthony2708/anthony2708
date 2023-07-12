import React, { Component } from "react";
import Layout from "@theme/Layout";
import axios from "axios";
import styles from "../css/index.module.css";
import custom from "../css/YoutubeFeatures.module.css";
import { translate } from "@docusaurus/Translate";
import clsx from "clsx";

export default class Contact extends Component<{}, { content: string, name: string, email: string }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { content: "", name: "", email: "" };
    }

    handleChangeContent(event: { target: { value: any } }) {
        this.setState({ content: event.target.value });
    }

    handleChangeName(event: { target: { value: any } }) {
        this.setState({ name: event.target.value });
    }

    handleChangeEmail(event: { target: { value: any } }) {
        this.setState({ email: event.target.value });
    }

    async handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        try {
            const res = await axios.post('/api/contact',
                { data: { content: this.state.content, name: this.state.name, email: this.state.email } });
            alert(res.data);
        } catch (error) {
            alert(error.response.data);
        }
    }

    render() {
        return (
            <Layout wrapperClassName={styles.contact}
                title={translate({ id: 'contact.title', message: 'Liên hệ' })}
                description="Anthony Bùi Lê Tuấn Anh">
                <header>
                    <div className="container text--center padding-horiz--md">
                        <h1 className={clsx("hero__title", styles.contactText)}>Liên hệ</h1>
                        <p className={clsx("hero__subtitle", styles.contactText)}>Gửi thông tin liên hệ tại đây</p>
                    </div>
                </header>
                <main>
                    <div className="container padding-horiz--md">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                <input className={custom.url}
                                    type="text"
                                    placeholder="Nhập họ tên của bạn"
                                    name="name" value={this.state.name}
                                    onChange={this.handleChangeName.bind(this)} required />
                            </label>
                            <label>
                                <input className={custom.url}
                                    type="email"
                                    placeholder="Nhập địa chỉ email"
                                    name="email" value={this.state.email}
                                    onChange={this.handleChangeEmail.bind(this)} required />
                            </label>
                            <label>
                                <textarea className={custom.url}
                                    placeholder="Nhập nội dung góp ý (tối đa 255 ký tự)"
                                    name="content" value={this.state.content} maxLength={255}
                                    rows={17} cols={15}
                                    onChange={this.handleChangeContent.bind(this)} required></textarea>
                            </label>
                            <div className={styles.buttons}>
                                <input className="button button--primary button--lg" type="submit"
                                    value="📧 Gửi" />
                            </div>
                        </form>
                    </div>
                </main>
            </Layout >
        )
    }
}