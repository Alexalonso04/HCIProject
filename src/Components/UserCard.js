import React from "react";
import { Card, Button, Label, Grid, GridRow, Icon } from "semantic-ui-react";

export default function UserCard({ user }) {
  return (
    <Card color="green">
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>{user && user.games[0]}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h4>Top Games</h4>
              <Label.Group>
                {user.games &&
                  user.games.map((game, index) => (
                    <Label key={index}>{game}</Label>
                  ))}
              </Label.Group>
              <h4>Top Genres</h4>
              <Label.Group>
                {user.genres &&
                  user.genres.map((genre, index) => (
                    <Label key={index}>{genre}</Label>
                  ))}
              </Label.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h4>Social Medial</h4>
              {user.socialMedia &&
                user.socialMedia.map((media, index) => (
                  <a href={media.url} target="_blank" rel="noreferrer">
                    <Icon size="big" name={media.name} />
                  </a>
                ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <Button
          floated="right"
          icon="eye"
          color="blue"
          labelPosition="left"
          content="View"
        />
      </Card.Content>
    </Card>
  );
}
