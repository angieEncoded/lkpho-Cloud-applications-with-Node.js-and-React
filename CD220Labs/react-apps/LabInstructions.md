# Hands-on Lab - React Application (1 hour 15 mins)

**Objective for Exercise:** <br>
By the end of this lab, create HTML Pages with React Components and React applications.

**Prerequisites** <br>
Before you start, be sure that you meet these prerequisites:

*   Basic knowledge of JavaScript
*   Basic knowledge of HTML

# Set-up : Check for the cloned files

1.  Open a terminal window by using the menu in the editor: Terminal > New Terminal.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/new-terminal.png" style="align:center" width="75%">

2.  Change to your project folder.

```
cd /home/project
```

{: codeblock}

3.  Check if you have the folder **lkpho-Cloud-applications-with-Node.js-and-React**

```
ls /home/project
```

{: codeblock}

If you do, you can skip to step 5.

4.  Clone the git repository that contains the artifacts needed for this lab, if it doesn't already exist.

```
git clone https://github.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React.git
```

{: codeblock}

5.  Change to the directory for this lab.

```
cd lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/
```

{: codeblock}

6.  List the contents of `react_pages`. This should contain HTML page(s) which you can download and view in your local system.

```
ls react_pages
```

{: codeblock}

7.  List the contents of `todoapp`. This should contain a directory structure with a pre-installed react app.

```
ls todoapp
```

{: codeblock}

8.  List the contents of `react-apps`. This should contain a directory structure with a pre-installed react app which you will make changes in to apply what you have learned.

```
ls react-apps
```

{: codeblock}

These are the two directories you will be using for this lab.

# Exercise 1: Simple HTML with React

1.  In the file explorer goto `lkpho-Cloud-applications-with-Node.js-and-React`->`CD220Labs`->`react_pages` and view `firstReactPage.html`. The contents will appear as below. It is a HTML page where the clock is displayed through a react component.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_firstReactPageSource.png" width="75%">

2.  Right-click on `firstReactPage.html` and click on `Download`. This will download a copy of this file in your local system.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_firstReactPageDownload.png" width="50%">

3.  Now open the downloaded file in your local browser. The page will appear as below.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_firstReactPageBrowser.png" width="75%">

# Exercise 2: First React Application

The `todoapp` is a react app that has been created for you using `npx create-react-app todoapp` command. In the files explorer view `todoapp` directory. It would appear like this.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_todoapp.png" width="50%">

2.  In the terminal window run the following commands on after the other.

```
cd todoapp
npm install
npm start
```

{: codeblock}

The first command changes to the `todoapp` directory. Second command installs the files required for the React app in your lab environment and the third one starts the server.

You will see this output indicating that the server is running.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_todoapprunning.png" width="75%">

3.  To verify the same with browser window, click on `Launch Application` in the menu.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/launch-application.png" width="75%">

A window will pop up as below for you to enter the port number. Enter the port number the server is running on, which is `3000` in it.

The todoapp UI will appear on the browser as seen in the image below.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_todoappbrowser.png" width="75%">

4.  To stop the server, go to the main command window and press Ctrl+c to stop the server.

# Exercise 3: Function Components, Class Components, Properties and States

The `react-apps` is a react app that has been created for you using `npx create-react-app react-apps` command. In the files explorer view `react-apps` directory. It would appear like this.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_reactapps.png" width="50%">

2.  In the terminal window run the following commands on after the other.

```
cd /home/project/lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/react-apps
npm install
npm start
```

{: codeblock}

The first command changes to the `react-apps` directory. Second command installs the files required for the React app in your lab environment and the third one starts the server.

You will see this output indicating that the server is running.

3.  To see what UI this React app renders, click on `Launch Application` in the menu.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/launch-application.png" width="75%">

A window will pop up as below for you to enter the port number. Enter the port number the server is running on, which is `3000` in it.

The react-apps UI will appear on the browser. All the styling has been removed and all you should see is **Hello World** written on the page.

4.  View the content on App.js under `react-apps`->`src` in the file explorer. It will appear as below.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_appjsvanilla.png" width="75%">

5.  Now let's start adding a component to the page. *When the server is running, any change made to the files is automatically picked up by the server.*

As we see the code in App.js is as below.

```js
function App() {
  return (
    <div >
      Hello World!
    </div>
  );
}

export default App;
```

It is a function component. Let's make changes to the code to accept the color as props.

6.  Replace the content of App.js with the following code.

