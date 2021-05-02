const range = (size, startAt = 0) => {
  return size > 0 ? [...Array(size).keys()].map((i) => i + startAt) : [];
};

export default range;
