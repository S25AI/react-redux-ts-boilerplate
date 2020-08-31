import * as React from "react";
import { RouteComponentProps } from "react-router";

interface TestProps {
  name: string;
  title: string;
}

interface MatchProps extends RouteComponentProps<any> {}

export const NewsCategory = ({ match }: MatchProps) => {
  return (
    <>
      <h2>This is {match.params.id} page</h2>
      <Test name="Alex" title="Test component" />
    </>
  );
};

const Test = ({ name, title }: TestProps) => {
  return (
    <>
      <div>{name}</div>
      <div>{title}</div>
    </>
  );
};
