import React from 'react'
import "./header.scss"
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
export default function header() {
  return (
    <div className='header'>
        <div className='headerName'>Rikkei_shop</div>

        <div className='headerSearch'>
            <input type="text" className='SearchInp'/>
            <FaSearch className='searchIcon'/>
            </div>

        <div className='headerNab'>
            <div className='headerCart'>
            <FaCartShopping />
                <div>Giỏ hàng</div>
            </div>
            <div>Đăng nhập</div>
            <div>Đăng ký</div>
        </div>
    </div>
  )
}
