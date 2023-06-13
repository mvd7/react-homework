import "./CharactersPage.css";
import { Component } from "react";
import Character from "../Character/Character";

class CharactersPage extends Component {
  URL = "https://swapi.dev/api/people";

  constructor() {
    super();

    this.state = {
      characters: [],
    };
  }

  handleFetchCharacters = async () => {
    const response = await fetch(this.URL);
    const result = await response.json();

    this.setState({
      characters: result.results,
    });

    console.log(this.state.characters);
  };

  componentDidMount() {
    this.handleFetchCharacters();
  }

  render() {
    return (
      <>
        {this.state.characters.length === 0 ? (
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        ) : (
          <div className="container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
              width={300}
            />
            <div className="char-container">
              {this.state.characters.map((character, index) => (
                <Character key={index} character={character} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default CharactersPage;
