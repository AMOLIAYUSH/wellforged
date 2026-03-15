import pg from 'pg';
const { Client } = pg;
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

async function seedReviews() {
    try {
        await client.connect();
        console.log('Connected to database');

        const productRes = await client.query("SELECT id FROM products WHERE slug = 'moringa-powder' LIMIT 1");
        if (productRes.rows.length === 0) {
            console.error('Product not found');
            return;
        }
        const productId = productRes.rows[0].id;

        const reviews = [
            {
                rating: 5,
                highlight: "NABL Certification is a game-changer",
                comment: "As a health professional, I'm always skeptical of 'superfood' claims. Seeing the NABL lab reports for the specific batch in my hand was the turning point. Finally, a brand that prioritizes data over fluff.",
                is_verified: true
            },
            {
                rating: 5,
                highlight: "Purest Moringa I've found",
                comment: "The taste is incredibly fresh, which usually means it's processed correctly. The fact that I can scan a QR code and see the chlorophyll levels and heavy metal tests makes WellForged the most trustworthy supplement I've used.",
                is_verified: true
            },
            {
                rating: 5,
                highlight: "Transparency is addictive",
                comment: "I was tired of 'proprietary blends' where you don't know what's inside. WellForged's 100% purity guarantee and the batch-wise reporting model should be the industry standard.",
                is_verified: true
            },
            {
                rating: 5,
                highlight: "Unbeatable freshness",
                comment: "The subscription model is seamless, but the quality of the moringa is what kept me. It dissolves perfectly and you can tell it's not sitting in a warehouse for months.",
                is_verified: true
            }
        ];

        for (const r of reviews) {
            await client.query(
                "INSERT INTO product_reviews (product_id, rating, highlight, comment, is_verified, status) VALUES ($1, $2, $3, $4, $5, $6)",
                [productId, r.rating, r.highlight, r.comment, r.is_verified, 'approved']
            );
        }

        console.log('Reviews seeded successfully');

    } catch (err) {
        console.error('Error seeding reviews:', err);
    } finally {
        await client.end();
    }
}

seedReviews();
