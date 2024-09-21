function handleA(
  activity,
  setActivity,
  selectedA,
  setSelectedA,
  skillLevel,
  setSkillLevel
) {
  if (
    activity &&
    skillLevel &&
    !selectedA.some((entry) => entry.startsWith(activity))
  ) {
    const entry = `${activity} - ${skillLevel}`;
    setSelectedA((prev) => [...prev, entry]);
    setActivity('');
    setSkillLevel('');
  }
}

export default handleA;
