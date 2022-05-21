const apiBase = "https://swapi.dev/api/";

const getResource = async (url) => {
  const res = await fetch(`${apiBase}${url}`);

  if (!res.ok) {
    throw new Error("User Error");
  }

  return await res.json();
};

const prepareData = async (data, type) => {
  switch (type) {
    case "Planet":
      return {
        id: data[1],
        type: "Planet",
        name: data[0].name,
        img: `https://starwars-visualguide.com/assets/img/planets/${data[1]}.jpg`,
        info: [
          { Population: data[0].population },
          { Diameter: data[0].diameter },
          { "Rotation period": data[0].rotation_period },
        ],
      };
    case "Person":
      return {
        id: data[1],
        type: "Person",
        name: data[0].name,
        img: `https://starwars-visualguide.com/assets/img/characters/${data[1]}.jpg`,
        info: [
          { Height: data[0].height },
          { "Hair color": data[0].hair_color },
          { Gender: data[0].gender },
          { "Birth year": data[0].birth_year },
        ],
      };
    case "Starship":
      return {
        id: data[1],
        type: "Starship",
        name: data[0].name,
        img: `https://starwars-visualguide.com/assets/img/starships/${data[1]}.jpg`,
        info: [
          { Model: data[0].model },
          { Crew: data[0].crew },
          { Passengers: data[0].passengers },
          { "Max atmosphering speed": data[0].max_atmosphering_speed },
        ],
      };

    default:
      return null;
  }
};

export const getPerson = async (id) => {
  return await getResource(`people/${id}`).then((res) =>
    prepareData([res, id], "Person")
  );
};

const getAllPersons = async () => {
  const data = [];
  await getResource(`people/`).then((res) =>
    res.results.forEach((item) => {
      data.push({ name: item.name, id: item.url.match(/\/([0-9]*)\/$/)[1] });
    })
  );
  return data;
};

export const getPlanet = async (id) => {
  return await getResource(`planets/${id}`).then((res) =>
    prepareData([res, id], "Planet")
  );
};

const getAllPlanets = async () => {
  const data = [];
  await getResource(`planets/`).then((res) =>
    res.results.forEach((item) => {
      data.push({ name: item.name, id: item.url.match(/\/([0-9]*)\/$/)[1] });
    })
  );
  return data;
};

export const getStarship = async (id) => {
  return await getResource(`starships/${id}`).then((res) =>
    prepareData([res, id], "Starship")
  );
};

const getAllStarships = async () => {
  const data = [];
  await getResource(`starships/`).then((res) =>
    res.results.forEach((item) => {
      data.push({ name: item.name, id: item.url.match(/\/([0-9]*)\/$/)[1] });
    })
  );
  return data;
};

const getRandomID = () => {
  return Math.floor(Math.random() * 25 + 2);
};

const getRandomPlanet = async () => {
  const id = getRandomID();
  return await getPlanet(id);
};

const getRandomPerson = async () => {
  const id = getRandomID();
  return await getPerson(id);
};

const getRandomStarship = async () => {
  const id = getRandomID();
  return await getStarship(id);
};

const getAllFunctions = (category) => {
  switch (category) {
    case "Planet":
      return {
        getRandom: getRandomPlanet,
        getAll: getAllPlanets,
        getSingle: getPlanet,
      };
    case "Person":
      return {
        getRandom: getRandomPerson,
        getAll: getAllPersons,
        getSingle: getPerson,
      };
    case "Starship":
      return {
        getRandom: getRandomStarship,
        getAll: getAllStarships,
        getSingle: getStarship,
      };
    default:
      return null;
  }
};

export { prepareData, getAllFunctions };
