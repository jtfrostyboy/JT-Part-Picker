const db = require('../db');
const { PcBuild } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedBuilds = async () => {
    const BuildSeedData = [
        {
            name: "Budget Gaming Build",
            cpu: "AMD Ryzen 5 3600",
            gpu: "NVIDIA GTX 1660 Super",
            ram: "Corsair Vengeance LPX 16GB DDR4",
            storage: "Crucial P1 500GB NVMe SSD",
            motherboard: "MSI B450 TOMAHAWK MAX",
            powerSupply: "EVGA 600 W1, 80+ WHITE 600W",
            case: "NZXT H510 Compact ATX Mid-Tower",
            totalPrice: 899.99
          },
          {
            name: "Mid-Range Productivity Build",
            cpu: "Intel Core i7-10700K",
            gpu: "AMD Radeon RX 5700 XT",
            ram: "G.Skill Ripjaws V 32GB DDR4",
            storage: "Samsung 970 EVO Plus 1TB NVMe SSD",
            motherboard: "ASUS ROG Strix B550-F Gaming",
            powerSupply: "Corsair RM750x 750W 80+ Gold",
            case: "Fractal Design Meshify C ATX Mid-Tower",
            totalPrice: 1499.99
          },
          {
            name: "High-End Gaming and Content Creation Build",
            cpu: "AMD Ryzen 9 5900X",
            gpu: "NVIDIA GeForce RTX 3080",
            ram: "Corsair Dominator Platinum RGB 64GB DDR4",
            storage: "Samsung 970 EVO Plus 2TB NVMe SSD",
            motherboard: "GIGABYTE X570 AORUS Master",
            powerSupply: "Seasonic Focus GX-850, 80+ Gold 850W",
            case: "NZXT H710i ATX Mid-Tower",
            totalPrice: 2999.99
          }
    ]
    await PcBuild.insertMany(BuildSeedData)
    console.log('builds added')
}

async function run() {
    await seedBuilds()
    db.close()
}

run()