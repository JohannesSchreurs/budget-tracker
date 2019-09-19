import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/routes/AddExpensePage';
import EditExpensePage from '../components/routes/EditExpensePage';
import ExpenseDashboardPage from '../components/routes/ExpenseDashboardPage';
import HelpPage from '../components/routes/HelpPage';
import NotFoundPage from '../components/routes/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact/>
                <Route path="/create" component={AddExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;