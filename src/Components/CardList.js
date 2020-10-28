import React from "react";
import { Card } from "semantic-ui-react";
import UserCard from "./UserCard";

export default function CardList({ users }) {
  return (
    <Card.Group>
      {users && users.map((user, index) => <UserCard user={user} />)}
    </Card.Group>
  );
}
