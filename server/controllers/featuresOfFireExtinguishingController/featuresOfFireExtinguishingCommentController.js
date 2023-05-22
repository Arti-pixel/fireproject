const { FeaturesOfFireExtinguishingComment } = require("../../models/models");

class FeaturesOfFireExtinguishingCommentController {
  async create(req, res) {
    const {
      cardId,
      featuresOfFireExtinguishingComment,
      creationOfOperationalHeadquartersComment,
      creationOfFireFightingAreasComment,
      circumstancesContributingToFireDevelopmentComment,
      circumstancesComplicatingTheSituationComment,
    } = req.body;

    const featuresOfExtinguishingComment =
      await FeaturesOfFireExtinguishingComment.create({
        cardId,
        featuresOfFireExtinguishingComment,
        creationOfOperationalHeadquartersComment,
        creationOfFireFightingAreasComment,
        circumstancesContributingToFireDevelopmentComment,
        circumstancesComplicatingTheSituationComment,
      });

    return res.json(featuresOfExtinguishingComment);
  }

  async getOne(req, res) {
    const { cardId } = req.params;
    const featuresOfExtinguishingComment =
      await FeaturesOfFireExtinguishingComment.findOne({
        where: { cardId },
      });
    return res.json(featuresOfExtinguishingComment);
  }

  async update(req, res) {
    const { cardId } = req.params;
    const {
      featuresOfFireExtinguishingComment,
      creationOfOperationalHeadquartersComment,
      creationOfFireFightingAreasComment,
      circumstancesContributingToFireDevelopmentComment,
      circumstancesComplicatingTheSituationComment,
    } = req.body;

    if (
      await FeaturesOfFireExtinguishingComment.findOne({
        where: { cardId },
      })
    ) {
      const featuresOfExtinguishingComment =
        await FeaturesOfFireExtinguishingComment.update(
          {
            featuresOfFireExtinguishingComment,
            creationOfOperationalHeadquartersComment,
            creationOfFireFightingAreasComment,
            circumstancesContributingToFireDevelopmentComment,
            circumstancesComplicatingTheSituationComment,
          },
          { where: { cardId } }
        );

      return res.json(featuresOfExtinguishingComment);
    } else {
      const featuresOfExtinguishingComment =
        await FeaturesOfFireExtinguishingComment.create({
          cardId,
          featuresOfFireExtinguishingComment,
          creationOfOperationalHeadquartersComment,
          creationOfFireFightingAreasComment,
          circumstancesContributingToFireDevelopmentComment,
          circumstancesComplicatingTheSituationComment,
        });

      return res.json(featuresOfExtinguishingComment);
    }
  }
}

module.exports = new FeaturesOfFireExtinguishingCommentController();
