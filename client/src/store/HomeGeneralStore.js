import { makeAutoObservable } from "mobx";
import { SORT_ASC, SORT_DESC } from "../utils/consts";
import moment from "moment";

//TODO выяснить, нужна ли приписка (город, посёлок, деревня,...) к населённому пункту

class HomeGeneralStore {
  constructor() {
    this._generals = [];

    this._generals_head = [
      { naming: "Ранг пожара", id: "callNumber" },
      { naming: "Дата", id: "callDate" },
      { naming: "Населённый пункт", id: "settlement" },
      { naming: "Адрес места пожара", id: "address" },
    ];

    this._selectedGeneral = {};

    this._sortBy = null;
    this._sortOrder = null;

    this._page = 1;
    this._totalCount = 0;
    this._limit = 10;

    this._filterPropeties = {
      startCallDate: moment("01-01-1970", "DD-MM-YYYY", true).format(),
      endCallDate: moment(
        moment().format("DD-MM-YYYY"),
        "DD-MM-YYYY",
        true
      ).format(),
      callNumber: "null",
      settlement: "null",
    };

    this._generals_filter = [
      {
        naming: "Населённый пункт",
        options: [
          "Апатиты",
          "Гаджиево",
          "Заозёрск",
          "Заполярный",
          "Кандалакша",
          "Кировск",
          "Ковдор",
          "Кола",
          "Луостари",
          "Мончегорск",
          "Мурманск",
          "Мурмаши",
          "Никель",
          "Оленегорск",
          "Печенга",
          "Полярные Зори",
          "Полярный",
          "Ревда",
          "Североморск",
          "Снежногорск",
          "Умба",
        ],
        category: "settlement",
      },
      {
        naming: "Ранг пожара",
        options: ["-", "1", "1-БИС", "2", "3"],
        category: "callNumber",
      },
    ];

    makeAutoObservable(this);
  }

  //сеттеры

  //сеттеры пагинации
  setPage(num) {
    this._page = num;
  }
  setTotalCount(num) {
    this._totalCount = num;
  }
  setLimit(num) {
    this._limit = num;
  }

  //сеттеры фильтрации
  setFilterPropeties(name, value) {
    this._filterPropeties[name] = value;
    this.setPage(1);
  }

  //сеттеры генерации списков
  setGeneralsList(generals) {
    this._generals = generals;
  }
  setGeneralsHead(generalsHead) {
    this._generals_head = generalsHead;
  }
  // setSelectedGeneral(general) {
  //   this._selectedGeneral = general;
  // }

  //сеттеры сортировки
  setSortBy(name) {
    this._sortBy = name;
  }
  setSortOrder(order) {
    this._sortOrder = order;
  }

  //геттеры

  //геттеры пагинации

  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
  }

  //геттеры генерации списков
  get generalsList() {
    return this._generals;
  }
  get generalsHead() {
    return this._generals_head;
  }
  get generalsFilter() {
    return this._generals_filter;
  }
  // get selectedGeneral() {
  //   return this._selectedGeneral;
  // }

  //геттеры сортировки
  get sortBy() {
    return this._sortBy;
  }
  get sortOrder() {
    return this._sortOrder;
  }

  //геттеры фильтрации

  get filterPropeties() {
    return this._filterPropeties;
  }

  //! меняет порядок сортировки даже при клике на другой столбец
  //экшены
  toggleSortDir(name) {
    this.setSortOrder(this._sortOrder === SORT_ASC ? SORT_DESC : SORT_ASC);
    this.setSortBy(name);
  }

  //вычисляемые функции
  get sortedGeneral() {
    return this._generals.slice().sort((a, b) => {
      const sortOrder = this._sortOrder === SORT_ASC ? 1 : -1; //множитель, позволяющий не дублировать код при изменении порядка сортировки
      const aValue = a[this._sortBy];
      const bValue = b[this._sortBy];

      if (moment(aValue, "DD-MM-YYYY", true).isValid()) {
        return (
          sortOrder *
          moment(aValue, "DD-MM-YYYY", true).diff(
            moment(bValue, "DD-MM-YYYY", true)
          )
        );
      }

      if (Number.isInteger(aValue)) {
        return sortOrder * (aValue - bValue);
      }

      return sortOrder * (aValue > bValue ? 1 : aValue < bValue ? -1 : 0);
    });
  }
}

const homeGeneral = new HomeGeneralStore();

export default homeGeneral;
