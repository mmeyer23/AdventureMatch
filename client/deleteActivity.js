function deleteActivity(activity, setSelectedA) {
  setSelectedA((prevSelected) => {
    // Only filter out items that are not empty strings
    const newSelected = { ...prevSelected };
    delete newSelected[activity];
    return newSelected;
  });
}

export default deleteActivity;
