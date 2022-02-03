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

module.exports = router;
