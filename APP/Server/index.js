const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


//for photo
const multer = require('multer');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');
const axios = require('axios');



var router = express.Router();
const app = express();


app.use(bodyParser.json({ limit: '5000mb' }));
app.use(bodyParser.urlencoded({ limit: '5000mb', extended: true }));


app.use(cors()); // 用CORS
//app.use(bodyParser.json());




//for photo
// Define storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Directory to store the uploaded files
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Rename the file
//     }
// });


// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 10 * 1024 * 1024 }  // Set the limit to 10 MB
// });




const port = 3000;

//連線資料庫
const db = require('./config/db');

//資料庫操作

// 通用的資料查詢函數
const { queryDatabase, queryMatchingData } = require('./query/queryALL');



app.get('/test', (req, res) => queryDatabase('test', res));  // 這個之後要改(CartPage.js用的)

app.get('/temples', (req, res) => queryDatabase('宮廟', res));

app.get('/transaction', (req, res) => queryDatabase('交易', res));

app.get('/offerings', (req, res) => queryDatabase('供品', res));

app.get('/ceremony', (req, res) => queryDatabase('法會', res));

app.get('/sw_organization', (req, res) => queryDatabase('社福機構', res));

app.get('/commodity', (req, res) => queryDatabase('商品', res));

app.get('/suppliers', (req, res) => queryDatabase('供品供應商', res));

app.get('/believers', (req, res) => queryDatabase('信眾', res));

app.get('/browse', (req, res) => queryDatabase('瀏覽', res));

app.get('/cart', (req, res) => queryDatabase('購物車', res));

app.get('/temples_info', (req, res) => queryDatabase('廟方資訊', res));

app.get('/deliver', (req, res) => queryDatabase('運送', res));

app.get('/provide', (req, res) => queryDatabase('提供', res));

app.get('/match', (req, res) => queryDatabase('媒合', res));

app.get('/record', (req, res) => queryDatabase('記錄', res));

app.get('/order', (req, res) => queryDatabase('訂購', res));

app.get('/cooperate', (req, res) => queryDatabase('合作', res));

app.get('/match/:id', (req, res) => queryMatchingData(req.params.id, res));

//Signup route
app.post('/believers', async(req, res) => {
    const { NAME, PHONE, EMAIL, PASSWORD } = req.body;

    console.log('Received signup data:', req.body);

    // Input validation
    if (!NAME || !PHONE || !EMAIL || !PASSWORD) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if user already exists
        const [existingUsers] = await db.promise().query(
            'SELECT * FROM `信眾` WHERE PHONE = ? OR EMAIL = ?', [PHONE, EMAIL]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'Phone number or email already exists' });
        }
        const hashedPassword = await bcrypt.hash(PASSWORD, 10);

        // Insert new user
        const [result] = await db.promise().query(
            'INSERT INTO `信眾` (NAME, PHONE, EMAIL, PASSWORD) VALUES (?, ?, ?, ?)', [NAME, PHONE, EMAIL, hashedPassword]
        );

        console.log('User inserted successfully:', result);

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Detailed signup error:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message,
            sqlMessage: error.sqlMessage,
            sqlState: error.sqlState
        });
    }
});

// 更新個資維護
app.post('/believersUpdate', async (req, res) => {
    const { NAME, PHONE, EMAIL, PASSWORD } = req.body;

    console.log('Received update data:', req.body);

    // Input validation
    if (!NAME || !PHONE || !EMAIL || !PASSWORD) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if user exists
        const [existingUsers] = await db.promise().query(
            'SELECT * FROM `信眾` WHERE PHONE = ? OR EMAIL = ?', [PHONE, EMAIL]
        );

        if (existingUsers.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(PASSWORD, 10);

        // Update user information
        const [result] = await db.promise().query(
            'UPDATE `信眾` SET NAME = ?, PHONE = ?, EMAIL = ?, PASSWORD = ? WHERE PHONE = ? OR EMAIL = ?',
            [NAME, PHONE, EMAIL, hashedPassword, PHONE, EMAIL]
        );

        console.log('User updated successfully:', result);

        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Detailed update error:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message,
            sqlMessage: error.sqlMessage,
            sqlState: error.sqlState
        });
    }
});

