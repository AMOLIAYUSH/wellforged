
import { Pool } from 'pg';
import http from 'http';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Wf_backend',
    password: 'Ayush@12',
    port: 5432
});

async function runDiagnostics() {
    console.log('--- Database Diagnostics ---');
    try {
        const res = await pool.query("SELECT code, discount_type, discount_value, is_active FROM coupons WHERE code LIKE 'Welcome%' OR code IN ('WF05', 'WF10', 'WF20')");
        console.log('Coupons found:', JSON.stringify(res.rows, null, 2));
    } catch (err) {
        console.error('Database error:', err.message);
    } finally {
        await pool.end();
    }

    console.log('\n--- Backend Connectivity Diagnostics ---');
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/api/coupons/validate',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = http.request(options, (res) => {
        console.log(`Endpoint: ${options.path}`);
        console.log(`Status: ${res.statusCode}`);
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    req.on('error', (e) => {
        console.error('Connectivity error:', e.message);
    });

    req.write(JSON.stringify({ code: 'Welcome20', subtotal: 1000 }));
    req.end();
}

runDiagnostics();
