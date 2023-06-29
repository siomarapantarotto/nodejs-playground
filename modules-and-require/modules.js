//const xyz = require('./people')
const { people, ages } = require('./people') // prefer this pattern to import

// Log xyz to console
//console.log('\nInside modules.js file logging xyz:')
//console.log(xyz)      // without export xyx is an empty object
//console.log(people)   // and without export people is not defined - error

//console.log(xyz.thePeople, xyz.theAges)
//console.log(xyz.people, xyz.ages)

console.log('\nInside modules.js file:')
console.log(people,ages)    // names shold match the import

// Operating System built in objects
const os = require('os')    // this is built in to Node itself
console.log(os)             // lists available OS objects 
//console.log(os.platform(), os.homedir())
console.log(os.platform())
console.log(os.homedir())   // home directory of the current computer

/*
Result:
D:\Workspace_NodeJS\nodejs-playground>node modules-and-require/modules
Inside modules.js file:
[ 'Larry', 'Bill', 'James', 'Elon' ] [ 60, 65, 70, 50 ]
{
  arch: [Function: arch] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  availableParallelism: [Function: getAvailableParallelism] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  cpus: [Function: cpus],
  endianness: [Function: endianness] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  freemem: [Function: getFreeMem] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  getPriority: [Function: getPriority],
  homedir: [Function: __node_internal_checkError] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  hostname: [Function: __node_internal_checkError] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  loadavg: [Function: loadavg],
  networkInterfaces: [Function: networkInterfaces],
  platform: [Function: platform] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  release: [Function: getOSRelease] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  setPriority: [Function: setPriority],
  tmpdir: [Function: tmpdir] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  totalmem: [Function: getTotalMem] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  type: [Function: getOSType] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  userInfo: [Function: userInfo],
  uptime: [Function: __node_internal_checkError] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  version: [Function: getOSVersion] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  machine: [Function: getMachine] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  constants: [Object: null prototype] {
    UV_UDP_REUSEADDR: 4,
    dlopen: [Object: null prototype] {},
    errno: [Object: null prototype] {
      E2BIG: 7,
      EACCES: 13,
      EADDRINUSE: 100,
      EADDRNOTAVAIL: 101,
      EAFNOSUPPORT: 102,
      EAGAIN: 11,
      EALREADY: 103,
      EBADF: 9,
      EBADMSG: 104,
      EBUSY: 16,
      ECANCELED: 105,
      ECHILD: 10,
      ECONNABORTED: 106,
      ECONNREFUSED: 107,
      ECONNRESET: 108,
      EDEADLK: 36,
      EDESTADDRREQ: 109,
      EDOM: 33,
      EEXIST: 17,
      EFAULT: 14,
      EFBIG: 27,
      EHOSTUNREACH: 110,
      EIDRM: 111,
      EILSEQ: 42,
      EINPROGRESS: 112,
      EINTR: 4,
      EINVAL: 22,
      EIO: 5,
      EISCONN: 113,
      EISDIR: 21,
      ELOOP: 114,
      EMFILE: 24,
      EMLINK: 31,
      EMSGSIZE: 115,
      ENAMETOOLONG: 38,
      ENETDOWN: 116,
      ENETRESET: 117,
      ENETUNREACH: 118,
      ENFILE: 23,
      ENOBUFS: 119,
      ENODATA: 120,
      ENODEV: 19,
      ENOENT: 2,
      ENOEXEC: 8,
      ENOLCK: 39,
      ENOLINK: 121,
      ENOMEM: 12,
      ENOMSG: 122,
      ENOPROTOOPT: 123,
      ENOSPC: 28,
      ENOSR: 124,
      ENOSTR: 125,
      ENOSYS: 40,
      ENOTCONN: 126,
      ENOTDIR: 20,
      ENOTEMPTY: 41,
      ENOTSOCK: 128,
      ENOTSUP: 129,
      ENOTTY: 25,
      ENXIO: 6,
      EOPNOTSUPP: 130,
      EOVERFLOW: 132,
      EPERM: 1,
      EPIPE: 32,
      EPROTO: 134,
      EPROTONOSUPPORT: 135,
      EPROTOTYPE: 136,
      ERANGE: 34,
      EROFS: 30,
      ESPIPE: 29,
      ESRCH: 3,
      ETIME: 137,
      ETIMEDOUT: 138,
      ETXTBSY: 139,
      EWOULDBLOCK: 140,
      EXDEV: 18,
      WSAEINTR: 10004,
      WSAEBADF: 10009,
      WSAEACCES: 10013,
      WSAEFAULT: 10014,
      WSAEINVAL: 10022,
      WSAEMFILE: 10024,
      WSAEWOULDBLOCK: 10035,
      WSAEINPROGRESS: 10036,
      WSAEALREADY: 10037,
      WSAENOTSOCK: 10038,
      WSAEDESTADDRREQ: 10039,
      WSAEMSGSIZE: 10040,
      WSAEPROTOTYPE: 10041,
      WSAENOPROTOOPT: 10042,
      WSAEPROTONOSUPPORT: 10043,
      WSAESOCKTNOSUPPORT: 10044,
      WSAEOPNOTSUPP: 10045,
      WSAEPFNOSUPPORT: 10046,
      WSAEAFNOSUPPORT: 10047,
      WSAEADDRINUSE: 10048,
      WSAEADDRNOTAVAIL: 10049,
      WSAENETDOWN: 10050,
      WSAENETUNREACH: 10051,
      WSAENETRESET: 10052,
      WSAECONNABORTED: 10053,
      WSAECONNRESET: 10054,
      WSAENOBUFS: 10055,
      WSAEISCONN: 10056,
      WSAENOTCONN: 10057,
      WSAESHUTDOWN: 10058,
      WSAETOOMANYREFS: 10059,
      WSAETIMEDOUT: 10060,
      WSAECONNREFUSED: 10061,
      WSAELOOP: 10062,
      WSAENAMETOOLONG: 10063,
      WSAEHOSTDOWN: 10064,
      WSAEHOSTUNREACH: 10065,
      WSAENOTEMPTY: 10066,
      WSAEPROCLIM: 10067,
      WSAEUSERS: 10068,
      WSAEDQUOT: 10069,
      WSAESTALE: 10070,
      WSAEREMOTE: 10071,
      WSASYSNOTREADY: 10091,
      WSAVERNOTSUPPORTED: 10092,
      WSANOTINITIALISED: 10093,
      WSAEDISCON: 10101,
      WSAENOMORE: 10102,
      WSAECANCELLED: 10103,
      WSAEINVALIDPROCTABLE: 10104,
      WSAEINVALIDPROVIDER: 10105,
      WSAEPROVIDERFAILEDINIT: 10106,
      WSASYSCALLFAILURE: 10107,
      WSASERVICE_NOT_FOUND: 10108,
      WSATYPE_NOT_FOUND: 10109,
      WSA_E_NO_MORE: 10110,
      WSA_E_CANCELLED: 10111,
      WSAEREFUSED: 10112
    },
    signals: [Object: null prototype] {
      SIGHUP: 1,
      SIGINT: 2,
      SIGILL: 4,
      SIGABRT: 22,
      SIGFPE: 8,
      SIGKILL: 9,
      SIGSEGV: 11,
      SIGTERM: 15,
      SIGBREAK: 21,
      SIGWINCH: 28
    },
    priority: [Object: null prototype] {
      PRIORITY_LOW: 19,
      PRIORITY_BELOW_NORMAL: 10,
      PRIORITY_NORMAL: 0,
      PRIORITY_ABOVE_NORMAL: -7,
      PRIORITY_HIGH: -14,
      PRIORITY_HIGHEST: -20
    }
  },
  EOL: '\r\n',
  devNull: '\\\\.\\nul'
}
win32
C:\Users\Siomara
*/