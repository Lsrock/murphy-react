import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

class Murphys extends React.Component {

  render() {
    return (
        <Container textAlign="center">

        </Container>
  );
  }
}

class middle extends React.Component{
  render(){
    const gridStyle = {height: "500px"};
    return(
        <div className="murphys-background">
          <Grid container verticalAlign="middle" style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.columns>
                <img src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"  alt={"logo"}/>
              </Grid.columns>
              <Grid.columns>
                <p>A traditional downtown saloon and eatery located in the honolulu financial district, just one block off the waterfront, Murphy's has been a haven for mariners, busy men and locals since 1891.</p>
              </Grid.columns>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));