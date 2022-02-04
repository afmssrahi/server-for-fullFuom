const express = require('express');
const router = express.Router();
// ===== get database schema for database operation =====
const { ckEditorDataPost } = require('../models');

// get ckEditor data from database
router.get('/', async (req, res) => {
	// get every set of data from fullFormDataPost
	const getCkEditorDataPost = await ckEditorDataPost.findAll();
	res.json(getCkEditorDataPost);
});

// For ckEditor page Data Insert in database
router.post('/', async (req, res) => {
	const post = req.body;

	await ckEditorDataPost.create(post);
	res.json(post);
});

// For ckEditor page Image Insert in uploads folder
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
			const { image } = req.files;

			// file will be save in uploads folder
			await image.mv('./uploads/' + image.name);

			res.json({
				status: true,
				message: 'File is uploaded',
			});
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// For CkEditor Page Data Delete
router.post('/delete', async (req, res) => {
	const deleteId = req.body.deleteId;
	// For delete data in MySql
	await ckEditorDataPost.destroy({
		where: {
			id: deleteId,
		},
	});

	res.json('Deleted Successfully!');
});

// For Update CKEditor Page Files in uploads
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
			const { image } = req.files;

			// file will be save in uploads folder
			await image.mv('./uploads/' + image.name);

			res.json({
				status: true,
				message: 'File is uploaded',
			});
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// For Update CKEditor Page Data in Database
router.put('/update', async (req, res) => {
	const updateData = req.body;
	const record = await ckEditorDataPost.findOne({
		where: {
			id: updateData.id,
		},
	});
	await record.update(updateData);

	res.json('Update Data Successfully!');
});

module.exports = router;
