import React from "react";
import { observer } from "mobx-react-lite";
import { Pagination } from "react-bootstrap";
import homeGeneral from "../store/HomeGeneralStore";

const Pages = observer(() => {
  const pageCount = Math.ceil(homeGeneral.totalCount / homeGeneral.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((page) => {
        return (
          <Pagination.Item
            key={page}
            active={homeGeneral.page === page}
            onClick={() => homeGeneral.setPage(page)}
          >
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
});

export default Pages;
