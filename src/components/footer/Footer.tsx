import React from 'react'
import './footer.scss'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
        <div>
            <div className='title'>Chăm sóc khách hàng</div>
                <div className='font'>
                    <li>Trung tâm trợ giúp</li>
                    <li>Hướng dẫn mua hàng</li>
                </div>
        </div>

        <div>
            <div className='title'>Giới thiệu</div>
            <div className='font'>
                <li>Điều khoản</li>
                <li>Chính sách bảo mật</li>
                <li>Tuyển dụng</li>
            </div>
        </div>

        <div>
            <div className='title'>Danh mục sản phẩm</div>
            <div className='font'>
                <li>Thời trang</li>
                <li>Đồ tiêu dùng</li>
                <li>Thiết bị điện tử</li>
                <li>Sách</li>
            </div>
        </div>

        <div>
            <div className='title'>Theo dõi chúng tôi </div>
            <div className='font'>
                <li><FaFacebook />Facebook</li>
                <li><FaInstagram />Instagram</li>
                <li><FaTwitter /></li>
            </div>
        </div>

        <div>
            <div className='title'>Đội ngũ phát triển</div>
            <div style={{color:"red",paddingTop:"10px"}}>Trịnh Quốc Hai</div>
        </div>
    </div>
  )
}
