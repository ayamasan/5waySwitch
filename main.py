def on_button_pressed_a():
    pins.i2c_write_number(3, 1, NumberFormat.INT8_LE, False)
    ReadSwitch()
input.on_button_pressed(Button.A, on_button_pressed_a)

def ReadSwitch():
    global buf2
    buf = pins.i2c_read_buffer(3, 9)
    
buf2 = 0
buf22: List[number] = []
bluetooth.start_uart_service()