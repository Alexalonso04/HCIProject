import React, { useState } from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Menu,
  Grid,
  Button,
  Icon,
  Header,
  Input,
  Container
} from "semantic-ui-react";
import CardList from "./Components/CardList";
import UserModal from "./Components/UserModal";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  const userList = [
    {
      name: "Alejandro Alonso",
      games: ["League of Legends", "Dota", "Call of Duty"],
      genres: ["Action", "Action-Adventure", "Adventure", "Roleplaying"],
      socialMedia: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/feed/"
        }
      ]
    },
    {
      name: "John Mosaic",
      games: ["Legends of Runeterra", "Call of Duty"],
      genres: ["Adventure", "Roleplaying"],
      socialMedia: [
        {
          name: "steam",
          url: "https://steamcommunity.com/profiles/76561198126720232/"
        }
      ]
    },
    {
      name: "Mackain Josh",
      games: ["Warzone", "Call of Duty", "Call of Duty Black Ops"],
      genres: ["FPS"],
      socialMedia: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/feed/"
        }
      ]
    }
  ];

  const user = {
    name: "Alejandro Alonso",
    games: [
      "League of Legends",
      "Legends of Runeterra",
      "League of Legends: Wild Rift"
    ],
    genres: ["Action", "Action-Adventure", "Adventure", "Roleplaying"],
    socialMedia: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/feed/"
      },
      {
        name: "discord",
        url: "https://www.discord.com/"
      }
    ]
  };
  return (
    <>
      <Container>
        <Grid>
          <Grid.Row />
          <Grid.Row />
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Header size="huge">Game Social Media</Header>
            </Grid.Column>
            <Grid.Column floated="right" width={6} textAlign="right">
              <Button
                size="massive"
                circular
                icon
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                <Icon name="user" />
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Menu secondary>
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <CardList users={userList} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <UserModal
          user={user}
          isOpen={openModal}
          closeModal={() => setOpenModal(false)}
        ></UserModal>
      </Container>
    </>
  );
}
