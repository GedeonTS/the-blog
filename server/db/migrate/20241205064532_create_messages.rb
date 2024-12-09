class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.text :message
      t.string :email
      t.string :subject

      t.timestamps
    end
  end
end
