import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

async function verifyAPI() {
    try {
        const res = await fetch('http://localhost:5000/api/reviews?slug=moringa-powder');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        console.log('API Response:', JSON.stringify(data, null, 2));
        if (data.length > 0) {
            console.log('SUCCESS: Dynamic reviews are being served by the API.');
        } else {
            console.log('FAILURE: No reviews found for the product.');
        }
    } catch (error) {
        console.error('Error verifying API:', error);
    }
}

verifyAPI();
