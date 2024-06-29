export const FetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const types = data.types.map((type) => type.type.name);
  const abilities = data.abilities.map((ability) => ability.ability.name);
  const hiddenAbilities = data.abilities
    .filter((ability) => ability.is_hidden)
    .map((ability) => ability.ability.name);
  const stats = data.stats.map((stat) => ({
    name: stat.stat.name,
    base_stat: stat.base_stat,
  }));

  return {
    types,
    abilities,
    hiddenAbilities,
    height: data.height / 10 + "m",
    weight: data.weight / 10 + "kg",
    stats,
  };
};
