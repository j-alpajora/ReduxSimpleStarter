import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // Make sures all the reducers are binded

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of Booklist
  return {
    books: state.books
  }
}

// This function is the glue of react and redux
// Anything returned from this function will end up as props
// on the Booklist container
function mapDispatchToProps(dispath) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispath);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatched method, selectBook,
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
