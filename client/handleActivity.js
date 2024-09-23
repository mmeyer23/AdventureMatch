function handleA(
  activity,
  setActivity,
  selectedA,
  setSelectedA,
  skillLevel,
  setSkillLevel
) {
  if (activity && skillLevel && !selectedA.hasOwnProperty(activity)) {
    setSelectedA((prev) => ({
      ...prev,
      [activity]: skillLevel,
    }));
    setActivity('');
    setSkillLevel('');
  }
}

export default handleA;
