import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Menu } from "../../components/Menu";
import routes from "../../routes";

export const Main = () => {
    const mappedRoutes = routes.map((route, index) => (
            <Route exact={route.exact} key={index} path={route.path} component={route.component}/>
    ));

    return <div>
        <Menu/>

        <Switch>
            { mappedRoutes }
        </Switch>
    </div>

};

// {/*<Route path = '/' component={Welcome}/>*/}
// {/*<Route path='/quiz' component={Quiz}/>*/}
// {/*<Route component={NotFound}/>*/}