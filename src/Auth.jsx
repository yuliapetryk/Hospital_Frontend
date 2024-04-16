import React from 'react'; // Додано імпорт React


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { some_str: [] }; // Initialize as an empty array
    fetch("http://localhost:3030/hospital/hospital")
    .then(response => response.json())
    .then(result => {
      this.setState({
        some_str: result
      });
    })
    .catch(error => console.error('Error:', error)); // Move catch inside the fetch chain
  }

  render() {
    return (
    
      <div>
        {this.state.some_str.length > 0 ? (
      this.state.some_str.map(n => <div>{n}</div>)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Auth;
