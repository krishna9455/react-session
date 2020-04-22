import React, {Component} from 'react';
import Todos from "./Todos";

class App extends Component {
/*communication karane ke liye ham props ka used karte hai one component to onther components*/
  state = {
      firsName: 'vijayv',
      lastName: 'shukla',
      items:[
          {name: 'rupesh',address:'chitarkoot',edacation:'MCA',currentAddress:'newAskonagar',currentCompany:'Haodrabad'},
          {name: 'manoj',address:'Noida',edacation:'',currentAddress:'Noida',currentCompany:'NIC'},
          {name: 'kamesh',address:'Kausambi',edacation:'Diploma',currentAddress:'NewDelhi',currentCompany:'noida Elecronic'},
          {name: 'amit chauhan',address:'Haryana',edacation:'BTech',currentAddress:'Gurgaon',currentCompany:'Oodles'},
          {name: 'krishna',address:'chitarkoot',edacation:'MCA',currentAddress:'Delhi',currentCompany:'Nexthoughts'},
      ]
    }

    render() {
        return (
            <div>
                this is the friest comonents
                created By:{this.state.firsName}  {this.state.lastName}
                <Todos todos ={this.state.items}/>
            </div>
        );
    }
}

export default App;
