const express = require('express');
const app = express();
const cors = require('cors');
const fileupload = require('express-fileupload');
require('dotenv').config();

const port = process.env.PORT || 5000;

// ======= middleware ===========
app.use(cors());
app.use(express.json());
app.use(fileupload());
// Serve Static Assets
app.use(express.static('uploads'));

// ========== Database ===========
const db = require('./models');

// ========== Router For FullForm  ==============
const fullFormRoutes = require('./routes/fullFormRoutes');
app.use('/', fullFormRoutes);

// ========== Router For CKEditor page  ==============
const ckEditorRoutes = require('./routes/ckEditorRoutes');
app.use('/ckeditor', ckEditorRoutes);

// == When Sequelize database connected, then app listening port start ==
db.sequelize
	.sync()
	.then(() => {
		// app listening port start
		app.listen(port, () => {
			console.log(`server in running on port ${port}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
