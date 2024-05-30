import React from 'react'
import './main.scss'
import { CiHeart } from 'react-icons/ci'
import { FaListUl } from 'react-icons/fa'
import { IoMdArrowDropright } from 'react-icons/io'
export default function Main() {
  return (
    <div className='main'>
            <div className='category'>
        <div className='categoryTitle'> <FaListUl />Danh mục sản phẩm</div>

        <div className='listCategory'>
            <div className='pointer'>
                <li className='itemNow'><IoMdArrowDropright /></li>
                <li hidden><IoMdArrowDropright /></li>
                <li hidden><IoMdArrowDropright /></li>
                <li hidden><IoMdArrowDropright /></li>
            </div>
        <div className='listItem'>
            <li className='itemNow'>Tất cả sản phẩm</li>
            <li>Thiết bị điện tử</li>
            <li>Sách</li>
            <li>Đồ tiêu dùng</li>
        </div>
        </div>
    </div>

        <div className='listProduct'>

        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone6.jpg" alt="" />
            <div className='productName'>Iphone 6</div>
            <div className='price'>29.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>30 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone6plus.jpg" alt="" />
            <div className='productName'>Iphone 6 Plus</div>
            <div className='price'>3.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>500 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone7.jpg" alt="" />
            <div className='productName'>Iphone 7</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>500 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone7plus.jpg" alt="" />
            <div className='productName'>Iphone 7 Plus</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone8.jpg" alt="" />
            <div className='productName'>Iphone 8</div>
            <div className='price'>25.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone8plus.jpg" alt="" />
            <div className='productName'>Iphone 8 Plus</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphonex.jpg" alt="" />
            <div className='productName'>Iphone X</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphonexr.jpg" alt="" />
            <div className='productName'>Iphone Xr</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphonexs.jpg" alt="" />
            <div className='productName'>Iphone Xs</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphonexsmax.jpg" alt="" />
            <div className='productName'>Iphone Xs Max</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone12pro.jpg" alt="" />
            <div className='productName'>Iphone 12 Pro</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>48 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Thietbidientu/iphone12promax.jpg" alt="" />
            <div className='productName'>Iphone 12 Pro Max</div>
            <div className='price'>35.000.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>30 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/HoangTuBe.jpg" alt="" />
            <div className='productName'>Hoàng tử bé</div>
            <div className='price'>53.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany' hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>6981 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/MuonKiepNhanSinh.jpg" alt="" />
            <div className='productName'>Muôn kiếp nhân sinh</div>
            <div className='price'>109.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany' hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>4169 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/NhaGiaKim.jpg" alt="" />
            <div className='productName'>Nhà giả kim</div>
            <div className='price'>55.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany' hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>9654 đã bán</div>
                    <div className='footaddress'>Hồ Chí Minh</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/ToiTuHoc.jpg" alt="" />
            <div className='productName'>Tôi tự học</div>
            <div className='price'>32.900đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany' hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>2456 đã bán</div>
                    <div className='footaddress'>Đà Nẵng</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/DacNhanTam.jpg" alt="" />
            <div className='productName'>Đắc Nhân tâm</div>
            <div className='price'>56.100đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany' hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>16498 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/MatBiec.jpg" alt="" />
            <div className='productName'>Mắt Biếc</div>
            <div className='price'>76.400đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'  hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>9543 đã bán</div>
                    <div className='footaddress'>Nghệ An</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/KhongGiaDinh.jpg" alt="" />
            <div className='productName'>Không gia đình</div>
            <div className='price'>74.500đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany' hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>12483 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Sach/YourName.jpg" alt="" />
            <div className='productName'>Your name</div>
            <div className='price'>45.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany' hidden>Apple</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>5347 đã bán</div>
                    <div className='footaddress'>Hồ Chí Minh</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/quan1.jpg" alt="" />
            <div className='productName'>Quần nỉ họa tiết</div>
            <div className='price'>2.299.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>246 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/quan2.jpg" alt="" />
            <div className='productName'>Quần nỉ đen sọc trắng</div>
            <div className='price'>1.759.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>694 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/ao1.jpg" alt="" />
            <div className='productName'>Áo phông</div>
            <div className='price'>1.479.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>614 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/quan3.jpg" alt="" />
            <div className='productName'>Quẩn nỉ Jordan</div>
            <div className='price'>1.919.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>537 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/ao4.jpg" alt="" />
            <div className='productName'>Áo phông</div>
            <div className='price'>819.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>769 đã bán</div>
                    <div className='footaddress'>Hồ Chí Minh</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/quan6.jpg" alt="" />
            <div className='productName'>Quần đùi</div>
            <div className='price'>659.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>426 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/quan5.jpg" alt="" />
            <div className='productName'>Quẩn nỉ xám</div>
            <div className='price'>1.019.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>418 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/ao3.jpg" alt="" />
            <div className='productName'>Áo khoác</div>
            <div className='price'>1.739.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>849 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/ThoiTrang/quan7.jpg" alt="" />
            <div className='productName'>Quần đùi</div>
            <div className='price'>659.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'>Nike</div>
                </div>
                <div className='footRight'>
                    <div className='sold'>30 đã bán</div>
                    <div className='footaddress'>Hà Nội</div>
                </div>
            </div>
        </div>
        <div className='product'>
            <img className='productImg' src="./public/image/product/Dotieudung/comfort.jpg" alt="" />
            <div className='productName'>Nước xả vải Comfort</div>
            <div className='price'>145.000đ</div>
            <div className='foot'>
                <div className='footLeft'>
                    <CiHeart className='footIcon'/>
                    <div className='footCompany'> </div>
                </div>
                <div className='footRight'>
                    <div className='sold'>30 đã bán</div>
                    <div className='footaddress'>Hồ Chí Minh</div>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}
