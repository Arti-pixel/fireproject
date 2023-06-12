const uuid = require("uuid");
const allTables = require("../controllers/allTableslController");
const moment = require("moment");
const path = require("path");
const fs = require("fs");
const PdfPrinter = require("pdfmake/src/printer");

const fonts = {
  Roboto: {
    normal: "node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf",
    bold: "node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf",
    italics: "node_modules/roboto-font/fonts/Roboto/roboto-italic-webfont.ttf",
    bolditalics:
      "node_modules/roboto-font/fonts/Roboto/roboto-bolditalic-webfont.ttf",
  },
};

class PdfmakeController {
  async create(req, res, next) {
    const replaceNullWithDash = (data) => {
      if (data === "" || data === null || data === undefined) {
        return "-";
      } else {
        return data;
      }
    };

    const replaceNullWithString = (data) => {
      if (data === "" || data === null || data === undefined) {
        return "не установлено";
      } else {
        return data;
      }
    };

    let data = await allTables.getCardInfo(req, res);

    const printer = new PdfPrinter(fonts);

    let docDefination = {
      content: [
        {
          text: [
            { text: "№ вызова \t", bold: true },
            data.GeneralController.callNumber,
            "\n\n",
            {
              text: "КАРТОЧКА БОЕВЫХ ДЕЙСТВИЙ",
              style: "header",
              bold: true,
              alignment: "center",
            },
            "\n\n",
            { text: "караула (смены) \t", bold: true },
            data.GeneralController.shift,
            "\n",
            {
              text: `по тушению пожара произошедшего \t ${moment(
                data.GeneralController.callDate
              ).format("DD-MM-YYYY")} года`,
              bold: true,
            },
            "\n\n",
            {
              text: `1. Наименование организации (объекта), ведомственная принадлежность (форма
              собственности, адрес) \t ${data.GeneralController.settlement} ${data.GeneralController.address} ${data.GeneralController.objectName}`,
            },
            "\n\n",
            {
              text: `2. Характеристика организации (объекта) \t ${replaceNullWithDash(
                data.GeneralController.objectCharacteristic
              )}`,
            },
            "\n\n",
            {
              text: `3. Кем охраняется организация (объект), кто обнаружил пожар \t ${replaceNullWithDash(
                data.GeneralController.objectDetection
              )}`,
            },
            "\n\n",
            {
              text: `4. Время:`,
            },
            "\n",
          ],
        },
        {
          layout: "noBorders",
          table: {
            widths: [210, 120, 100, "*"],

            body: [
              [
                "возникновения пожара",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.fireOccurrenceTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.fireOccurrenceSq
                )}`,
              ],
              [
                "обнаружения пожара",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.fireDetectionTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.fireDetectionSq
                )}`,
              ],
              [
                "сообщения о пожаре",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.fireMessageTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.fireMessageSq
                )}`,
              ],
              [
                "выезда дежурного караула (смены)",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.departureTime
                )}`,
                "",
                "",
              ],
              [
                "прибытия на пожар",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.fireArrivalTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.fireArrivalSq
                )}`,
              ],
              [
                "подачи первого ствола",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.firstBarrelTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.firstBarrelSq
                )}`,
              ],
              [
                "вызова дополнительных сил",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.additionalForcesTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.additionalForcesSq
                )}`,
              ],
              [
                "локализация",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.localizationTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.localizationSq
                )}`,
              ],
              [
                "ликвидация открытого горения",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.openFireEliminationTime
                )}`,
                "площадь",
                `${replaceNullWithDash(
                  data.FireTimeindicatorsController.openFireEliminationSq
                )}`,
              ],
              [
                "ликвидация последствий пожара",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController
                    .fireConsequencesEliminationTime
                )}`,
                "",
                "",
              ],
              [
                {
                  colSpan: 2,
                  text: "возвращения в часть (место постоянной дислокации)",
                },
                "",
                `${replaceNullWithString(
                  data.FireTimeindicatorsController.firestationReturnTime
                )}`,
                "",
              ],
            ],
          },
        },
        {
          text: [
            {
              text: `\n\n5. Водоснабжение \t ${replaceNullWithDash(
                data.WaterSupplyController.waterSupplyСharacteristic
              )}\n\n`,
            },
            {
              text: `6. Способы подачи воды: от емкости автоцистерны \t ${replaceNullWithDash(
                data.WaterSupplyController.waterSupplyFromTank
              )}\n\n`,
            },
            {
              text: `с установкой на водоисточник \t ${replaceNullWithDash(
                data.WaterSupplyController.waterSupplyWithWaterSource
              )}\n\n`,
            },
            {
              text: `подвоз воды \t ${replaceNullWithDash(
                data.WaterSupplyController.waterDelivery
              )}\n\n`,
            },
            {
              text: `подача воды в перекачку \t ${replaceNullWithDash(
                data.WaterSupplyController.waterSupplyToPumping
              )}\n\n`,
            },
            {
              text: `7. Обстановка на пожаре \n\n ${replaceNullWithDash(
                data.FireSituationController.fireSituation
              )} \n\n`,
            },
            {
              text: `8. Оценка действий:\n`,
            },
            {
              text: `РТП-1 \t ${replaceNullWithDash(
                data.ActionsEvaluationController.firstFireExtinguishingCompany
              )} \n\n`,
            },
            {
              text: `РТП-2 \t ${replaceNullWithDash(
                data.ActionsEvaluationController.secondFireExtinguishingCompany
              )} \n\n`,
            },
            {
              text: `РТП-3 и последующих \t ${replaceNullWithDash(
                data.ActionsEvaluationController
                  .thirdAndNextFireExtinguishingCompanies
              )} \n\n`,
            },
            {
              text: `Начальников боевых участков тушения пожара (секторов проведения работ) \t ${replaceNullWithDash(
                data.ActionsEvaluationController.chiefsOfTheCombatAreas
              )} \n\n`,
            },
            {
              text: `Пожарных подразделений \t ${replaceNullWithDash(
                data.ActionsEvaluationController.fireDepartments
              )} \n\n`,
            },
            {
              text: `9. Особенности тушения пожара: \t ${replaceNullWithDash(
                data.FeaturesOfFireExtinguishingController
                  .featuresOfFireExtinguishing
              )} \n\n`,
            },
            {
              text: `создание оперативного штаба на пожаре \t ${replaceNullWithDash(
                data.FeaturesOfFireExtinguishingController
                  .creationOfOperationalHeadquarters
              )} \n\n`,
            },
            {
              text: `создание боевых участков тушения пожара (секторов проведения работ) \t ${replaceNullWithDash(
                data.FeaturesOfFireExtinguishingController
                  .creationOfFireFightingAreas
              )} \n\n`,
            },
            {
              text: `10. Обстоятельства, способствующие развитию пожара: \t ${replaceNullWithDash(
                data.FeaturesOfFireExtinguishingController
                  .circumstancesContributingToFireDevelopment
              )} \n`,
            },
            {
              text: `усложняющие обстановку: \t ${replaceNullWithDash(
                data.FeaturesOfFireExtinguishingController
                  .circumstancesComplicatingTheSituation
              )} \n\n`,
            },
            {
              text: `11. Кем (чем) потушен пожар: \t ${replaceNullWithDash(
                data.FireExtinguishPersonnelController.fireExtinguishPersonnel
              )} \n\n`,
            },
            {
              text: `11.1. С использованием техники организаций (объектов): \t ${replaceNullWithDash(
                data.FireExtinguishPersonnelController.fireExtinguishTech
              )} \n\n`,
            },
            {
              text: `11.2. С использованием сил и средств опорных пунктов тушения крупных пожаров \t ${replaceNullWithDash(
                data.FireExtinguishPersonnelController.fireExtinguishLargeFires
              )} \n\n`,
            },
            {
              text: `11.3. С применением ГДЗС \t ${replaceNullWithDash(
                data.FireExtinguishPersonnelController
                  .fireExtinguishWithGasAndSmokeProtectionService
              )} \n`,
            },
          ],
        },
        {
          columns: [
            {
              width: 90,
              text: "одно звено",
            },
            {
              width: 160,
              text: `${replaceNullWithDash(
                data.FireExtinguishPersonnelController.OnesquadOfFirefighters
              )} \t`,
            },
            {
              width: 90,
              text: "два звена",
            },
            {
              width: 160,
              text: `${replaceNullWithDash(
                data.FireExtinguishPersonnelController.TwosquadOfFirefighters
              )} \n\n`,
            },
          ],
        },
        {
          text: [
            {
              text: `12. С какими службами было организовано взаимодействие \t  ${replaceNullWithDash(
                data.FireOthersController.serviceInteraction
              )} \n\n`,
            },
            {
              text: `13. Не прибыли подразделения пожарной охраны и службы жизнеобеспечения,
              предусмотренные Планом привлечения сил и средств подразделений пожарной охраны, гарнизонов пожарной охраны для тушения пожаров и проведения аварийно- спасательных работ, Расписанием выездов подразделений пожарной охраны, гарнизонов пожарной охраны для тушения пожаров и проведения аварийно- 
              спасательных работ, затребованные РТП \t  ${replaceNullWithDash(
                data.FireOthersController.notArrivedServices
              )} \n\n`,
            },
            {
              text: `14. Неисправность в работе пожарной техники: \t  ${replaceNullWithDash(
                data.FireOthersController.fireEquipmentMalfunction
              )} \n\n`,
            },
            {
              text: `15. Причина и виновник пожара (установленный либо предполагаемый) \t  ${replaceNullWithDash(
                data.FireOthersController.fireCauseAndCulprit
              )} \n\n`,
            },
            {
              text: `16. Результаты пожара:\n`,
            },
            {
              text: `16.1. Спасено людей \t  ${replaceNullWithDash(
                data.FireResultsController.savedPeople
              )} \t чел., из них: \t ${replaceNullWithDash(
                data.FireResultsController.savedChildren
              )} \t детей\n`,
            },
            {
              text: `а) пожарными \t  ${replaceNullWithDash(
                data.FireResultsController.savedByFirefighter
              )} \n`,
            },
            {
              text: `б) формированиями ДПО \t  ${replaceNullWithDash(
                data.FireResultsController.savedByVolunteers
              )} \n`,
            },
            {
              text: `в) населением \t  ${replaceNullWithDash(
                data.FireResultsController.savedByPeople
              )} \n`,
            },
            {
              text: `г) обслуживающим персоналом (работниками предприятия) \t  ${replaceNullWithDash(
                data.FireResultsController.savedByServicePersonnel
              )} \n`,
            },
            {
              text: `д) спасателями \t  ${replaceNullWithDash(
                data.FireResultsController.savedByRescuers
              )} \n`,
            },
            {
              text: `16.2. Погибло при пожаре, причина гибели \t  ${replaceNullWithDash(
                data.FireResultsController.diedInAFire
              )} \n`,
            },
            {
              text: `16.3. Травмировано людей \t  ${replaceNullWithDash(
                data.FireResultsController.traumatizedPeople
              )} \n`,
            },
            {
              text: `16.4. Уничтожено строений \t  ${replaceNullWithDash(
                data.FireResultsController.destroyedBuildings
              )} \n`,
            },
            {
              text: `16.5. Погибло животных \t  ${replaceNullWithDash(
                data.FireResultsController.animalsDied
              )} \n`,
            },
            {
              text: `16.6. Сумма ущерба, причиненного пожаром \t  ${replaceNullWithDash(
                data.FireResultsController.amountOfDamageByFire
              )} \n`,
            },
            {
              text: `16.7. Общая стоимость спасенного имущества \t  ${replaceNullWithDash(
                data.FireResultsController.totalValueOfSalvagedProperty
              )} \n`,
            },
            {
              text: `17. Израсходовано огнетушащих веществ \t  ${replaceNullWithDash(
                data.FireResultsController.fireExtinguishingAgentsConsumed
              )} \n\n`,
            },
            {
              text: `18. Случаи нарушения правил охраны труда и техники безопасности работниками пожарной охраны \t  ${replaceNullWithDash(
                data.ReportConclusionController.violationsOfSafetyRegulations
              )} \n`,
            },
            {
              text: `при этом: погибло \t  ${replaceNullWithDash(
                data.ReportConclusionController.diedByViolation
              )} \t чел. \n`,
            },
            {
              text: `травмировано \t  ${replaceNullWithDash(
                data.ReportConclusionController.traumatizedByViolation
              )} \t чел. \n\n`,
            },
            {
              text: `19. Выводы, предложения и принятые меры \t  ${replaceNullWithDash(
                data.ReportConclusionController.conclusionAndProposals
              )} \t чел. \n\n`,
            },
            {
              text: `Приложения: \t `,
              bold: true,
            },
            {
              text: ` ${replaceNullWithDash(
                data.ApplicationNameController.applicationName
              )}\n\n`,
            },
          ],
        },
        {
          layout: "noBorders",
          table: {
            widths: [90, 260, "*"],

            body: [
              [
                `Руководитель 
              подразделения
              пожарной охраны
              `,
                "",
                "",
              ],
              [
                "",
                "_____________________________________________",
                `${replaceNullWithDash(
                  data.ReportConclusionController.fullName
                )}`,
              ],
              ["", { text: "(подпись)", alignment: "center" }, ""],
            ],
          },
        },
        {
          text: [
            {
              text: `${moment(
                data.ReportConclusionController.reportDate
              ).format("DD-MM-YYYY")} года`,
              alignment: "right",
            },
          ],
        },
      ],
    };

    for (const item of data.ApplicationImageController) {
      docDefination.content.push(
        {
          text: item.imageSignature,
          pageBreak: "before",
        },
        {
          image: `${path.resolve(
            __dirname,
            "../",
            "static",
            item.applicationImage
          )}`,
          width: 500,
          height: 700,
          alignment: "center",
        }
      );
    }

    const pdfDoc = await printer.createPdfKitDocument(docDefination, {});
    // pdfDoc.pipe(fs.createWriteStream(`static/${uuid.v4()}.pdf`));

    res.setHeader("Content-type", "application/pdf");
    res.setHeader(
      "Content-disposition",
      `attachment; filename="${uuid.v4()}.pdf"`
    );
    pdfDoc.end();

    pdfDoc.pipe(res);
  }
}

module.exports = new PdfmakeController();
