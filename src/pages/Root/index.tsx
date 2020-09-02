import React from "react";
import { RouteComponentProps } from "react-router";
import { renderRoutes } from "react-router-config";

interface IRoute {
  component: React.Component;
  exact: boolean;
  path: string;
}

interface IParentRoute {
  Component: React.Component;
  routes: IRoute[];
}

interface IReactRouterConfigProps extends RouteComponentProps<any> {
  route: IParentRoute;
}

export const Root = ({ route }: IReactRouterConfigProps) => <>{renderRoutes(route.routes)}</>;
