import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from '../components/routes/AddExpensePage';
import EditExpensePage from '../components/routes/EditExpensePage';
import ExpenseDashboardPage from '../components/routes/ExpenseDashboardPage';
import HelpPage from '../components/routes/HelpPage';
import NotFoundPage from '../components/routes/NotFoundPage';
import LoginPage from '../components/routes/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/" component={EditExpensePage} exact/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;