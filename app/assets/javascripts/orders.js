        var productsList = [];
        var position = 0;


        var loadProductList = function() {
            $.getJSON('/products.json', function(data) {
                productsList = data;
            });
        };
        var appendProductRow = function(rowCode) {
            addProductId(rowCode);
            addQuantity(rowCode);
            addPrice(rowCode);
            addDestroyElement(rowCode);
        };

        var addProductId = function(rowCode) {
            var product_id_field = "order_line_items_attributes_" + position + "_product_id";
            var product_name_field = "order[line_items_attributes][" + position + "][product_id]";

            rowCode.append($("<label for='" + product_id_field + "'> Product </label>"));
            var productSelect = $("<select id='" + product_id_field + "' name='" + product_name_field + "' />").appendTo(rowCode);
            $(productsList).each(function() {
                productSelect.append($("<option>").attr('value', this.id).text(this.title));
            });
            productSelect.append("</select>");

        }

        var addQuantity = function(rowCode) {
            var quantity_id_field = "order_line_items_attributes_" + position + "_quantity";
            var quantity_name_field = "order[line_items_attributes][" + position + "][quantity]";

            rowCode.append($("<label for='" + quantity_id_field + "'> Quantity </label>"));
            rowCode.append($("<input id='" + quantity_id_field + "' name='" + quantity_name_field + "' type='text'/>"));
        }

        var addPrice = function(rowCode) {
            var price_id_field = "order_line_items_attributes_" + position + "_price";
            var price_name_field = "order[line_items_attributes][" + position + "][price]";

            rowCode.append($("<label for='" + price_id_field + "'> Price </label>"));
            rowCode.append($("<input id='" + price_id_field + "' name='" + price_name_field + "' type='text'/>"));
        }

        var addDestroyElement = function(rowCode) {
            var destroy_id_field = "order_line_items_attributes_" + position + "__destroy";
            var destroy_name_field = "order[line_items_attributes][" + position + "][_destroy]";
            rowCode.append($("<input id='" + destroy_id_field + "' name='" + destroy_name_field + "' type='hidden' value='false'>"));
            rowCode.append($(" <img src='../assets/delete.png' width='20px' height='20px'/>"));
        }

        var createNewProductRow = function() {
            var rowBlock = $('<div/>');
            rowBlock.addClass('field');
            appendProductRow(rowBlock);
            $('#line_items_data').append(rowBlock);
            position++;
        };
        var init = function() {
            position = $('#add_product_row').data('row-number');
            loadProductList();

            $('#add_product_row').on('click', function(e) {
                createNewProductRow();
            });
        };


    $(document).on("page:change", function() {
        return init();
    });

