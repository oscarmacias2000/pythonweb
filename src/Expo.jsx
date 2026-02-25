import Logo from "../src/assets/logos-main/logos-main/svg/logo-type-a.svg"
import QRCode from "qrcode"
import Footer from "../src/footer.jsx"
import { useRef, useEffect, useState } from "react"


export default function ExpoRender() {
    const canvasRef = useRef(null)
    const [url, setUrl] = useState("https://reactjs.org/")

    const id = document.getElementById("qrcode")
    useEffect(() => {
        const canvas = canvasRef.current
        QRCode.toCanvas(canvas, url, function (error) {
            if (error) console.error(error)
            console.log("success!")
        })
    }, [])

    return (
        <>
            <img src={Logo} alt="expo" width="100" height="100" className='cursor-pointer  hover:scale-125 hover:bg-black hover:rounded-full' />
            <div id="qrcode" style={{ fontSize: "50%" }}>
                <canvas ref={canvasRef}></canvas>
            </div>
            <button onClick={() => QRCode.toCanvas(canvasRef.current, url)}>Generar QR</button>
            <Footer />
        </>
    )
}