require 'test_helper'

class OrdersControllerTest < ActionController::TestCase
  setup do
    @order = orders(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:orders)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create order" do
    assert_difference('Order.count') do
      post :create, order: { order_status: @order.order_status, payment_method: @order.payment_method, purchase_surname: @order.purchase_surname, purchaser_name: @order.purchaser_name, shipping_address: @order.shipping_address, shipping_city: @order.shipping_city }
    end

    assert_redirected_to order_path(assigns(:order))
  end

  test "should show order" do
    get :show, id: @order
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @order
    assert_response :success
  end

  test "should update order" do
    patch :update, id: @order, order: { order_status: @order.order_status, payment_method: @order.payment_method, purchase_surname: @order.purchase_surname, purchaser_name: @order.purchaser_name, shipping_address: @order.shipping_address, shipping_city: @order.shipping_city }
    assert_redirected_to order_path(assigns(:order))
  end

  test "should destroy order" do
    assert_difference('Order.count', -1) do
      delete :destroy, id: @order
    end

    assert_redirected_to orders_path
  end
end
