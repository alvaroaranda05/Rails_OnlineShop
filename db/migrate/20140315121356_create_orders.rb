class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :order_status
      t.string :payment_method
      t.string :shipping_address
      t.string :shipping_city
      t.string :purchaser_name
      t.string :purchase_surname

      t.timestamps
    end
  end
end
