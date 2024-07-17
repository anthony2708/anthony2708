import { Component } from "react";
import custom from "../../css/YoutubeFeatures.module.css";
import Translate from "@docusaurus/Translate";

export default class ScoreboardFeatures extends Component<{ data: any, sbd: string }, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data.total != 0 && this.props.data.data != null) {
            let scoreData = Object.values(this.props.data.data);
               {
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
                                            <td><b>{scoreData[0][0]["SBD"]}</b></td>
                                            <td>{scoreData[0][0]["TOAN"] < 0 ? "" : scoreData[0][0]["TOAN"]}</td>
                                            <td>{scoreData[0][0]["VAN"] < 0 ? "" : scoreData[0][0]["VAN"]}</td>
                                            <td>{scoreData[0][0]["LI"] < 0 ? "" : scoreData[0][0]["LI"]}</td>
                                            <td>{scoreData[0][0]["HOA"] < 0 ? "" : scoreData[0][0]["HOA"]}</td>
                                            <td>{scoreData[0][0]["SINH"] < 0 ? "" : scoreData[0][0]["SINH"]}</td>
                                            <td>{scoreData[0][0]["SU"] < 0 ? "" : scoreData[0][0]["SU"]}</td>
                                            <td>{scoreData[0][0]["DIA"] < 0 ? "" : scoreData[0][0]["DIA"]}</td>
                                            <td>{scoreData[0][0]["GIAO_DUC_CONG_DAN"] < 0 ? "" : scoreData[0][0]["GIAO_DUC_CONG_DAN"]}</td>
                                            <td>{scoreData[0][0]["NGOAI_NGU"] < 0 ? "" : scoreData[0][0]["NGOAI_NGU"]}</td>
                                            <td>{scoreData[0][0]["MA_MON_NGOAI_NGU"] == "" ? "" : scoreData[0][0]["MA_MON_NGOAI_NGU"]}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    );
                }
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