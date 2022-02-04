module.exports = (sequelize, DataTypes) => {
	const ckEditorDataPost = sequelize.define('ckEditorDataPost', {
		subject: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ckEditorData: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		imgName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		imgUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	return ckEditorDataPost;
};
