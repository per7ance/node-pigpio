// Do not edit this file. generated by getcommands.ts
const value = {
  MODES: {
    cmdNo: 0,
    p1: 'gpio',
    p2: 'mode',
    p3: '0',
    extension: ['-'],
  },
  MODEG: {
    cmdNo: 1,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PUD: {
    cmdNo: 2,
    p1: 'gpio',
    p2: 'pud',
    p3: '0',
    extension: ['-'],
  },
  READ: {
    cmdNo: 3,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WRITE: {
    cmdNo: 4,
    p1: 'gpio',
    p2: 'level',
    p3: '0',
    extension: ['-'],
  },
  PWM: {
    cmdNo: 5,
    p1: 'gpio',
    p2: 'dutycycle',
    p3: '0',
    extension: ['-'],
  },
  PRS: {
    cmdNo: 6,
    p1: 'gpio',
    p2: 'range',
    p3: '0',
    extension: ['-'],
  },
  PFS: {
    cmdNo: 7,
    p1: 'gpio',
    p2: 'frequency',
    p3: '0',
    extension: ['-'],
  },
  SERVO: {
    cmdNo: 8,
    p1: 'gpio',
    p2: 'pulsewidth',
    p3: '0',
    extension: ['-'],
  },
  WDOG: {
    cmdNo: 9,
    p1: 'gpio',
    p2: 'timeout',
    p3: '0',
    extension: ['-'],
  },
  BR1: {
    cmdNo: 10,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  BR2: {
    cmdNo: 11,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  BC1: {
    cmdNo: 12,
    p1: 'bits',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  BC2: {
    cmdNo: 13,
    p1: 'bits',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  BS1: {
    cmdNo: 14,
    p1: 'bits',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  BS2: {
    cmdNo: 15,
    p1: 'bits',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  TICK: {
    cmdNo: 16,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  HWVER: {
    cmdNo: 17,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  NO: {
    cmdNo: 18,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  NB: {
    cmdNo: 19,
    p1: 'handle',
    p2: 'bits',
    p3: '0',
    extension: ['-'],
  },
  NP: {
    cmdNo: 20,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  NC: {
    cmdNo: 21,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PRG: {
    cmdNo: 22,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PFG: {
    cmdNo: 23,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PRRG: {
    cmdNo: 24,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  HELP: {
    cmdNo: 25,
    p1: 'N/A',
    p2: 'N/A',
    p3: 'N/A',
    extension: ['N/A'],
  },
  PIGPV: {
    cmdNo: 26,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVCLR: {
    cmdNo: 27,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVAG: {
    cmdNo: 28,
    p1: '0',
    p2: '0',
    p3: '12*X',
    extension: ['gpioPulse_t pulse[X]'],
  },
  WVAS: {
    cmdNo: 29,
    p1: 'gpio',
    p2: 'baud',
    p3: '12+X',
    extension: [
      'uint32_t databits',
      'uint32_t stophalfbits',
      'uint32_t offset',
      'uint8_t data[X]',
    ],
  },
  WVBSY: {
    cmdNo: 32,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVHLT: {
    cmdNo: 33,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVSM: {
    cmdNo: 34,
    p1: 'subcmd',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVSP: {
    cmdNo: 35,
    p1: 'subcmd',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVSC: {
    cmdNo: 36,
    p1: 'subcmd',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  TRIG: {
    cmdNo: 37,
    p1: 'gpio',
    p2: 'pulselen',
    p3: '4',
    extension: ['uint32_t level'],
  },
  PROC: {
    cmdNo: 38,
    p1: '0',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t text[X]'],
  },
  PROCD: {
    cmdNo: 39,
    p1: 'script_id',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PROCR: {
    cmdNo: 40,
    p1: 'script_id',
    p2: '0',
    p3: '4*X',
    extension: ['uint32_t pars[X]'],
  },
  PROCS: {
    cmdNo: 41,
    p1: 'script_id',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  SLRO: {
    cmdNo: 42,
    p1: 'gpio',
    p2: 'baud',
    p3: '4',
    extension: ['uint32_t databits'],
  },
  SLR: {
    cmdNo: 43,
    p1: 'gpio',
    p2: 'count',
    p3: '0',
    extension: ['-'],
  },
  SLRC: {
    cmdNo: 44,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PROCP: {
    cmdNo: 45,
    p1: 'script_id',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  MICS: {
    cmdNo: 46,
    p1: 'micros',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  MILS: {
    cmdNo: 47,
    p1: 'millis',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PARSE: {
    cmdNo: 48,
    p1: 'N/A',
    p2: 'N/A',
    p3: 'N/A',
    extension: ['N/A'],
  },
  WVCRE: {
    cmdNo: 49,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVDEL: {
    cmdNo: 50,
    p1: 'wave_id',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVTX: {
    cmdNo: 51,
    p1: 'wave_id',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVTXR: {
    cmdNo: 52,
    p1: 'wave_id',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVNEW: {
    cmdNo: 53,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  I2CO: {
    cmdNo: 54,
    p1: 'bus',
    p2: 'device',
    p3: '4',
    extension: ['uint32_t flags'],
  },
  I2CC: {
    cmdNo: 55,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  I2CRD: {
    cmdNo: 56,
    p1: 'handle',
    p2: 'count',
    p3: '0',
    extension: ['-'],
  },
  I2CWD: {
    cmdNo: 57,
    p1: 'handle',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  I2CWQ: {
    cmdNo: 58,
    p1: 'handle',
    p2: 'bit',
    p3: '0',
    extension: ['-'],
  },
  I2CRS: {
    cmdNo: 59,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  I2CWS: {
    cmdNo: 60,
    p1: 'handle',
    p2: 'byte',
    p3: '0',
    extension: ['-'],
  },
  I2CRB: {
    cmdNo: 61,
    p1: 'handle',
    p2: 'register',
    p3: '0',
    extension: ['-'],
  },
  I2CWB: {
    cmdNo: 62,
    p1: 'handle',
    p2: 'register',
    p3: '4',
    extension: ['uint32_t byte'],
  },
  I2CRW: {
    cmdNo: 63,
    p1: 'handle',
    p2: 'register',
    p3: '0',
    extension: ['-'],
  },
  I2CWW: {
    cmdNo: 64,
    p1: 'handle',
    p2: 'register',
    p3: '4',
    extension: ['uint32_t word'],
  },
  I2CRK: {
    cmdNo: 65,
    p1: 'handle',
    p2: 'register',
    p3: '0',
    extension: ['-'],
  },
  I2CWK: {
    cmdNo: 66,
    p1: 'handle',
    p2: 'register',
    p3: 'X',
    extension: ['uint8_t bvs[X]'],
  },
  I2CRI: {
    cmdNo: 67,
    p1: 'handle',
    p2: 'register',
    p3: '4',
    extension: ['uint32_t num'],
  },
  I2CWI: {
    cmdNo: 68,
    p1: 'handle',
    p2: 'register',
    p3: 'X',
    extension: ['uint8_t bvs[X]'],
  },
  I2CPC: {
    cmdNo: 69,
    p1: 'handle',
    p2: 'register',
    p3: '4',
    extension: ['uint32_t word'],
  },
  I2CPK: {
    cmdNo: 70,
    p1: 'handle',
    p2: 'register',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  SPIO: {
    cmdNo: 71,
    p1: 'channel',
    p2: 'baud',
    p3: '4',
    extension: ['uint32_t flags'],
  },
  SPIC: {
    cmdNo: 72,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  SPIR: {
    cmdNo: 73,
    p1: 'handle',
    p2: 'count',
    p3: '0',
    extension: ['-'],
  },
  SPIW: {
    cmdNo: 74,
    p1: 'handle',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  SPIX: {
    cmdNo: 75,
    p1: 'handle',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  SERO: {
    cmdNo: 76,
    p1: 'baud',
    p2: 'flags',
    p3: 'X',
    extension: ['uint8_t device[X]'],
  },
  SERC: {
    cmdNo: 77,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  SERRB: {
    cmdNo: 78,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  SERWB: {
    cmdNo: 79,
    p1: 'handle',
    p2: 'byte',
    p3: '0',
    extension: ['-'],
  },
  SERR: {
    cmdNo: 80,
    p1: 'handle',
    p2: 'count',
    p3: '0',
    extension: ['-'],
  },
  SERW: {
    cmdNo: 81,
    p1: 'handle',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  SERDA: {
    cmdNo: 82,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  GDC: {
    cmdNo: 83,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  GPW: {
    cmdNo: 84,
    p1: 'gpio',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  HC: {
    cmdNo: 85,
    p1: 'gpio',
    p2: 'frequency',
    p3: '0',
    extension: ['-'],
  },
  HP: {
    cmdNo: 86,
    p1: 'gpio',
    p2: 'frequency',
    p3: '4',
    extension: ['uint32_t dutycycle'],
  },
  CF1: {
    cmdNo: 87,
    p1: 'arg1',
    p2: 'arg2',
    p3: 'X',
    extension: ['uint8_t argx[X]'],
  },
  CF2: {
    cmdNo: 88,
    p1: 'arg1',
    p2: 'retMax',
    p3: 'X',
    extension: ['uint8_t argx[X]'],
  },
  BI2CC: {
    cmdNo: 89,
    p1: 'sda',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  BI2CO: {
    cmdNo: 90,
    p1: 'sda',
    p2: 'scl',
    p3: '4',
    extension: ['uint32_t baud'],
  },
  BI2CZ: {
    cmdNo: 91,
    p1: 'sda',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  I2CZ: {
    cmdNo: 92,
    p1: 'handle',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  WVCHA: {
    cmdNo: 93,
    p1: '0',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  SLRI: {
    cmdNo: 94,
    p1: 'gpio',
    p2: 'invert',
    p3: '0',
    extension: ['-'],
  },
  CGI: {
    cmdNo: 95,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  CSI: {
    cmdNo: 96,
    p1: 'config',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  FG: {
    cmdNo: 97,
    p1: 'gpio',
    p2: 'steady',
    p3: '0',
    extension: ['-'],
  },
  FN: {
    cmdNo: 98,
    p1: 'gpio',
    p2: 'steady',
    p3: '4',
    extension: ['uint32_t active'],
  },
  NOIB: {
    cmdNo: 99,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  WVTXM: {
    cmdNo: 100,
    p1: 'wave_id',
    p2: 'mode',
    p3: '0',
    extension: ['-'],
  },
  WVTAT: {
    cmdNo: 101,
    p1: '0',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PADS: {
    cmdNo: 102,
    p1: 'pad',
    p2: 'strength',
    p3: '0',
    extension: ['-'],
  },
  PADG: {
    cmdNo: 103,
    p1: 'pad',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  FO: {
    cmdNo: 104,
    p1: 'mode',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t file[X]'],
  },
  FC: {
    cmdNo: 105,
    p1: 'handle',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  FR: {
    cmdNo: 106,
    p1: 'handle',
    p2: 'count',
    p3: '0',
    extension: ['-'],
  },
  FW: {
    cmdNo: 107,
    p1: 'handle',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  FS: {
    cmdNo: 108,
    p1: 'handle',
    p2: 'offset',
    p3: '4',
    extension: ['uint32_t from'],
  },
  FL: {
    cmdNo: 109,
    p1: 'count',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t pattern[X]'],
  },
  SHELL: {
    cmdNo: 110,
    p1: 'len(name)',
    p2: '0',
    p3: 'len(name)+\n1+\nlen(string)',
    extension: [
      'uint8_t name[len(name)]',
      'uint8_t null (0)',
      'uint8_t string[len(string)]',
    ],
  },
  BSPIC: {
    cmdNo: 111,
    p1: 'CS',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  BSPIO: {
    cmdNo: 112,
    p1: 'CS',
    p2: '0',
    p3: '20',
    extension: [
      'uint32_t MISO',
      'uint32_t MOSI',
      'uint32_t SCLK',
      'uint32_t baud',
      'uint32_t spi_flags',
    ],
  },
  BSPIX: {
    cmdNo: 113,
    p1: 'CS',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  BSCX: {
    cmdNo: 114,
    p1: 'control',
    p2: '0',
    p3: 'X',
    extension: ['uint8_t data[X]'],
  },
  EVM: {
    cmdNo: 115,
    p1: 'handle',
    p2: 'bits',
    p3: '0',
    extension: ['-'],
  },
  EVT: {
    cmdNo: 116,
    p1: 'event',
    p2: '0',
    p3: '0',
    extension: ['-'],
  },
  PROCU: {
    cmdNo: 117,
    p1: 'script_id',
    p2: '0',
    p3: '4*X',
    extension: ['uint32_t pars[X]'],
  },
} as const
export default value
