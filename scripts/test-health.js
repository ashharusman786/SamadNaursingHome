#!/usr/bin/env node

// Simple health check test script
const https = require('https');
const http = require('http');

const url = process.argv[2] || 'http://localhost:5000/health';

console.log(`🏥 Testing health endpoint: ${url}`);

const client = url.startsWith('https') ? https : http;

const req = client.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            console.log('✅ Health check response:');
            console.log(`   Status: ${response.status}`);
            console.log(`   Environment: ${response.environment}`);
            console.log(`   Timestamp: ${response.timestamp}`);

            if (response.status === 'OK') {
                console.log('🎉 Health check passed!');
                process.exit(0);
            } else {
                console.log('❌ Health check failed!');
                process.exit(1);
            }
        } catch (error) {
            console.log('❌ Invalid JSON response:', data);
            process.exit(1);
        }
    });
});

req.on('error', (error) => {
    console.log('❌ Request failed:', error.message);
    process.exit(1);
});

req.setTimeout(10000, () => {
    console.log('❌ Request timeout');
    req.destroy();
    process.exit(1);
}); 