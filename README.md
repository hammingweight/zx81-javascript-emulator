# zx81-javascript-emulator
A fork of Simon Holdsworth's *JtyOne* JavaScript Emulator for the Sinclair ZX81.

## History
Between 2003 and 2006, Mike Wynne wrote a C# emulator, `eightyOne` for the Sinclair ZX81 that was notable for its realistic rendering of the ZX81's graphics. Unlike most other emulators of the time, Wynne's emulator could reliably render pseudo high-resolution games like Forty-Niner. In 2006, Simon Holdsworth ported the emulator to Java (`JtyOne`) and in 2015 he ported the emulator to JavaScript.

The source and executables for `JtyOne` can be found in the [legacy directory](./legacy). 

![The ZX81](zx81.jpg)

## Why this fork?
Holdsworth's code is quite tightly coupled to the layout of his (excellent) [website](http://www.zx81stuff.org.uk/). For people who want to run a single program, the library is daunting to use. This fork is intended to make it easier to run single ZX81 programs (which must be in TZX format.)

## "Show me some running code"
To see the code in action, clone this repo and run
```
git clone https://github.com/hammingweight/zx81-javascript-emulator.git
cd zx81-javascript-emulator/src
python -m SimpleHTTPServer
```

and then open http://localhost:8000 and click on one of the links.

If cloning the repository is too much work, visit [hammingweight.github.io](https://hammingweight.github.io).

## Using this
You need to convert your `TZX` files to ASCII hex format and ensure that the resultant file suffix is `tzx.hex`. You can use, e.g., `xxd` to do the conversion
```
xxd -p VU-CALC.tzx | tr -d '\n' > 2.tzx.hex 
```

In the example above `2` is the ID of the ZX81 program (the ID doesn't need to be numeric.)

If you invoke a page running the [ZX81 JavaScript emulator](./src/zx81_emu.js) with an `id` query parameter (e.g. http://localhost:8000/zx81.html?id=2), the emulator will issue a `GET` request to the relative URL `tapes/{id}.tzx.hex`. 

Looking at the [src](./src) and [tapes](./src/tapes) folders should give you a good idea of what you should do. Of course, you might not want to have static content in a `tapes` directory; you might prefer to store the TZX "tapes" as binary blobs in an object store or database. No matter how or where you store a TZX archive, it must be returned as ASCII hex when a `GET` is issued to `/tapes/{id}.tzx.hex`.
