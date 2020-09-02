import React from "react";
import { RouteComponentProps } from "react-router";

interface TestProps {
  name: string;
  title: string;
}

interface MatchProps extends RouteComponentProps<any> {}

export const NewsCategory: React.FC<MatchProps> = ({ match }) => {
  return (
    <>
      <h2>This is {match.params.id} page</h2>
      <Test name="Alex" title="Test component" />
    </>
  );
};

const Test: React.FC<TestProps> = ({ name, title }) => {
  return (
    <>
      <div>{name}</div>
      <div>{title}</div>
    </>
  );
};
