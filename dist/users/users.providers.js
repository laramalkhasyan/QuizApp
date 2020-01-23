"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = require("./users.model");
exports.usersProviders = [
    {
        provide: 'USERS_MODEL',
        useFactory: (connection) => connection.model('Users', users_model_1.UsersSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=users.providers.js.map