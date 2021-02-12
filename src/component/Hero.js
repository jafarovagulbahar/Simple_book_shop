import React from 'react'
import { Col, Carousel, Row, Button } from 'antd';
import {Link} from 'react-router-dom'
import {ShoppingCartOutlined, MailTwoTone, PhoneTwoTone} from '@ant-design/icons';
import './style.css'
export default function Hero() {
    return (
        <React.Fragment>
          <Row>

          </Row>
          <Row  className='header-menu'>
            <Col span={9}  ><div className='logo'><Link to='/'><img src='./assets/img/logo.png'  alt='Logo'/></Link></div></Col>
            <Col span={3} ><div><MailTwoTone /><span> ( + 994 ) 51 000 00 00</span></div></Col>
            <Col span={3} ><div><PhoneTwoTone /><span> demo@gmail.com</span></div></Col>
            <Col span={3} className='basket' ><div ><Link to="/card"><ShoppingCartOutlined /></Link></div></Col>
          </Row>
          
      
    <Carousel autoplay className='carouselStyle'>
    <div>
      <img src='https://www.hersheypartnership.com/wp-content/uploads/2020/01/book_banner1.jpg' alt='banner'/>   
       <div className='main-desc'>
         <div className='content'>
         <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h3>
         <Button>Viwe More</Button>
         </div>
       </div>
    </div>
    <div>
      <img src='https://hamptonprep.org.uk/media/banner-books-.jpg' alt='banner'/>
      <div className='main-desc'>
         <div className='content'>
         <h3>Lorem Ipsum is simpscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h3>
         <Button>Viwe More</Button>
         </div>
       </div>
    </div>
    <div>
     <img src='https://en.ricest.ac.ir/wp-content/uploads/2018/01/Book-Banner.jpg' alt='banner'/>
     <div className='main-desc'>
         <div className='content'>
         <h3>Lorem Ipsuprinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h3>
         <Button>Viwe More</Button>
         </div>
       </div>
    </div>
  </Carousel>
  </React.Fragment>
    )
}
