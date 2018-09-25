import { Memo } from "./layouts/Memo";
import { Quiz } from "./layouts/Quiz/index";
import { NotFound } from "./layouts/NotFound/index";
import { Welcome } from "./layouts/Welcome/index";
import { Exchange } from "./layouts/Exchange";

export default [
  {
    title: "Chart",
    path: "/",
    component: Welcome,
    exact: true
  },
  {
    title: "Quiz",
    path: "/quiz",
    component: Quiz
  },
  // {
  //   title: "Memo",
  //   path: "/memo",
  //   component: Memo
  // },
  {
    title: "Convert Currency",
    path: "/exchange",
    component: Exchange
  },
  {
    component: NotFound
  }
];
