const db = require('../db');
const { Part } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedParts = async () => {
    const partSeedData = [
        { name: "Intel Core i7-9700K", type: "CPU", price: 329.99 },
        { name: "NVIDIA GeForce RTX 3080", type: "GPU", price: 699.99 },
        { name: "Corsair Vengeance LPX 16GB DDR4", type: "RAM", price: 89.99 },
        { name: "Samsung 970 EVO 1TB NVMe SSD", type: "Storage", price: 149.99 },
        { name: "ASUS ROG Strix Z390-E Gaming Motherboard", type: "Motherboard", price: 259.99 },
        { name: "Corsair RM750x 750W 80+ Gold PSU", type: "Power Supply", price: 119.99 },
        { name: "NZXT H510i Compact ATX Mid-Tower Case", type: "Case", price: 109.99 },
        { name: "AMD Ryzen 9 5950X", type: "CPU", price: 749.99 },
        { name: "NVIDIA GeForce RTX 3070", type: "GPU", price: 499.99 },
        { name: "G.Skill Ripjaws V 32GB DDR4", type: "RAM", price: 129.99 },
        { name: "Western Digital Black 2TB HDD", type: "Storage", price: 89.99 },
        { name: "MSI MAG B550 TOMAHAWK Motherboard", type: "Motherboard", price: 179.99 },
        { name: "EVGA SuperNOVA 850 G5 850W 80+ Gold PSU", type: "Power Supply", price: 139.99 },
        { name: "Fractal Design Meshify C Compact Mid-Tower Case", type: "Case", price: 89.99 }
    ]
    await Part.insertMany(partSeedData)
    console.log('parts added')
}
async function run() {
    await seedParts()
    db.close()
}

run()