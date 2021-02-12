import React from "react";
import {connect} from 'react-redux'
import { removeBasket } from "../store/actions";
import {Col, Row, Button} from 'antd'
import './style.css'

const Card = props => {


  const tatalPrices = props.card.reduce((total,item) => (total += item.price), 0)
  return (
    <div className='card'>
      <h3>Cəmi qiymet: &#8378;{tatalPrices.toFixed(2)}</h3>
        <Row gutter={[16, 16]} className="bookListContainer">
          {props.card.map(book =>(
          <Col span={6} className="book" key={book.id}>
            <img
              src={book.image}
              alt={book.name}   />
            <div className="imgHover">

            </div>
            <div className='bookDesc'>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: &#8378; {book.price}</p>
              <Button onClick={()=> props.removeBasket(book)}> Sil</Button>
          </div>
        </Col>
  
     ))}
       </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    card: state.card
  }
}

export default connect(mapStateToProps, {removeBasket})(Card);
