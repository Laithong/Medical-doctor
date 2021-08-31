
import React from "react"
import "./footer.css"
import { Link } from "react-router-dom";
class Footer extends React.Component {
	render() {
		return (
                    <footer class="footer-distributed">
                    <div class="footer-left">
                        <h3>ຊັ້ນສູງການແພດ (ພຊສ)</h3>
                        <p class="footer-links">
                            <a href="#" class="link-1">ຄວາມເປັນມາ</a>                        
                            <a href="#">ປະຫວັດການສືກສາ</a>                    
                            <a href="#">ນັກສືກສາ</a>  
                            <a href="#">ເອກະສານຕ່າງໆ</a>                    
                        </p>
                        <p class="footer-company-name"> © 2021</p>
                    </div>
                    <div class="footer-center">
                        <div>
                            <h3>ຂໍ້ມູນຕິດຕໍ່</h3>
                        </div>
                        <div>
                            <p>20 55541477</p>
                        </div>
                        <div>
                            <p>20 54564835</p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <div class="footer-company-about">
                            <h3>ກຽວກັບ ຊັ້ນສູງການແພດ</h3>
                            <a>
                            ການແບ່ງອັດຕາສ່ວນແຕ່ລະໝວດວິຊາຕາມກິດຈະກ່າການຮຽນການສອນ
                            ນັກສຶກສາສາຍກົງ</a>
                        </div>
                    </div>
                </footer>
		);
	}
}

export default Footer;