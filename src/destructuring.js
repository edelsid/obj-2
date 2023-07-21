export default function destructuring(special) {
  const skills = [];
  special.forEach((entry) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = entry;
    skills.push({
      id, name, description, icon,
    });
  });
  return skills;
}
