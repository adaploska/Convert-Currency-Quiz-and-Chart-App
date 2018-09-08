import { Quiz } from "./layouts/Quiz/index";
import { NotFound } from "./layouts/NotFound/index";
import { Welcome } from "./layouts/Welcome/index";

export default [{
    title: 'Main',
    path: '/',
    component: Welcome,
    exact: true
}, {
    title: 'Quiz',
    path: '/quiz',
    component: Quiz,
}, {
    component: NotFound,
}];