function deleteActivity(index, setSelectedA) {
  setSelectedA((other) => {
    // Only filter out items that are not empty strings
    return other.filter((_, i) => i !== index);
  });
}

export default deleteActivity;
