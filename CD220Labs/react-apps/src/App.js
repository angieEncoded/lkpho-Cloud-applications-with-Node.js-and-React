import React from 'react';

const axios = require('axios').default;

class App extends React.Component {
  state = { eventList:[] }

  componentDidMount() {
    let url = "https://reststop.randomhouse.com/resources/authorevents/?start=0&max=3&expandLevel=1&isbn=0&authorid=0"
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
        let listOfEvents = resp.data.authorEvent;
        let listOfEventsAsArray = Object.entries(listOfEvents);
        let eventDetails = listOfEventsAsArray.map((eventDetial)=>{
          let eventListCollection = Object.entries(eventDetial[1])
          return <div>{eventListCollection[4][1]} on {eventListCollection[5][1]} at {eventListCollection[7][1]} in {eventListCollection[10][1]} - {eventListCollection[11][1]}</div>
        })
        console.log(eventDetails)
        this.setState({eventList:eventDetails})
      })
    .catch(err => {
        console.log(err.toString())
    });
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    let li_ctr = 0;
    return (
      <div style={colorStyle}>
        React Component
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Event</th>
              <th scope="col">Place</th>
            </tr>
          </thead>
          <tbody>
                {this.state.eventList.map(function(eventDetails){
                  console.log()
                    return (
                    <tr>
                        <td>{eventDetails.props.children[0]}</td>
                        <td>{eventDetails.props.children[2]}</td>
                        <td>{eventDetails.props.children[4]}</td>
                        <td>{eventDetails.props.children[6]}</td>
                        <td>{eventDetails.props.children[8]}</td>
                    </tr>
                    )
                    ;
                  })}


          </tbody>
        </table>


   
        </div>
    );
  }
}

export default App;
// Class component with an update button
// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = { counter:0 }

//   incrementCounter = ()=> {
//     this.setState({counter:this.state.counter+1});
//   }

//   render() {
//     const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
//     return (
//       <div style={colorStyle}>
//         React Component
//         <br /><br />
//         <button onClick={this.incrementCounter}>Click Me!</button>
//         <br /><br />
//         {this.state.counter}
//       </div>
//     );
//   }
// }

// export default App;




// Class component
// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const colorStyle = {
//     color:this.props.color,
//     fontSize:this.props.size+"px",
//     textDecoration:"underline"
//     }
//     return (
//       <div>
//         <div style={colorStyle}>
//         Hello World!
//         </div>
//       </div>
//     );
//   }
// }

// export default App;



// Functional component
// function App(props) {
//   const colorStyle = {
//     color:props.color,
//     fontSize:props.size+"px",
//     textDecoration:"underline"
//   }
//   return (
//     <div>
//       <div style={colorStyle}>
//       Hello World!
//       </div>
//     </div>
//   );
// }

// export default App;

