const express = require('express');
const router = express.Router();
// ===== get database schema for database operation =====
const { fullFormDataPost } = require('../models');

// get data from database
router.get('/', async (req, res) => {
	// get every set of data from fullFormDataPost
	const getAllFullFormData = await fullFormDataPost.findAll();
	res.json(getAllFullFormData);
});

// For Data Insert in database
router.post('/', async (req, res) => {
	const post = req.body;

	await fullFormDataPost.create(post);
	res.json(post);
});

// For File Insert in uploads folder
router.post('/uploads', async (req, res) => {
	/**
	 * why use "try catch"?
	 * if somehow file does't move in any case
	 * that will not harm server (like: serverDown or serverStop)
	 */
	try {
		if (!req.files) {
			res.json({
				status: false,
				message: 'No files Found',
			});
		} else {
			const { image, file } = req.files;

			// file will be save in uploads folder
			await image.mv('./uploads/' + image.name);
			await file.mv('./uploads/' + file.name);

			res.json({
				status: true,
				message: 'File is uploaded',
			});
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// For Data Delete
router.post('/delete', async (req, res) => {
	const deleteId = req.body.deleteId;

	// For delete data in MySql
	await fullFormDataPost.destroy({
		where: {
			id: deleteId,
		},
	});

	res.json('Deleted Successfully!');
});

// For Update Files in uploads
router.put('/update/files', async (req, res) => {
	/**
	 * why use "try catch"?
	 * if somehow file does't move in any case
	 * that will not harm server (like: serverDown or serverStop)
	 */
	try {
		if (!req.files) {
			res.json({
				status: false,
				message: 'No files Found',
			});
		} else {
			const { image, file } = req.files;

			// file will be save in uploads folder
			await image.mv('./uploads/' + image.name);
			await file.mv('./uploads/' + file.name);

			res.json({
				status: true,
				message: 'File is uploaded',
			});
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// For Update Data in Database
router.put('/update', async (req, res) => {
	const updateData = req.body;
	const record = await fullFormDataPost.findOne({
		where: {
			id: updateData.id,
		},
	});
	await record.update(updateData);

	res.json('Update Data Successfully!');
});

module.exports = router;
