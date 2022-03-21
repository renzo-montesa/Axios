import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  updateInput = input => {
    this.setState({ input });
  };
  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <div>
          <div className="mb-3">
            <input className="form-control"
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            />
        </div>
        <button className="btn btn-primary add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}
export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;