import { createServer } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function registerRoutes(app) {
    // API Routes
    app.get('/api/health', (req, res) => {
        res.json({
            status: 'OK',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development'
        });
    });
    // Serve static data
    app.get('/api/doctors', (req, res) => {
        try {
            const doctorsData = require('../client/src/data/doctors.json');
            res.json(doctorsData);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to load doctors data' });
        }
    });
    app.get('/api/reviews', (req, res) => {
        try {
            const reviewsData = require('../client/src/data/reviews.json');
            res.json(reviewsData);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to load reviews data' });
        }
    });
    app.get('/api/translations', (req, res) => {
        try {
            const translationsData = require('../client/src/data/translations.json');
            res.json(translationsData);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to load translations data' });
        }
    });
    // User management routes (using in-memory storage for now)
    app.post('/api/users', async (req, res) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ error: 'Username and password are required' });
            }
            const existingUser = await storage.getUserByUsername(username);
            if (existingUser) {
                return res.status(409).json({ error: 'Username already exists' });
            }
            const newUser = await storage.createUser({ username, password });
            res.status(201).json({ id: newUser.id, username: newUser.username });
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    });
    app.get('/api/users/:id', async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const user = await storage.getUser(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ id: user.id, username: user.username });
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to get user' });
        }
    });
    const httpServer = createServer(app);
    return httpServer;
}
