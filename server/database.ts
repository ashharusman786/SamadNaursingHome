import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { users } from '../shared/schema';

// Database connection (for future use)
export function createDatabase() {
    const sql = neon(process.env.DATABASE_URL!);
    return drizzle(sql, { schema: { users } });
}

// For now, we'll use in-memory storage
// When you're ready to use a real database:
// 1. Set up a Neon PostgreSQL database
// 2. Set the DATABASE_URL environment variable
// 3. Update storage.ts to use the real database instead of MemStorage 