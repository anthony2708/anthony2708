import "../css/home/404.css"

export default function NotFound() {
    return (
        <div className="not_found">
            <h2 className="not_found_h2">404</h2>
            <h1 className="not_found_h1">OOPS!</h1>
            <p className="not_found_p">
                Nội dung không tồn tại trên trang này hoặc chỉ phục vụ trong lãnh thổ
                Việt Nam. Vui lòng kiểm tra lại đường dẫn và truy cập nội dung khác. Xin
                trân trọng cảm ơn.
            </p>

            <p className="not_found_p">
                This content is not found on the website or is only available in
                Vietnam. Please check the URL and retry with other pages. Thank you.
            </p>

            <a className="not_found_a" href="https://services.builetuananh.name.vn">Home</a>
        </div>
    )
}