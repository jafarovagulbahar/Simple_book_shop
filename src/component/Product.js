import React from "react";
import {connect} from 'react-redux'
import { addBasket } from "../store/actions";
import {Col, Row, Button} from 'antd'


const Products = props => {
  return (
    <div>
      <Row gutter={[16, 16]} className="bookListContainer">
         {props.bookList.map(book =>(
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
              <Button onClick={()=> props.addBasket(book)}>Add</Button>
        </div>
      </Col>
  
     ))}
       </Row>

    </div>
  );
};

const mapStateToProps = state =>{
  return {
    bookList:state.bookList,
    card:state.card
  }
}


export default connect(mapStateToProps, {addBasket})(Products);