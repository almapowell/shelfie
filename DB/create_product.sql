insert into products
(product_id, image_url, name, price)
values ($1, $2, $3, $4);

select *
from products;