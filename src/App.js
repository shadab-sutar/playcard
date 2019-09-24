import React, { Component } from "react";
import "./App.css";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ArrowNext from "@material-ui/icons/ArrowForwardIos";
import Fab from "@material-ui/core/Fab";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextCounter: 0,
      previousCounter: 0,
      data: [
        {
          imagePath: require("./assets/1.jpg"),
          question: "Can you guess the name of this brigde ?",
          author: "By Ashish",
          answer: "This is Golden gate bridge located in USA."
        },
        {
          imagePath: require("./assets/2.jpg"),
          question: "Guess the name?",
          author: "By Ashish",
          answer: "Tower of Paris"
        },
        {
          imagePath: require("./assets/1.jpg"),
          question: "When was this built?",
          author: "By Ashish",
          answer: "1920"
        },
        {
          imagePath: require("./assets/2.jpg"),
          question: "Where is this located?",
          author: "By Ashish",
          answer: "Paris"
        }
      ]
    };
  }

  nextImage = e => {
    debugger;
    let counter = this.state.nextCounter;
    let dataLength = this.state.data.length;
    if (counter + 1 === dataLength) {
      this.setState({ nextCounter: 0 });
    } else {
      this.setState({ nextCounter: counter + 1 });
    }
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.state.data[this.state.nextCounter].question}
            subheader={this.state.data[this.state.nextCounter].author}
            style={{ height: "85px" }}
          />
          <CardMedia
            image={this.state.data[this.state.nextCounter].imagePath}
            title="Paella dish"
            style={{ height: 150, paddingTop: "56.25%" }}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.data[this.state.nextCounter].answer}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Fab
              color="primary"
              aria-label="add"
              style={{ marginLeft: "auto" }}
              onClick={this.nextImage.bind(this)}
            >
              <ArrowNext />
            </Fab>
          </CardActions>
        </Card>
        <BottomNavigation
          showLabels
          style={{ backgroundColor: "#3e51b5", marginTop: "10px" }}
        >
          <BottomNavigationAction
            label="Recents"
            icon={<RestoreIcon />}
            style={{ color: "#fff" }}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon />}
            style={{ color: "#fff" }}
          />
          <BottomNavigationAction
            label="Share"
            icon={<ShareIcon />}
            style={{ color: "#fff" }}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default App;
