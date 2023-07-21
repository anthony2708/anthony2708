import React, { Component } from "react";
import custom from "../css/YoutubeFeatures.module.css";

export default class ScoreboardFeatures extends Component<{ data: any, sbd: string }, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data.success == true && this.props.data.info != null) {
            let scoreData = Object.values(this.props.data.info);
            return (
                <>
                    <div>
                        <table className={custom.table_center}>
                            <thead>
                                <tr>
                                    <th>Số báo danh</th>
                                    <th>Toán</th>
                                    <th>Ngữ văn</th>
                                    <th>Vật lý</th>
                                    <th>Hóa học</th>
                                    <th>Sinh học</th>
                                    <th>Lịch sử</th>
                                    <th>Địa lý</th>
                                    <th>GDCD</th>
                                    <th>Ngoại ngữ</th>
                                    <th>Mã môn NN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>{scoreData[1].toString()}</b></td>
                                    <td>{scoreData[2].toString()}</td>
                                    <td>{scoreData[3].toString()}</td>
                                    <td>{scoreData[4].toString()}</td>
                                    <td>{scoreData[5].toString()}</td>
                                    <td>{scoreData[6].toString()}</td>
                                    <td>{scoreData[7].toString()}</td>
                                    <td>{scoreData[8].toString()}</td>
                                    <td>{scoreData[9].toString()}</td>
                                    <td>{scoreData[10].toString()}</td>
                                    <td>{scoreData[11].toString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
        }
        else
            return (
                <>
                    <div>
                        <table className={custom.table_center}>
                            <thead>
                                <tr>
                                    <th>Số báo danh</th>
                                    <th>Toán</th>
                                    <th>Ngữ văn</th>
                                    <th>Vật lý</th>
                                    <th>Hóa học</th>
                                    <th>Sinh học</th>
                                    <th>Lịch sử</th>
                                    <th>Địa lý</th>
                                    <th>GDCD</th>
                                    <th>Ngoại ngữ</th>
                                    <th>Mã môn NN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={12}><b>Không có dữ liệu điểm thi.</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
    }
}