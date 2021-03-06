@cart_products.each do |cart_product|
    json.set! cart_product.id do
        json.extract! cart_product, :id, :user_id, :inventory_id
        json.sneakerName cart_product.inventory.sneaker.name
        json.sku cart_product.inventory.sneaker.sku
        json.price cart_product.inventory.price
        json.size cart_product.inventory.size
        if cart_product.inventory.sneaker.photo.attached? 
            json.photoUrl url_for(cart_product.inventory.sneaker.photo)
        else
            json.photoUrl ""
        end 
    end
end