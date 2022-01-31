module.exports = (sequelize, DataTypes) => {
	const fullFormDataPost = sequelize.define('fullFormDataPost', {
		text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tel: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		checkbox: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		range: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		time: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		week: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		month: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		date: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dateTimeLocal: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		radio: {
			type: DataTypes.STRING,
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
		fileUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		fileName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	return fullFormDataPost;
};
