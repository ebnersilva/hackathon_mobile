import React, { Component } from 'react';
import createNavigator from "./routes";
import NavigationService from "./services/navigation";

class App extends Component {

  // Registro do arquivo de rotas
  registerService = ref => {
    NavigationService.setTopLevelNavigator(ref);
  };

  render() {
    let initialRoute = "SignIn";
    const Routes = createNavigator(initialRoute);

    return (
      <Routes ref={this.registerService} />
    )
  }
}

export default App;
