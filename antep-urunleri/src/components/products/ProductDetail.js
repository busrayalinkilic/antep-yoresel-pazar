import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({categories, product, onSave, onChange,errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Ürün İsmi"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />
      <TextInput
        name="unitPrice"
        label="Birim Fiyatı"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />
      <TextInput
        name="quantityPerUnit"
        label="Birim Miktarı"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />
      
      <TextInput
        name="unitsInStock"
        label="Stok Miktarı"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <SelectInput
        name="categoryId"
        label="Kategori"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName
        }))}onChange={onChange}
        error={errors.categoryId}
      ></SelectInput>

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
