class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.datetime :in_stock_date
      t.string :manufacturer
      t.integer :quantity

      t.timestamps
    end
  end
end
