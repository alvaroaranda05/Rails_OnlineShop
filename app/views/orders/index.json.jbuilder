json.array!(@orders) do |order|
  json.extract! order, :id, :order_status, :payment_method, :shipping_address, :shipping_city, :purchaser_name, :purchase_surname
  json.url order_url(order, format: :json)
end