// CartPage


// after login -- token

const JWT_SECRET = 'hfMIS'; // Replace with a real secret key

// sign-in route
app.post('/signin', async(req, res) => {
    const { EMAIL, PASSWORD } = req.body;

    console.log('Received signup data:', req.body);

    if (!EMAIL || !PASSWORD) {
        return res.status(400).json({ error: 'Email and password are required' });

    }

    try {
        const [users] = await db.promise().query(
            'SELECT * FROM `信眾` WHERE EMAIL = ?', [EMAIL]
        );
        console.log('data:', users.length);

        if (users.length == 0) {
            return res.status(401).json({ error: 'Invalid email' });
        }

        const user = users[0]; // Get the first (and should be only) user
        console.log('user:', users[0]);

        console.log('user.PASSWORD:', user.PASSWORD);
        console.log('PASSWORD:', PASSWORD);

        // Now compare the provided password with the stored hash
        const match = await bcrypt.compare(PASSWORD, user.PASSWORD);

        if (match) {
            // Create a JWT token
            const token = jwt.sign({ userId: user.pID, email: user.EMAIL },
                JWT_SECRET, { expiresIn: '1h' }
            );

            res.json({ message: 'Signed in successfully', token });
        } else {
            res.status(401).json({ error: 'Invalid  password' });
        }
    } catch (error) {
        console.error('Error during signin:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});





// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

// Example protected route
app.get('/profile', isAuthenticated, async(req, res) => {
    try {
        const [rows] = await db.promise().query('SELECT * FROM `信眾` WHERE pID = ?', [req.user.userId]);

        if (rows.length > 0) {
            const user = rows[0];
            res.json({
                message: 'This is a protected route',
                userId: user.pID,
                email: user.EAMIL,
                name: user.NAME,

            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.post('/upimg', async (req, res) => {
    try {
        const { photo } = req.body;

        if (!photo) {
            return res.status(400).send('No photo provided.');
        }

        // Decode base64 image
        const base64Data = photo.replace(/^data:image\/png;base64,/, "");
        const imagePath = path.join(__dirname, 'uploads', 'image.png');

        // Ensure the uploads directory exists
        if (!fs.existsSync(path.dirname(imagePath))) {
            fs.mkdirSync(path.dirname(imagePath), { recursive: true });
        }

        fs.writeFileSync(imagePath, base64Data, 'base64');

        // Process the image with the Python script
        const result = await processImageWithPython(imagePath);

        // Send response back to client
        res.json(result);

    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).send('Error processing image.');
    }
});


const processImageWithPython = async (imagePath) => {
    try {
        console.log('Preparing to send image to Python server...');

        const form = new FormData();
        form.append('image_path', fs.createReadStream(imagePath));

        // Log form headers and other relevant information
        console.log('Form headers:', form.getHeaders());

        const response = await axios.post('http://140.117.71.127:5000/proimg', form, {
            headers: {
                ...form.getHeaders()
            }
        });

        console.log('Response from Python server:', response.data);

        
        // Count detected objects
        const objectCounts = countDetectedObjects(response.data);

        console.log('Object counts:', objectCounts);

        return objectCounts;
        
    } catch (error) {
        console.error('Error processing image with Python:', error.message);
        
        // Log additional error details
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request data:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        
        throw error;
    }
};

const countDetectedObjects = (response) => {
    try {
        // Parse the detections if needed
        const detections = JSON.parse(response.detections);

        // Initialize an object to count occurrences of each object type
        const objectCounts = {};

        // Iterate through the detections and count each object type
        detections.forEach(detection => {
            const objectName = detection.name;
            if (objectCounts[objectName]) {
                objectCounts[objectName]++;
            } else {
                objectCounts[objectName] = 1;
            }
        });

        return objectCounts;
    } catch (error) {
        console.error('Error parsing detections:', error);
        return {};
    }
};




// 開給全部
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});