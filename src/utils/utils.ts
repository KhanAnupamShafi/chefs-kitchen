const getImagePrefix = () => {
  return process.env.NODE_ENV === "production" ? "/chefs-kitchen/" : "";
};

export { getImagePrefix };
