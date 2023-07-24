import configs from "../configs";

import Home from "../screens/Home";
import UserAccount from "../screens/UserAccount";
import MovieDetails from "../screens/MovieDetails";
import SeathBooking from "../screens/SeatBooking";
import Ticket from "../screens/Ticket";

const publicRoutes = [
    {
        name: configs.routes.Home,
        component: Home,
    },
    {
        name: configs.routes.UserAccount,
        component: UserAccount,
    },
    {
        name: configs.routes.MovieDetails,
        component: MovieDetails,
    },
    {
        name: configs.routes.SeatBooking,
        component: SeathBooking,
    },
    {
        name: configs.routes.Ticket,
        component: Ticket,
    },
];

const privateRoutes: any[] = [];

export { publicRoutes, privateRoutes };
