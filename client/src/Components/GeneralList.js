import { observer } from "mobx-react-lite";
import React, { useEffect, createContext, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import ButtonList from "./cardActions/ButtonList";
import FilterGeneralList from "./cardActions/FilterGeneralList";
import { fetchRecords } from "../http/cardInfoAPI";
import moment from "moment";
import CreatingButton from "./cardActions/CreatingButton";
import Pages from "./Pages";
import { GeneralContext } from "./AppRouter";
import { Context } from "../index";

//TODO Добавить выделение границ строки при нажатии + сделать более явной подсветку при наведении
//TODO Добавить выделение границ столбца, по которому идёт сортировка

export const RenderContext = createContext(null);

const GeneralList = observer(() => {
  const { userInfo } = useContext(Context);
  const { homeGeneral } = useContext(GeneralContext);

  const [forceRender, setForceRender] = useState(false);
  const userRoleIsUser = userInfo.userRole === "user";

  const changeCurrentStateName = (currentStateName) => {
    switch (currentStateName) {
      case "userEdit":
        return "редактируемый";
      case "checkerEdit":
        return "проверяемый";
      case "checked":
        return "готовый";
      default:
        return "-";
    }
  };

  useEffect(() => {
    fetchRecords(homeGeneral.filterPropeties, homeGeneral.page, 10).then(
      (data) => {
        //изменение формата даты с "гггг-мм-дд" на "дд-мм-гггг"
        data.rows.forEach((card) => {
          card.callDate = moment(card.callDate).format("DD-MM-YYYY");
        });
        homeGeneral.setGeneralsList(data.rows);
        homeGeneral.setTotalCount(data.count);
      }
    );
  }, [homeGeneral, homeGeneral.page, forceRender]);

  return (
    <RenderContext.Provider value={{ forceRender, setForceRender }}>
      <FilterGeneralList />
      {userRoleIsUser && <CreatingButton />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {homeGeneral.generalsHead.map((generalHead, index) => {
              return (
                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    homeGeneral.toggleSortDir(generalHead.id);
                  }}
                  key={index}
                >
                  {generalHead.naming}

                  {homeGeneral.sortBy === generalHead.id &&
                    homeGeneral.sortOrder === "asc" && <span>&darr;</span>}
                  {homeGeneral.sortBy === generalHead.id &&
                    homeGeneral.sortOrder === "desc" && <span>&uarr;</span>}
                </th>
              );
            })}
            <th>Наименование объекта</th>
          </tr>
        </thead>
        <tbody>
          {homeGeneral.sortedGeneral.map((general, index) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                key={general.cardId}
                onClick={() => {
                  // return homeGeneral.setSelectedGeneral(general);
                }}
                // active={general.cardId === homeGeneral.selectedGeneral.cardId}
              >
                <td>{index + 1}</td>
                <td>{changeCurrentStateName(general.currentState)}</td>
                <td>{general.callNumber}</td>
                <td>{general.callDate}</td>
                <td>{general.settlement}</td>
                <td>{general.address}</td>
                <td style={{ maxWidth: "350px" }}>{general.objectName}</td>
                <ButtonList
                  cardId={general.cardId}
                  currentState={general.currentState}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pages />
    </RenderContext.Provider>
  );
});

export default GeneralList;
