const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/materialTypes`);
  const materialTypes = await response.json();

  return materialTypes;
};

const MaterialTypeService = {
  fetchAll,
};

export default MaterialTypeService;
