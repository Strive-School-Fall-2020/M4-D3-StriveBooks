import React from "react";
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  fantasy,
  horror,
  history,
  romance,
  scifi,
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: books.fantasy,
      categorySelected: "fantasy",
    };
  }

  handleDropdownChange = (category) => {
    this.setState({
      books: books[category].slice(0, 12),
      categorySelected: category,
    });
  };

  handleSearchQuery = (searchQuery) => {
    let category = this.state.categorySelected;

    if (searchQuery) {
      let filteredBooks = books[category].filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 12) });
    } else {
      this.setState({ books: books[category].slice(0, 12) });
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.jumboTitle}</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Container>
          <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.categorySelected}
            >
              {bookCategories.map((category, index) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={`dropdown-category-${index}`}
                    onClick={() => this.handleDropdownChange(category)}
                  >
                    {category}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <FormControl
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Row>
            {this.state.books ? (
              this.state.books.map((book) => {
                return (
                  <Col xs={6} key={book.asin}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={book.img} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>€{book.price}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div> nothing here </div>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
