json.array! @sneakers do |sneaker|
    json.extract! sneaker, :sku, :name, :brand

     if sneaker.photo.attached? 
        json.photoUrl url_for(sneaker.photo)
     else
        json.photoUrl ""
     end
end