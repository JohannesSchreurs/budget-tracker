import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from '../components/routes/AddExpensePage';
import EditExpensePage from '../components/routes/EditExpensePage';
import ExpenseDashboardPage from '../components/routes/ExpenseDashboardPage';
import HelpPage from '../components/routes/HelpPage';
import NotFoundPage from '../components/routes/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/routes/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact/>
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/" component={EditExpensePage} exact/>
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;