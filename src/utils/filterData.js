const filterData = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter((datum) => {
    const datumTitle = datum.title.toLowerCase();
    const datumSpeaker = datum.speaker.toLowerCase();
    return datumTitle.includes(query) || datumSpeaker.includes(query);
  });
};

export default filterData;
