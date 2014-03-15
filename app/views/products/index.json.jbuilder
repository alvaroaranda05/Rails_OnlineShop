json.array!(@products) do |product|
  json.extract! product, :id, :title, :description, :in_stock_date, :manufacturer, :quantity, :category
  json.url product_url(product, format: :json)
end