```js
function App(props) {
  const colorStyle = {
    color:props.color,
    fontSize:props.size+"px"
  }
  return (
    <div>
      <div style={colorStyle}>
      Hello World!
      </div>
    </div>
  );
}

export default App;

```

{: codeblock}

We have made changes to App.js to make it a component which will take some style setting as props. We now have to set the properties.

7.  To set the props of the App component, we will make changes in `index.js`. Replace the content of `index.js` with the code below.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App color="green" size="20"/>
  </React.StrictMode>,
  document.getElementById('root')
);
```

{: codeblock}

As you see we are passing the color and size.

8.  Now when you refresh the broswer rendering, it will be rerendered with the style.

### Task -

Try to add other styling to the components.

9.  Now let's change the same to a class component instead of function component. Replace the App.js code with the following code.

```js
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const colorStyle = {
    color:this.props.color,
    fontSize:this.props.size+"px"
    }
    return (
      <div>
        <div style={colorStyle}>
        Hello World!
        </div>
      </div>
    );
  }
}

export default App;

```

10. Refresh the page that was rendered earlier to see how different it is. You will observe that nothing has changed. All that we have done is replaced the function component with class component. So the props can be passed to both function and class components.

11. Let's set the props from outside and maintain the state of the component inside. The state we will maintain is the number of times the button was clicked. Replace the code in App.js with the following code and save it. Refresh the page that is rendered.

```js
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { counter:0 }

  incrementCounter = ()=> {
    this.setState({counter:this.state.counter+1});
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
        React Component
        <br /><br />
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br /><br />
        {this.state.counter}
      </div>
    );
  }
}

export default App;

```

{: codeblock}

You will see that the counter state is being refreshed everytime the the button is clicked.

12. To stop the server, go to the main command window and press Ctrl+c to stop the server.

# Exercise 4: Class Components - componentDidMount

1.  Let's make change in App.js to send a API request to a remote server when the component mounts and change the state when the remote server responds.

Replace the code in App.js, that we used in the previous exercise.

```js
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
            <ul>
                {this.state.eventList.map(function(eventDetails){
                    return <li key={li_ctr++}>{eventDetails}</li>;
                  })}
            </ul>      
        </div>
    );
  }
}

export default App;

```

{: codeblock}

As you can see initially the state of the component `eventList` is an empty list. When the component mounts, the request is sent through axios asynchronously and then depending on the list returned, the setState is invoked.

2.  This code requires the axios module to run. Run the following command to install it.

`npm install --save axios`

3.  Ensure that you are in the `react-apps` directory. Run the following command to see which directory you are currently in.

`pwd`

{: codeblock}

4.  If you are not in `/home/project/lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/react-apps`, run the following command to change to that directory. Else skip to step 5.

`cd /home/project/lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/react-apps`
{: codeblock}

5.  `npm start` to start the react app and then click on `Launch Application` in the menu and connect to port 3000.

The output would look like this.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_eventsoutput.png" width="75%">

### Task -

Modify the code in App.js to use the same URL and to render the event details in table format as below.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module4_ES6_React/images/screenshot_reactEventList.png" width="75%">

<details><summary>Click here for the solution</summary>

```js
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
          return <tr><td style={{color: "red",border: "1px solid black"}}>{eventListCollection[4][1]} </td>
          <td style={{color: "red",border: "1px solid black"}}> {eventListCollection[5][1]} </td>
          <td style={{color: "red",border: "1px solid black"}}> {eventListCollection[7][1]}</td>
          <td style={{color: "red",border: "1px solid black"}}> {eventListCollection[10][1]}</td>
          <td style={{color: "red",border: "1px solid black"}}>{eventListCollection[11][1]}</td></tr>
        })
        this.setState({eventList:<table style={{border: "1px solid black"}}><tbody>{eventDetails}</tbody></table>})
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
        Events List
        <br/>
            {
            this.state.eventList
            }
        </div>
    );
  }
}

export default App;

```

{: codeblock}

</details>

### Congratulations! You have completed the lab for the fourth module of this course.

## Summary

Now that you have have learned how to use React application, you are all set to create a fullstack Capstone project combining all the learning in this course.

## Author(s)

<h4> Lavanya<h4/>

## Changelog

| Date       | Version | Changed by | Change Description                                          |
| ---------- | ------- | ---------- | ----------------------------------------------------------- |
| 2021-01-18 | 1.1     | Lavanya    | Changed the lab exercise as the remote link had some issues |
| 2020-11-27 | 1.0     | Lavanya    | Initial version created based videos                        |