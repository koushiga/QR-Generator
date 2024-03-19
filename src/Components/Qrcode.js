import { useState } from 'react';
import './Qrcode.css';

const Qrcode=()=>{
    const[img,setImg]=useState("");
    const[loading,setLoading]=useState(false);
    const [qrcode,setQrcode]=useState("https://koushi/");

    async function generate(){
        setLoading(true)
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`;
            setImg(url)
        }catch(error){
            console.error("error getting QRcode",error)
        }finally{
            setLoading(false)
        }
    }

    return(
        <div className='container'>
            <h1>QR CODE GENERATOR</h1>
            {loading && <p>Please Wait...</p>}
            {img && <img src={img} alt="" className='qr-img'/>}
            <div>
                <label htmlFor='data' className='input-label'>
                    Data for QR Code:
                </label>
                <input type='text' value={qrcode} onChange={(e)=>setQrcode(e.target.value)} id='data' placeholder='Enter data for QR Code'/>
                <button className='generate-btn' onClick={generate} disabled={loading}>Generate QR Code</button>
            </div>
        </div>
    )
}

export default Qrcode;