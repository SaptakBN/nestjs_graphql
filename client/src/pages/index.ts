import { lazy } from "react";

export const Login = lazy(() => import("./unauthorized/login"));
export const Register = lazy(() => import("./unauthorized/register"));
export const Home = lazy(() => import("./authorized/home"));
