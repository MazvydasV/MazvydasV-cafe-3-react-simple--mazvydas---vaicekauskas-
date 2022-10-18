import * as React from 'react';
import { Button, Divider } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { AutoSelectField, CheckboxGroupField, RangeField } from 'components';
import CategoryService from 'services/category-service';
import MaterialTypeService from 'services/material-type-service';
import ColorService from 'services/color-service';
import FilterDrawer from './filter-drawer';

const MIN = 0;
const MAX = 432;

const Filters = ({ drawerWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSetupDone, setIntialSetupDone] = React.useState(false);

  const [categories, setCategories] = React.useState([]);
  const [materialTypes, setMaterialTypes] = React.useState([]);
  const [colors, setColors] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([MIN, MAX]);
  const [category, setCategory] = React.useState(null);
  const [selectedMaterialTypes, setSelectedMaterialTypes] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);

  const handlePriceRangeChange = (_, [min, max]) => {
    if (min === MIN) {
      searchParams.delete('price_gte');
    } else {
      searchParams.set('price_gte', min);
    }
    if (max === MAX) {
      searchParams.delete('price_lte');
    } else {
      searchParams.set('price_lte', max);
    }

    setSearchParams(searchParams);
  };

  const handleCategoryChange = (_, newCategory) => {
    if (newCategory) {
      searchParams.set('categoryId', newCategory.id);
    } else {
      searchParams.delete('categoryId');
    }

    setSearchParams(searchParams);
    setCategory(newCategory);
  };

  const handleMaterialTypesChange = (_, newMaterialTypes) => {
    const ids = newMaterialTypes.map((materialType) => materialType.id);
    searchParams.delete('materialTypeId');
    ids.forEach((id) => searchParams.append('materialTypeId', id));

    setSearchParams(searchParams);
    setSelectedMaterialTypes(newMaterialTypes);
  };

  const handleColorChange = (_, newColors) => {
    const ids = newColors.map((color) => color.id);
    searchParams.delete('colorId');
    ids.forEach((id) => searchParams.append('colorId', id));

    setSearchParams(searchParams);
    setSelectedColors(newColors);
  };

  const deleteFilters = () => {
    searchParams.delete('price_gte');
    searchParams.delete('price_lte');
    searchParams.delete('categoryId');
    searchParams.delete('materialTypeId');
    searchParams.delete('colorId');

    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedMaterialTypes, fetchedColors] = await Promise.all([
        CategoryService.fetchAll(),
        MaterialTypeService.fetchAll(),
        ColorService.fetchAll(),
      ]);
      const priceMinInit = searchParams.get('price_gte') ?? MIN;
      const priceMaxInit = searchParams.get('price_lte') ?? MAX;
      setPriceRange([priceMinInit, priceMaxInit]);

      const categoryId = searchParams.get('categoryId');
      if (categoryId) {
        const categoryInit = fetchedCategories.find((cat) => cat.id === categoryId) ?? null;
        setCategory(categoryInit);
      }

      const selectedMaterialTypesInit = searchParams
        .getAll('materialTypeId')
        .map((id) => fetchedMaterialTypes.find((material) => material.id === id))
        .filter((material) => material !== undefined);
      setSelectedMaterialTypes(selectedMaterialTypesInit);

      const selectedColorsInit = searchParams
        .getAll('colorId')
        .map((id) => fetchedColors.find((color) => color.id === id))
        .filter((color) => color !== undefined);
      setSelectedColors(selectedColorsInit);

      setCategories(fetchedCategories);
      setMaterialTypes(fetchedMaterialTypes);
      setColors(fetchedColors);

      setIntialSetupDone(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterDrawer drawerWidth={drawerWidth}>
      {initialSetupDone && (
        <>
          <RangeField
            label="Kaina"
            value={priceRange}
            onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
            onChangeCommitted={handlePriceRangeChange}
            min={MIN}
            max={MAX}
          />
          <Divider sx={{ my: 2 }} />

          <AutoSelectField
            options={categories}
            value={category}
            onChange={handleCategoryChange}
          />
          <Divider sx={{ my: 2 }} />

          <CheckboxGroupField
            label="Medžiaga"
            options={materialTypes}
            value={selectedMaterialTypes}
            onChange={handleMaterialTypesChange}
          />
          <Divider sx={{ my: 2 }} />

          <CheckboxGroupField
            label="Spalva"
            options={colors}
            value={selectedColors}
            onChange={handleColorChange}
          />
          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={deleteFilters}
          >
            Pašalinti filtrus
          </Button>
        </>
      )}

    </FilterDrawer>
  );
};

export default Filters;
