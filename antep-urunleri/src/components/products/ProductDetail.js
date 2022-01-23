import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({categories, product, onSave, onChange}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Ürün İsmi"
        value={product.productName}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="unitPrice"
        label="Birim Fiyatı"
        value={product.unitPrice}
        onChange={onChange}
        error="Hata"
      />
      <TextInput
        name="quantityPerUnit"
        label="Birim Miktarı"
        value={product.quantityPerUnit}
        onChange={onChange}
        error="Hata"
      />
      
      <TextInput
        name="unitsInStock"
        label="Stok Miktarı"
        value={product.unitsInStock}
        onChange={onChange}
        error="Hata"
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
        error="Hata"
      ></SelectInput>

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
