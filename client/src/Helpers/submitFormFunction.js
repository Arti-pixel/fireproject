const submitFormFunction = ({
  e,
  cardId,
  userRoleIsChecker,
  updateContent,
  updateComment,
  content,
  comments,
}) => {
  e.preventDefault();
  if (!userRoleIsChecker) {
    return updateContent(cardId, {
      ...content,
    });
  }
  updateComment(cardId, {
    ...comments,
  });

  const checkExistComments = Object.entries(comments).every(([key, value]) => {
    return key !== "cardId" ? Boolean(!value) : true;
  });

  updateContent(cardId, {
    ...content,
    hasComments: !checkExistComments,
  });

  return;
};

export default submitFormFunction;
