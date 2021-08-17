import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap/';

class MyFavoriteBooks extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
    }

  }

  componentDidMount = async () => {



    let url = `${process.env.REACT_APP_SERVER_URL}/book?userEmail=${this.state.userEmail}`;

    let responseData = await axios.get(url);

    await this.setState({
      userBooks: responseData.data,

    })
    console.log('Email : ' + this.state.userEmail);
    console.log('show state : ' + this.state.showBooks);
    console.log(this.state.userBooks);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>
        {
          this.state.showBooks &&
          this.state.userBooks.map((book, index) => {
            <Card className="book" style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={book.img} alt={book.name} />

                <Card.Text>
                  {book.description}
                </Card.Text>
                <Card.Text>
                  {book.status}
                </Card.Text>
              </Card.Body>
              {/* <Button variant="danger" onClick ={()=> this.deleteBook(index)}>Delete</Button> */}
            </Card>


          }
  
     

    )

  }
   </div>
  )
  }


  export default MyFavoriteBooks;
