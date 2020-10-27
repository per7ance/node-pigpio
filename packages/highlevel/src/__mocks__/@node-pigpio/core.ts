/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable camelcase */
import { pigpio } from '@node-pigpio/core'

const mockedPigpio = new class implements pigpio {
    stop = jest.fn()
    set_mode = jest.fn()
    get_mode = jest.fn()
    set_pull_up_down = jest.fn()
    read = jest.fn()
    write = jest.fn()
    set_PWM_dutycycle = jest.fn()
    set_PWM_frequency = jest.fn()
    set_PWM_range = jest.fn()
    get_PWM_dutycycle = jest.fn()
    get_PWM_frequency = jest.fn()
    get_PWM_range = jest.fn()
    get_PWM_real_range = jest.fn()
    set_servo_pulsewidth = jest.fn()
    get_servo_pulsewidth = jest.fn()
    gpio_trigger = jest.fn()
    set_watchdog = jest.fn()
    read_bank_1 = jest.fn()
    read_bank_2 = jest.fn()
    clear_bank_1 = jest.fn()
    clear_bank_2 = jest.fn()
    set_bank_1 = jest.fn()
    set_bank_2 = jest.fn()
    callback = jest.fn()
    wait_for_edge = jest.fn()
    notify_open = jest.fn()
    notify_begin = jest.fn()
    notify_pause = jest.fn()
    notify_close = jest.fn()
    hardware_clock = jest.fn()
    hardware_PWM = jest.fn()
    set_glitch_filter = jest.fn()
    set_noise_filter = jest.fn()
    set_pad_strength = jest.fn()
    get_pad_strength = jest.fn()
    shell = jest.fn()
    custom_1 = jest.fn()
    custom_2 = jest.fn()
    event_callback = jest.fn()
    event_trigger = jest.fn()
    wait_for_event = jest.fn()
    store_script = jest.fn()
    run_script = jest.fn()
    update_script = jest.fn()
    script_status = jest.fn()
    stop_script = jest.fn()
    delete_script = jest.fn()
    i2c_open = jest.fn(() => new Promise<number>(resolve => resolve(1)))
    i2c_close = jest.fn()
    i2c_write_quick = jest.fn()
    i2c_read_byte = jest.fn()
    i2c_write_byte = jest.fn()
    i2c_read_byte_data = jest.fn()
    i2c_write_byte_data = jest.fn()
    i2c_read_word_data = jest.fn()
    i2c_write_word_data = jest.fn()
    i2c_read_block_data = jest.fn()
    i2c_write_block_data = jest.fn()
    i2c_read_i2c_block_data = jest.fn()
    i2c_write_i2c_block_data = jest.fn()
    i2c_read_device = jest.fn()
    i2c_write_device = jest.fn()
    i2c_process_call = jest.fn()
    i2c_block_process_call = jest.fn()
    i2c_zip = jest.fn()
    bb_i2c_open = jest.fn()
    bb_i2c_close = jest.fn()
    bb_i2c_zip = jest.fn()
    bsc_xfer = jest.fn()
    bsc_i2c = jest.fn()
    serial_open = jest.fn(() => new Promise<number>(resolve => resolve(2)))
    serial_close = jest.fn()
    serial_read_byte = jest.fn()
    serial_write_byte = jest.fn()
    serial_read = jest.fn()
    serial_write = jest.fn()
    serial_data_available = jest.fn()
    bb_serial_read_open = jest.fn()
    bb_serial_read_close = jest.fn()
    bb_serial_invert = jest.fn()
    bb_serial_read = jest.fn()
    spi_open = jest.fn(() => new Promise<number>(resolve => resolve(3)))
    spi_close = jest.fn()
    spi_read = jest.fn()
    spi_write = jest.fn()
    spi_xfer = jest.fn()
    bb_spi_open = jest.fn()
    bb_spi_close = jest.fn()
    bb_spi_xfer = jest.fn()
    file_open = jest.fn()
    file_close = jest.fn()
    file_read = jest.fn()
    file_write = jest.fn()
    file_seek = jest.fn()
    file_list = jest.fn()
    wave_clear = jest.fn()
    wave_add_new = jest.fn()
    wave_add_generic = jest.fn()
    wave_add_serial = jest.fn()
    wave_create = jest.fn()
    wave_create_and_pad = jest.fn()
    wave_delete = jest.fn()
    wave_send_once = jest.fn()
    wave_send_repeat = jest.fn()
    wave_send_using_mode = jest.fn()
    wave_chain = jest.fn()
    wave_tx_at = jest.fn()
    wave_tx_busy = jest.fn()
    wave_tx_stop = jest.fn()
    wave_get_cbs = jest.fn()
    wave_get_max_cbs = jest.fn()
    wave_get_micros = jest.fn()
    wave_get_max_micros = jest.fn()
    wave_get_pulses = jest.fn()
    wave_get_max_pulses = jest.fn()
    get_current_tick = jest.fn()
    get_hardware_revision = jest.fn()
    get_pigpio_version = jest.fn()
    connected = false;
}()

export function pi (host?: string, port?: number): Promise<pigpio> {
    return new Promise<pigpio>(resolve => resolve(mockedPigpio))
}
const mocked = {
    ...jest.requireActual('@node-pigpio/core'),
    pi
}

module.exports = mocked
export default mocked
