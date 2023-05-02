const sequelize = require("../db");
const { DataTypes } = require("sequelize");

//TODO objectCharacteristic и objectDetection- обсудить с заказчиком возможность разбития сущности на составные элементы

//! убрать measuresTaken из card_author в отдельную таблицу

const User = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

const General = sequelize.define(
  "general_data",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId",
      },
    },

    callNumber: {
      type: DataTypes.STRING,
    },

    shift: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    callDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    objectName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    settlement: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    objectCharacteristic: {
      type: DataTypes.TEXT,
    },

    objectDetection: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

const CardAuthor = sequelize.define(
  "card_author",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    measuresTaken: {
      type: DataTypes.STRING,
    },
    positionAuthor: {
      type: DataTypes.STRING,
    },
    fullNameAuthor: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

const FireExtinguishingImage = sequelize.define(
  "fire_extinguish_image",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    signature: {
      type: DataTypes.STRING,
    },
    applicationsName: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

const FireTimeindicators = sequelize.define(
  "fire_timeindicators",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: General,
        key: "cardId",
      },
    },
    fireOccurrenceTime: {
      type: DataTypes.TIME,
    },
    fireOccurrenceSq: {
      type: DataTypes.INTEGER,
    },

    fireDetectionTime: {
      type: DataTypes.TIME,
    },
    fireDetectionSq: {
      type: DataTypes.INTEGER,
    },

    fireMessageTime: {
      type: DataTypes.TIME,
    },
    fireMessageSq: {
      type: DataTypes.INTEGER,
    },

    departureTime: {
      type: DataTypes.TIME,
    },

    fireArrivalTime: {
      type: DataTypes.TIME,
    },
    fireArrivalSq: {
      type: DataTypes.INTEGER,
    },

    firstBarrelTime: {
      type: DataTypes.TIME,
    },
    firstBarrelSq: {
      type: DataTypes.INTEGER,
    },

    additionalForcesTime: {
      type: DataTypes.TIME,
    },
    additionalForcesSq: {
      type: DataTypes.INTEGER,
    },

    localizationTime: {
      type: DataTypes.TIME,
    },
    localizationSq: {
      type: DataTypes.INTEGER,
    },

    openFireEliminationTime: {
      type: DataTypes.TIME,
    },
    openFireEliminationSq: {
      type: DataTypes.INTEGER,
    },

    fireConsequencesEliminationTime: {
      type: DataTypes.TIME,
    },

    firestationReturnTime: {
      type: DataTypes.TIME,
    },
  },
  { timestamps: false }
);

General.hasOne(CardAuthor, { foreignKey: "cardId" });
CardAuthor.belongsTo(General, { foreignKey: "cardId" });

General.hasOne(FireTimeindicators, { foreignKey: "cardId" });
FireTimeindicators.belongsTo(General, { foreignKey: "cardId" });

General.hasMany(FireExtinguishingImage, { foreignKey: "cardId" });
FireExtinguishingImage.belongsTo(General, { foreignKey: "cardId" });

User.hasMany(General, { foreignKey: "userId" });
General.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  General,
  CardAuthor,
  User,
  FireExtinguishingImage,
  FireTimeindicators,
};
