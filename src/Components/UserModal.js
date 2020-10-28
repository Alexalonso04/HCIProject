import React, { useState } from "react";
import { Modal, Grid, List, Button, Container, Label } from "semantic-ui-react";

export default function UserModal({ isOpen, closeModal, user }) {
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <Modal open={isOpen} onClose={closeModal} closeOnDimmerClick closeOnEscape>
      <Modal.Header>Alejandro Alonso</Modal.Header>
      <Modal.Content>
        <Grid divided>
          <Grid.Row fluid columns={2}>
            <Grid.Column verticalAlign="top">
              <Grid.Row>
                <Grid.Column color="red"></Grid.Column>
                <Grid.Column>
                  <h3>
                    My Games
                    <span>
                      <Button
                        icon="plus"
                        size="tiny"
                        circular
                        floated="right"
                        color="green"
                      ></Button>
                    </span>
                  </h3>
                  <List ordered>
                    {user &&
                      user.games.map((game, index) => (
                        <List.Item key={index}>{game}</List.Item>
                      ))}
                  </List>
                  <h3>
                    My Genres
                    <span>
                      <Button
                        icon="plus"
                        size="tiny"
                        circular
                        floated="right"
                        color="green"
                      ></Button>
                    </span>
                  </h3>
                  <Label.Group>
                    {user &&
                      user.genres.map((genre, index) => (
                        <Label key={index}>{genre}</Label>
                      ))}
                  </Label.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <h4>Social Media</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
}
