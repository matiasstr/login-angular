"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const user = new User_1.default({ email, password: hashedPassword, name });
    await user.save();
    res.status(201).json({ message: 'Usuario registrado correctamente.' });
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User_1.default.findOne({ email });
    if (!user || !(await bcryptjs_1.default.compare(password, user.password))) {
        res.status(401).json({ error: 'Email o contraseña incorrecta.' });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
    return;
};
exports.login = login;
const getProfile = async (req, res) => {
    const user = await User_1.default.findById(req.user.id).select('-password');
    res.json(user);
};
exports.getProfile = getProfile;
//# sourceMappingURL=user.controller.js.map