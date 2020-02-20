import React from "react";
import ReactDOM from "react-dom";
const Tudu = props => (
  <li>
    <input type="checkbox" onChange={props.onRene} checked={props.tudu.check} />
    <button onClick={props.onQuitar}>Delete</button>
    <span>{props.tudu.texto}</span>
  </li>
);

let id = 0;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tudus: []
    };
  }
  //toggletudu
  ranaRene(id) {
    this.setState({
      tudus: this.state.tudus.map(tudu => {
        if (tudu.id !== id) return tudu;
        return {
          id: tudu.id,
          texto: tudu.texto,
          check: !tudu.check
        };
      })
    });
  }
  addTudu() {
    const texto = prompt("TUDU text please!");
    this.setState({
      tudus: [...this.state.tudus, { id: id++, texto, check: false }]
    });
  }
  quitarTudu(id) {
    this.setState({
      tudus: this.state.tudus.filter(tudu => tudu.id !== id)
    });
  }
  render() {
    console.log(this.state.tudus.lenght);
    return (
      <div>
        <div>Tudu count: {this.state.tudus.lenght}</div>
        <div>
          Tudus Pendientes:{this.state.tudus.filter(tudu => !tudu.check).lenght}
        </div>
        <button onClick={() => this.addTudu()}> añadir tudu</button>
        <ul>
          
          {this.state.tudus.map(
          tudu => (
            <Tudu
              onQuitar={() => this.quitarTudu(tudu.id)}
              onRene={() => this.ranaRene(tudu.id)}
              tudu={tudu}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
