"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, required: true },
});
//# sourceMappingURL=users.model.js.map