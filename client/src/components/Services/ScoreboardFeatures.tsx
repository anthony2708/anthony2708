import { Component } from "react";
import custom from "../../css/YoutubeFeatures.module.css";
import Translate from "@docusaurus/Translate";

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
                                    <th><Translate id="scoreboard.id">Số báo danh</Translate></th>
                                    <th><Translate id="scoreboard.math">Toán</Translate></th>
                                    <th><Translate id="scoreboard.literature">Ngữ văn</Translate></th>
                                    <th><Translate id="scoreboard.physics">Vật lý</Translate></th>
                                    <th><Translate id="scoreboard.chemistry">Hóa học</Translate></th>
                                    <th><Translate id="scoreboard.biology">Sinh học</Translate></th>
                                    <th><Translate id="scoreboard.history">Lịch sử</Translate></th>
                                    <th><Translate id="scoreboard.geography">Địa lý</Translate></th>
                                    <th><Translate id="scoreboard.civic">GDCD</Translate></th>
                                    <th><Translate id="scoreboard.foreign">Ngoại ngữ</Translate></th>
                                    <th><Translate id="scoreboard.langcode">Mã môn NN</Translate></th>
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
                                    <th><Translate id="scoreboard.id">Số báo danh</Translate></th>
                                    <th><Translate id="scoreboard.math">Toán</Translate></th>
                                    <th><Translate id="scoreboard.literature">Ngữ văn</Translate></th>
                                    <th><Translate id="scoreboard.physics">Vật lý</Translate></th>
                                    <th><Translate id="scoreboard.chemistry">Hóa học</Translate></th>
                                    <th><Translate id="scoreboard.biology">Sinh học</Translate></th>
                                    <th><Translate id="scoreboard.history">Lịch sử</Translate></th>
                                    <th><Translate id="scoreboard.geography">Địa lý</Translate></th>
                                    <th><Translate id="scoreboard.civic">GDCD</Translate></th>
                                    <th><Translate id="scoreboard.foreign">Ngoại ngữ</Translate></th>
                                    <th><Translate id="scoreboard.langcode">Mã môn NN</Translate></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={12}><b>
                                        <Translate id="scoreboard.nodata">
                                            Không có dữ liệu điểm thi
                                        </Translate>
                                    </b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            );
    }
}