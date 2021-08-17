import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { Card } from 'react-bootstrap/';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      showBooks: false,
      userEmail: '',
    }

  }

  componentDidMount = async () => {

    const { user } = this.props.auth0;

    await this.setState({
      userEmail: `${user.email}`
    })

    let url = `${process.env.REACT_APP_LOCALHOST}/book?userEmail=${this.state.userEmail}`;

    let responseData = await axios.get(url);

    await this.setState({
      userBooks: responseData.data,
      showBooks: true,
    })
    console.log('Email : ' + this.state.userEmail);
    console.log('show state : ' + this.state.showBooks);
    console.log(this.state.userBooks);
  }


  
  render() {
    return (

      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        {
          this.state.showBooks &&
          this.state.books.map((book, index) => {


            return (

              <Card className="book"  >

                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>


                  <Card.Text>
                    {book.description}
                  </Card.Text>
                  <Card.Text>
                    {book.status}
                  </Card.Text>
                </Card.Body>

              </Card>
            )

          })

        }




      </Jumbotron>
    )
  }
}
export default withAuth0(MyFavoriteBooks);

